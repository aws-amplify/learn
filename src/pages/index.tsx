import { Button, View, Heading, Flex } from "@aws-amplify/ui-react";
import { ActionLayout } from "../components/ActionLayout";
import { Layout } from "../components/Layout";
import ExternalIconCustom from "../ui-components/ExternalIconCustom";
import { withSSRContext } from "aws-amplify";
import { Course, CourseTag, Tag } from "../models";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { trackExternalLink } from "../utils/track";
import { HeroCourse } from "../components/HeroCourse";
import { CardLayoutCollection } from "../components/CardLayoutCollection";
import { CardLayoutData } from "../types";
import awsmobile from "../aws-exports";
import { Amplify } from "aws-amplify";

export default function Home(data: any) {
  const featuredCourse: Course = deserializeModel(Course, data.featuredCourse);
  const featuredCourseTags: Tag[] = deserializeModel(
    Tag,
    data.featuredCourseTags
  );
  const cardLayouts: CardLayoutData[] = JSON.parse(data.cardLayouts);

  return (
    <Layout>
      <View
        as="div"
        columnStart="2"
        marginTop={{ base: "0px", small: "0px", medium: "0px", large: "64px" }}
      >
        <Flex
          direction="column"
          gap={{
            base: "64px",
            small: "64px",
            medium: "64px",
            large: "124px",
          }}
        >
          <HeroCourse course={featuredCourse} tags={featuredCourseTags} />
          <CardLayoutCollection
            cardLayouts={cardLayouts}
            isOnHomePage={true}
            filter={(e: CardLayoutData) => e.course.isFeatured === false}
            isPaginated={false}
            limit={4}
            gap="40px"
            templateColumns="1fr 1fr"
          />
        </Flex>
      </View>
      <ActionLayout>
        <View as="div">
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={3}>
            Take Amplify for a Spin!
          </Heading>
          <p>
            Build extensible, full-stack web and mobile apps faster. Easy to
            start, easy to scale.
          </p>
        </View>
        <View as="div">
          <Button
            variation="primary"
            size="large"
            gap="10px"
            width="max-content"
            onClick={() => {
              trackExternalLink("https://docs.amplify.aws/start/");
              window.open(
                "https://docs.amplify.aws/start/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Try Amplify now
            <ExternalIconCustom />
          </Button>
        </View>
      </ActionLayout>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  Amplify.configure({ ...awsmobile, ssr: true });

  const { DataStore } = withSSRContext(context);

  // Helper function to get Tags related to a Course
  const getCourseTags = async (courseId: string) => {
    const courseTags: CourseTag[] = await DataStore.query(CourseTag);

    const filteredCourseTags = courseTags.filter(
      (e) => e.course.id === courseId
    );

    return filteredCourseTags.map((e) => e.tag);
  };

  const courses: Course[] = await DataStore.query(Course);
  const courseTags: CourseTag[] = await DataStore.query(CourseTag);

  const featuredCourses: Course[] = await DataStore.query(Course, (c: any) =>
    c.isFeatured("eq", true)
  );

  let featuredCourse =
    featuredCourses.length === 1 ? featuredCourses[0] : courses[0];

  const featuredCourseTags = await getCourseTags(featuredCourse.id);

  const groupedCourseTags: Record<string, CardLayoutData> = {};

  courseTags.forEach((courseTag) => {
    if (!groupedCourseTags.hasOwnProperty(courseTag.course.id)) {
      const tags = [courseTag.tag];

      groupedCourseTags[courseTag.course.id] = {
        course: courseTag.course,
        tags,
      };
    } else {
      const cardLayout = groupedCourseTags[courseTag.course.id];

      const tags = cardLayout.tags;
      tags.push(courseTag.tag);

      groupedCourseTags[courseTag.course.id] = {
        course: courseTag.course,
        tags,
      };
    }
  });

  const flattenedCourseLayouts = Object.values(groupedCourseTags);

  return {
    props: {
      featuredCourse: serializeModel(featuredCourse),
      featuredCourseTags: serializeModel(featuredCourseTags),
      cardLayouts: JSON.stringify(flattenedCourseLayouts),
    },
    revalidate: 60,
  };
}
