import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { LessonLayout } from "../../../../../components/LessonLayout";
import { Contributor, Course, Lesson } from "../../../../../models";
import { YoutubeEmbed } from "../../../../../components/YoutubeEmbed";
import { Text, useBreakpointValue, View, Flex } from "@aws-amplify/ui-react";
import { LessonTableOfContents } from "../../../../../components/LessonTableOfContents";
import { LearnMarkdown } from "../../../../../components/LearnMarkdown";
import { CoursesRouteLayout } from "../../../../../components/CoursesRouteLayout";
import { createCourseTitleUri } from "../../../../../utils";
import { useRouter } from "next/router";
import { Fallback } from "../../../../../components/Fallback";
import Link from "next/link";
import ArrowRightIconCustom from "../../../../../ui-components/ArrowRightIconCustom";
import styles from "./lesson.module.scss";
import { CardLayoutData, Context, MetaInfo } from "../../../../../types/models";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  getCardLayoutData,
  getCourseAndLessonData,
  getCourseContributors,
} from "../../../../../lib/getData";
import { ParsedUrlQuery } from "querystring";

export default function LessonPage(data: {
  course: Course;
  lessons: Lesson[];
  currentLesson: Lesson;
  contributors: Contributor[];
  cardLayoutData: string;
}) {
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

  const course: Course = deserializeModel(Course, data.course);
  const lessons: Lesson[] = deserializeModel(Lesson, data.lessons);
  const currentLesson: Lesson = deserializeModel(Lesson, data.currentLesson);
  const contributors: Contributor[] = deserializeModel(
    Contributor,
    data.contributors
  );
  const cardLayoutData: CardLayoutData[] = JSON.parse(data.cardLayoutData);

  const lessonNumber = currentLesson.lessonNumber;

  // Lesson page meta data
  const metaInfo: MetaInfo = {
    title: currentLesson.title,
    image: course.image,
    description: currentLesson.description,
    author: `${contributors
      .map((c) => `${c.firstName} ${c.lastName}`)
      .join(", ")}`,
  };

  return (
    <CoursesRouteLayout metaInfo={metaInfo}>
      <LessonLayout
        course={course}
        contributors={contributors}
        cardLayoutData={cardLayoutData}
        mainChildren={
          <View>
            {currentLesson.youtubeEmbedId && (
              <View marginBottom="32px">
                <YoutubeEmbed
                  embedId={currentLesson.youtubeEmbedId as string}
                />
              </View>
            )}
            <View>
              <h1>
                <Text as="span" fontWeight="400" fontSize="1.25rem">
                  {course.title}
                </Text>
                <br />
                <Text as="span" fontWeight="300" fontSize="2.5rem">
                  {currentLesson.title}
                </Text>
              </h1>
            </View>
            {!showInSidebarBreakpoint && (
              <View marginTop="32px">
                <LessonTableOfContents
                  currentLesson={`${currentLesson.lessonNumber}`}
                  lessons={lessons}
                />
              </View>
            )}
            <View marginTop="64px">
              <LearnMarkdown
                markdownContent={currentLesson.content as string}
              />
            </View>
            {lessonNumber < lessons.length && (
              <Flex justifyContent="flex-end">
                <View display="inline-block">
                  <Link
                    href={{
                      pathname: `${router.asPath.substring(
                        0,
                        router.asPath.lastIndexOf("/") + 1
                      )}${Number(lessonNumber) + 1}`,
                    }}
                  >
                    <a className={styles["next-lesson-link"]}>
                      <Flex
                        marginTop="50px"
                        alignItems="flex-end"
                        direction="column"
                        textAlign="right"
                      >
                        <Flex>
                          Next <ArrowRightIconCustom />
                        </Flex>
                        {lessons[lessonNumber].title}
                      </Flex>
                    </a>
                  </Link>
                </View>
              </Flex>
            )}
          </View>
        }
        sidebarChildren={
          <LessonTableOfContents
            currentLesson={`${currentLesson.lessonNumber}`}
            lessons={lessons}
          />
        }
      />
    </CoursesRouteLayout>
  );
}

interface LessonPageProps {
  course: JSON;
  lessons: JSON;
  currentLesson: JSON;
  contributors: JSON;
  cardLayoutData: string;
}

interface LessonPageParams extends ParsedUrlQuery {
  courseurltitle: string;
  lesson: string;
}

export async function getStaticPaths(
  context: GetStaticPaths & Context
): Promise<GetStaticPathsResult<LessonPageParams>> {
  const { DataStore } = withSSRContext(context);
  const lessons: Lesson[] = await DataStore.query(Lesson);
  const courses: Course[] = await DataStore.query(Course, (c: any) =>
    c.published("eq", true)
  );

  // Create object that contains course title, course Id, and the lesson number
  const data = courses.map((course) => {
    const filteredLessons = lessons.filter(
      (lesson) => lesson.lessonCourseLessonId === course.id
    );

    return filteredLessons.map((lesson) => ({
      courseurltitle: course.courseUrlTitle,
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
        courseurltitle: createCourseTitleUri(e.courseurltitle, e.courseId),
        lesson: e.lessonNumber,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<LessonPageParams> & Context
): Promise<GetStaticPropsResult<LessonPageProps>> {
  const courseAndLessonData = await getCourseAndLessonData(context);

  if (courseAndLessonData) {
    const { lesson: lessonNumber } = context.params as LessonPageParams;

    const currentLesson = courseAndLessonData.lessons[Number(lessonNumber) - 1];

    const cardLayoutData = await getCardLayoutData(context);

    const courseContributors = await getCourseContributors(
      context,
      (rel) => rel.course.id === courseAndLessonData.course.id
    );

    if (currentLesson && currentLesson.id) {
      return {
        props: {
          course: serializeModel(courseAndLessonData.course),
          lessons: serializeModel(courseAndLessonData.lessons),
          currentLesson: serializeModel(currentLesson),
          contributors: serializeModel(courseContributors),
          cardLayoutData: JSON.stringify(cardLayoutData),
        },
      };
    }
  }

  return {
    notFound: true,
  };
}
