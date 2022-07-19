import { Text, Grid, Heading, View, Placeholder } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { NextPage } from "next";
import { DataStore, Hub } from "aws-amplify";
import { useCallback, useEffect, useState } from "react";
import { Tag } from "../../models";
import { TagButton } from "../../components/TagButton";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";

const TagsPage: NextPage = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function queryTags() {
    const results = await DataStore.query(Tag);

    if (results.length > 0) {
      setTags(results);
      setIsLoading(false);
    }
  }

  const callback = useCallback(queryTags, []);

  useFirstDatastoreQuery(callback);

  useEffect(() => {
    // If we still don't have the tags then try and query again
    if (tags.length < 1) {
      queryTags();
    }
  }, [tags.length]);

  return (
    <Layout>
      <View columnStart="2">
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
          <Text columnStart="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tristique senectus et netus et malesuada.
          </Text>
        </Grid>
        {isLoading ? (
          <Placeholder size="large" isLoaded={!isLoading} />
        ) : (
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
        )}
      </View>
    </Layout>
  );
};

export default TagsPage;
