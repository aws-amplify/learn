import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { LessonLayout } from "../../../../components/LessonLayout";
import { Course, Lesson } from "../../../../models";
import { YoutubeEmbed } from "../../../../components/YoutubeEmbed";
import { Text, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { LessonTableOfContents } from "../../../../components/LessonTableOfContents";
import { LearnMarkdown } from "../../../../components/LearnMarkdown";
import { CoursesRouteLayout } from "../../../../components/CoursesRouteLayout";
import { createCourseTitleUri } from "../../../../utils";
import { useRouter } from "next/router";
import { Fallback } from "../../../../components/Fallback";

export default function LessonPage(data: any) {
  const showInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const course = deserializeModel(Course, data.course);
  const currentLesson = deserializeModel(Lesson, data.currentLesson);
  const lessons = deserializeModel(Lesson, data.lessons);
  const lessonNumber = currentLesson.lessonNumber;

  return (
    <CoursesRouteLayout>
      <LessonLayout
        course={course}
        mainChildren={
          <View as="div">
            {currentLesson?.youtubeEmbedId && (
              <View marginBottom="32px">
                <YoutubeEmbed
                  embedId={currentLesson?.youtubeEmbedId as string}
                />
              </View>
            )}
            <View as="div">
              <Text fontWeight="400" fontSize="1.25rem">
                {course?.title}
              </Text>
              <Text fontWeight="300" fontSize="2.5rem">
                {currentLesson?.title}
              </Text>
            </View>
            {!showInSidebarBreakpoint && (
              <View marginTop="32px">
                <LessonTableOfContents
                  currentLesson={lessonNumber}
                  courseId={course.id as string}
                  lessons={lessons}
                />
              </View>
            )}
            <View as="div" marginTop="64px">
              <LearnMarkdown
                markdownContent={currentLesson?.content as string}
              />
            </View>
          </View>
        }
        sidebarChildren={
          <LessonTableOfContents
            currentLesson={lessonNumber}
            courseId={course?.id as string}
            lessons={lessons}
          />
        }
      />
    </CoursesRouteLayout>
  );
}

export async function getStaticPaths(context: any) {
  const { DataStore } = withSSRContext(context);
  const lessons: Lesson[] = await DataStore.query(Lesson);
  const courses: Course[] = await DataStore.query(Course);

  // Create object that contains course title, course Id, and the lesson number
  const data = courses.map((course) => {
    const filteredLessons = lessons.filter(
      (lesson) => lesson.lessonCourseLessonId === course.id
    );

    return filteredLessons.map((lesson) => ({
      courseTitle: course.title,
      courseId: course.id,
      lessonNumber: `${lesson.lessonNumber}`,
    }));
  });

  // `data` is an array of arrays so we need to flatten it in order to have the
  // correct structure to return the paths
  const flatData = data.reduce((acc, currentValue) => {
    acc.push(...currentValue);
    return acc;
  }, []);

  return {
    paths: flatData.map((e) => ({
      params: {
        coursetitle: createCourseTitleUri(e.courseTitle, e.courseId),
        lesson: e.lessonNumber,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { DataStore } = withSSRContext(context);
  const { coursetitle, lesson: lessonNumber } = context.params;

  // Get the course title without the appended id
  const originalCourseTitle = coursetitle
    ?.substring(0, coursetitle?.lastIndexOf("-"))
    .replace(/-/g, " ");

  // Get the course Id prefix
  const courseIdPrefix = coursetitle?.substring(
    coursetitle?.lastIndexOf("-") + 1,
    coursetitle.length
  );

  const courseResults: Course[] = await DataStore.query(Course, (c: any) =>
    c.id("beginsWith", courseIdPrefix).title("eq", originalCourseTitle)
  );

  const courseResult = courseResults[0];

  if (courseResult) {
    const result: Lesson[] = await DataStore.query(Lesson, (l: any) =>
      l.lessonCourseLessonId("eq", courseResult.id)
    );

    const lessonsSorted = result.sort(
      (a, b) => a.lessonNumber - b.lessonNumber
    );

    const currentLesson = lessonsSorted[lessonNumber - 1];

    if (currentLesson && currentLesson.id) {
      return {
        props: {
          course: serializeModel(courseResult),
          currentLesson: serializeModel(currentLesson),
          lessons: serializeModel(lessonsSorted),
        },
        revalidate: 60,
      };
    }
  }

  return {
    notFound: true,
  };
}
