import { Grid, Heading, View } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { withSSRContext } from "aws-amplify";
import { Tag } from "../../models";
import { TagButton } from "../../components/TagButton";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";

export default function TagsPage(data: any) {
  const tags: Tag[] = deserializeModel(Tag, data.tags);

  return (
    <Layout>
      <View
        columnStart={{
          base: "1",
          small: "1",
          medium: "1",
          large: "2",
        }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr",
          }}
          gap="16px"
          marginBottom={{
            base: "64px",
            small: "64px",
            medium: "64px",
            large: "128px",
          }}
        >
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={1}>
            Tags
          </Heading>
        </Grid>
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr 1fr",
            large: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          gap="20px"
        >
          {tags.map((tag) => (
            <TagButton key={tag.id} tag={tag} inCourseLayout={false} />
          ))}
        </Grid>
      </View>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const { DataStore } = withSSRContext(context);

  const tags: Tag[] = await DataStore.query(Tag);

  return {
    props: {
      tags: serializeModel(tags),
    },
    revalidate: 60,
  };
}
