import { Button, View, Heading, Flex } from "@aws-amplify/ui-react";
import { ActionLayout } from "../components/ActionLayout";
import { Layout } from "../components/Layout";
import ExternalIconCustom from "../ui-components/ExternalIconCustom";
import { Course, Tag } from "../models";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { trackExternalLink } from "../utils/track";
import { HeroCourse } from "../components/HeroCourse";
import { CardLayoutCollection } from "../components/CardLayoutCollection";
import { CardLayoutData, Context } from "../types/models";
import { getCardLayoutData, getFeaturedCourseData } from "../lib/getData";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export default function Home(data: {
  featuredCourse: Course;
  featuredCourseTags: Tag[];
  cardLayoutData: string;
}) {
  const featuredCourse: Course = deserializeModel(Course, data.featuredCourse);
  const featuredCourseTags: Tag[] = deserializeModel(
    Tag,
    data.featuredCourseTags
  );
  const cardLayoutData: CardLayoutData[] = JSON.parse(data.cardLayoutData);

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
            cardLayouts={cardLayoutData}
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

export interface HomePageProps {
  featuredCourse: JSON;
  featuredCourseTags: JSON;
  cardLayoutData: string;
}

export async function getStaticProps(
  context: GetStaticPropsContext & Context
): Promise<GetStaticPropsResult<HomePageProps>> {
  const featuredCourseData = await getFeaturedCourseData(context);

  const cardLayoutData = await getCardLayoutData(context);

  return {
    props: {
      featuredCourse: serializeModel(featuredCourseData.course),
      featuredCourseTags: serializeModel(featuredCourseData.tags),
      cardLayoutData: JSON.stringify(cardLayoutData),
    },
    revalidate: 60,
  };
}
