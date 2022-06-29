import { Grid, Heading, View, Text, Button, Card } from "@aws-amplify/ui-react";
import { NextPage } from "next";
import { ActionLayout } from "../../components/ActionLayout";
import { Contributors } from "../../components/Contributors";
import { Layout } from "../../components/Layout";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";

const AboutPage: NextPage = () => {
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
            About
          </Heading>
          <Text columnStart="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tristique senectus et netus et malesuada.
          </Text>
        </Grid>
        <Contributors />
        <ActionLayout>
        <Card>
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={3}>
            Let's Connect
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tristique senectus et netus et malesuada.
          </p>
        </Card>
        <Card>
          <Button
            variation="primary"
            size="large"
            gap="10px"
            width="max-content"
          >
            Chat on Discord
            <ExternalIconCustom />
          </Button>
        </Card>
      </ActionLayout>
      </View>
    </Layout>
  );
}

export default AboutPage;