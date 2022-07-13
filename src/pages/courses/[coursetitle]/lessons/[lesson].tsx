import { useRouter } from "next/router";
import { DataStore } from "aws-amplify";
import { CourseLayout } from "../../../../components/CourseLayout";
import { Layout } from "../../../../components/Layout";
import { Course, Lesson } from "../../../../models";
import { useCallback, useEffect, useState } from "react";
import { YoutubeEmbed } from "../../../../components/YoutubeEmbed";
import {
  Placeholder,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { LessonTableOfContents } from "../../../../components/LessonTableOfContents";
import ReactMarkdown from "react-markdown";

const LessonPage = () => {
  const router = useRouter();
  const {
    coursetitle,
    lesson: lessonNumber,
  }: { coursetitle?: string; lesson?: string } = router.query;

  // Get the course title without the appended id
  const courseIdPrefix = coursetitle?.substring(
    coursetitle?.lastIndexOf("-") + 1,
    coursetitle.length
  );

  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const showInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

  async function getLesson() {
    if (courseIdPrefix && lessonNumber) {
      const courseResults = await DataStore.query(Course, (c) =>
        c.id("beginsWith", courseIdPrefix)
      );

      const courseResult = courseResults[0];
      setCourse(courseResult);

      if (courseResult) {
        const lessonResults = await DataStore.query(Lesson, (l) =>
          l
            .lessonCourseLessonId("eq", courseResult.id)
            .lessonNumber("eq", Number(lessonNumber))
        );

        const lessonResult = lessonResults[0];
        console.log("lesson", lessonResult);

        setIsLoaded(true);
        setLesson(lessonResult);
      }
    }
  }

  const getLessonCallback = useCallback(getLesson, [
    courseIdPrefix,
    lessonNumber,
  ]);

  useEffect(() => {
    getLessonCallback();
  }, [getLessonCallback]);

  // const test = 'Learn site \n  \n  lets gooooo\n \n learn learn learn'

  if (isLoaded) {
    return (
      <Layout>
        <CourseLayout
          course={course}
          mainChildren={
            <View as="div">
              {lesson?.youtubeEmbedId && (
                <View marginBottom="32px">
                  <YoutubeEmbed embedId={lesson?.youtubeEmbedId as string} />
                </View>
              )}
              <View as="div">
                <Text fontWeight="400" fontSize="1.25rem">
                  {course?.title}
                </Text>
                <Text fontWeight="300" fontSize="2.5rem">
                  {lesson?.title}
                </Text>
              </View>
              {!showInSidebarBreakpoint && (
                <View marginTop="32px">
                  <LessonTableOfContents
                    currentLesson={lessonNumber}
                    courseId={course?.id as string}
                  />
                </View>
              )}
              <View as="div" marginTop="64px">
                <ReactMarkdown
                  children={lesson?.content as string}
                />
              </View>
            </View>
          }
          sidebarChildren={
            <LessonTableOfContents
              currentLesson={lessonNumber}
              courseId={course?.id as string}
            />
          }
        />
      </Layout>
    );
  } else {
    return <Placeholder isLoaded={isLoaded} />;
  }
};

export default LessonPage;
