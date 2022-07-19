import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { LessonLayout } from "../../../../components/LessonLayout";
import { Course, Lesson } from "../../../../models";
import { YoutubeEmbed } from "../../../../components/YoutubeEmbed";
import { Text, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { LessonTableOfContents } from "../../../../components/LessonTableOfContents";
import { LearnMarkdown } from "../../../../components/LearnMarkdown";
import { CoursesRouteLayout } from "../../../../components/CoursesRouteLayout";

export default function LessonPage(data: any) {
  const course = deserializeModel(Course, data.course);
  const currentLesson = deserializeModel(Lesson, data.currentLesson);
  const lessons = deserializeModel(Lesson, data.lessons);
  const lessonNumber = currentLesson.lessonNumber;

  const showInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

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

export async function getServerSideProps(context: any) {
  const { DataStore } = withSSRContext(context);
  const { coursetitle, lesson: lessonNumber } = context.query;

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
      };
    }
  }

  return {
    notFound: true,
  };
}
