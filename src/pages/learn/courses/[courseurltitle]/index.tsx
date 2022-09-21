import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { CoursesRouteLayout } from "../../../../components/CoursesRouteLayout";
import { Contributor, Course, Lesson, Tag } from "../../../../models";
import { capitalizeEnum, createCourseTitleUri } from "../../../../utils";
import { useRouter } from "next/router";
import { Fallback } from "../../../../components/Fallback";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  CardLayoutData,
  Context,
  CoursePageParams,
  CoursePageProps,
  MetaInfo,
} from "../../../../types/models";
import {
  getCardLayoutData,
  getCourseAndLessonData,
  getCourseContributors,
  getCourseTags,
} from "../../../../lib/getData";
import { useState } from "react";
import {
  Button,
  Flex,
  useBreakpointValue,
  Image,
  Text,
  Card,
  View,
} from "@aws-amplify/ui-react";
import { LessonLayout } from "../../../../components/LessonLayout";
import { default as HeroLayout } from "../../../../ui-components/HeroLayoutCustom";
import { LessonTableOfContents } from "../../../../components/LessonTableOfContents";
import { YoutubeModal } from "../../../../components/YoutubeModal";
import Link from "next/link";
import { LearnMarkdown } from "../../../../components/LearnMarkdown";

export default function CoursePage(data: {
  course: Course;
  lessons: Lesson[];
  tags: Tag[];
  contributors: Contributor[];
  cardLayoutData: string;
}) {
  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const heroLayoutVariant = useBreakpointValue({
    base: "mobile",
    small: "mobile ",
    medium: "default",
    large: "default",
  }) as "mobile" | "default";

  if (router.isFallback) {
    return <Fallback />;
  }

  const course: Course = deserializeModel(Course, data.course);
  const lessons: Lesson[] = deserializeModel(Lesson, data.lessons);
  const tags: Tag[] = deserializeModel(Tag, data.tags);
  const contributors: Contributor[] = deserializeModel(
    Contributor,
    data.contributors
  );
  const cardLayoutData: CardLayoutData[] = JSON.parse(data.cardLayoutData);

  const buttonGroup = (
    <>
      <View width="100%">
        <Link
          href={{
            pathname: `${router.pathname}/lessons/[lesson]`,
          }}
          as={`${router.asPath}/lessons/1`}
        >
          <a className="link-button">
            <View
              className="amplify-button amplify-button--primary"
              fontSize="1.17rem"
              width="100%"
            >
              Start course
            </View>
          </a>
        </Link>
      </View>
      <Button
        isFullWidth={true}
        onClick={() => {
          setIsOpen(true);
        }}
        fontSize="1.17rem"
      >
        Watch trailer
      </Button>
    </>
  );

  // Course page meta data
  const metaInfo: MetaInfo = {
    title: course.title,
    image: course.image,
    description: course.description,
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
          <>
            <Flex direction="column" gap="32px">
              <HeroLayout
                variation={heroLayoutVariant}
                course={course}
                tags={tags}
                shrink="10"
                overrides={{
                  "NEW COURSE": {
                    children: "COURSE",
                  },
                  Divider33082631: {
                    display: "none",
                  },
                  Advanced: {
                    display: "none",
                  },
                  Divider33082633: {
                    display: "none",
                  },
                  "2h 36m": {
                    display: "none",
                  },
                  "Frame 16": {
                    width: "auto",
                  },
                  Button31473054: {
                    display: "none",
                  },
                  Button31473055: {
                    display: "none",
                  },
                }}
              />
              <Flex
                display={{
                  base: "flex",
                  small: "flex",
                  medium: "flex",
                  large: "none",
                }}
                direction={{
                  base: "column",
                  small: "column",
                  medium: "row",
                  large: "column",
                  xl: "column",
                }}
              >
                {buttonGroup}
              </Flex>
              <Flex justifyContent="center">
                <Image
                  objectFit="cover"
                  overflow="hidden"
                  width="100%"
                  maxHeight="350px"
                  src={course.image || ""}
                  alt={course.imageAltText || ""}
                  borderRadius="8px"
                />
              </Flex>
            </Flex>
            <Flex
              direction={{
                base: "column",
                small: "column",
                medium: "row",
              }}
              columnStart={1}
              marginTop="32px"
            >
              <Card
                variation="outlined"
                border="1px solid #A9B6B7"
                borderRadius="8px"
                backgroundColor="#F2F3F3"
                width="100%"
              >
                <Flex direction="column" alignItems="center">
                  <Text
                    fontFamily="Amazon Ember Display"
                    fontSize="0.875rem"
                    color="#545B64"
                  >
                    SKILL LEVEL
                  </Text>
                  <Text
                    fontFamily="Amazon Ember Display"
                    fontSize="16px"
                    fontWeight="400"
                    color="#232F3E"
                    lineHeight="24px"
                    display="flex"
                    letterSpacing="0.01px"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                  >
                    {capitalizeEnum(course.skillLevel)}
                  </Text>
                </Flex>
              </Card>
              <Card
                variation="outlined"
                border="1px solid #A9B6B7"
                borderRadius="8px"
                backgroundColor="#F2F3F3"
                width="100%"
              >
                <Flex direction="column" alignItems="center">
                  <Text
                    fontFamily="Amazon Ember Display"
                    fontSize="0.875rem"
                    color="#545B64"
                    whiteSpace="nowrap"
                  >
                    TIME TO COMPLETE
                  </Text>
                  <Text
                    fontFamily="Amazon Ember Display"
                    fontSize="16px"
                    fontWeight="400"
                    color="#232F3E"
                    lineHeight="24px"
                    display="flex"
                    letterSpacing="0.01px"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                  >{`${course.timeHours}${"h "}${
                    course.timeMinutes
                  }${"m"}`}</Text>
                </Flex>
              </Card>
            </Flex>
            <View columnStart={1} marginTop="32px">
              <LessonTableOfContents lessons={lessons} />
            </View>
            {course.trailerEmbedId && (
              <YoutubeModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                courseTitle={course.title}
                courseTrailerEmbedId={course.trailerEmbedId}
              />
            )}
            <Flex
              columnStart={1}
              direction="column"
              marginTop="64px"
              marginBottom="64px"
            >
              <Text
                fontFamily="Amazon Ember Display"
                fontStyle="normal"
                fontWeight="100"
                fontSize="2rem"
                color="#232F3E"
              >
                {`What you'll learn`}
              </Text>
              <Text fontFamily="Amazon Ember">
                <LearnMarkdown markdownContent={course.learningObjective} />
              </Text>
            </Flex>
            {course?.requirements && course.requirements.length > 0 && (
              <Flex columnStart={1} direction="column">
                <Text
                  fontFamily="Amazon Ember Display"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="1.25rem"
                  color="#232F3E"
                >
                  Requirements
                </Text>
                <ul>
                  {course.requirements.map((requirement, index) => {
                    return (
                      <li key={index}>
                        <Text fontFamily="Amazon Ember" whiteSpace="pre-line">
                          {requirement}
                        </Text>
                      </li>
                    );
                  })}
                </ul>
              </Flex>
            )}
          </>
        }
        sidebarChildren={buttonGroup}
      />
    </CoursesRouteLayout>
  );
}

export async function getStaticPaths(
  context: GetStaticPaths & Context
): Promise<GetStaticPathsResult<CoursePageParams>> {
  const { DataStore } = withSSRContext(context);
  const courses: Course[] = await DataStore.query(Course, (c: any) =>
    c.published("eq", true)
  );

  return {
    paths: courses.map((course) => ({
      params: {
        courseurltitle: createCourseTitleUri(course.courseUrlTitle, course.id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<CoursePageParams> & Context
): Promise<GetStaticPropsResult<CoursePageProps>> {
  const courseAndLessonData = await getCourseAndLessonData(context);

  if (courseAndLessonData) {
    const courseTags = await getCourseTags(
      context,
      courseAndLessonData.course.id
    );

    const cardLayoutData = await getCardLayoutData(context);

    const courseContributors = await getCourseContributors(
      context,
      (rel) => rel.course.id === courseAndLessonData.course.id
    );

    return {
      props: {
        course: serializeModel(courseAndLessonData.course),
        lessons: serializeModel(courseAndLessonData.lessons),
        tags: serializeModel(courseTags),
        contributors: serializeModel(courseContributors),
        cardLayoutData: JSON.stringify(cardLayoutData),
      },
    };
  }

  return {
    notFound: true,
  };
}
