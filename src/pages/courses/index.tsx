import { Text, Grid, Heading, View } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";

export default function CoursesPage() {
  return (
    <Layout>
      <View columnStart="2">
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr"
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
            Courses
          </Heading>
          <Text columnStart="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tristique senectus et netus et malesuada.
          </Text>
        </Grid>
        <CardLayoutCollection
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr",
            xl: "1fr 1fr 1fr"
          }}
          gap="64px"
          isOnHomePage={false}
          marginBottom={{
            base: "118px",
            small: "118px",
            medium: "75px",
            large: "152px",
          }}
        />
      </View>
    </Layout>
  );
}
