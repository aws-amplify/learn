import { Button, View, Heading } from "@aws-amplify/ui-react";
import { HomePageContent } from "../components/HomePageContent";
import { ActionLayout } from "../components/ActionLayout";
import { Layout } from "../components/Layout";
import ExternalIconCustom from "../ui-components/ExternalIconCustom";
import { withSSRContext } from "aws-amplify";
import { Course } from "../models";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { trackExternalLink } from "../utils/track";

export default function Home(data: any) {
  const featuredCourse = deserializeModel(Course, data.featuredCourse);

  return (
    <Layout>
      <View
        as="div"
        columnStart="2"
        marginTop={{ base: "0px", small: "0px", medium: "0px", large: "64px" }}
      >
        <HomePageContent heroCourse={featuredCourse} />
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
  const { DataStore } = withSSRContext(context);

  const featuredCourse = await DataStore.query(Course, (c: any) =>
    c.isFeatured("eq", true)
  );

  if (featuredCourse.length === 1) {
    return {
      props: {
        featuredCourse: serializeModel(featuredCourse[0]),
      },
      revalidate: 60,
    };
  } else {
    const firstCourse = await DataStore.query(Course);

    return {
      props: {
        featuredCourse: serializeModel(firstCourse[0]),
      },
      revalidate: 60,
    };
  }
}
