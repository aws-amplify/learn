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
            This site contains a collection of courses on{" "}
            <a
              target="_blank"
              href="https://docs.amplify.aws"
              rel="noopener noreferrer"
            >
              AWS Amplify
            </a>{" "}
            brought to you by the Developer Advocacy team working on the
            product.
          </Text>
        </Grid>
        <Contributors />
        <ActionLayout>
          <Card>
            <Heading fontFamily="Amazon Ember" fontWeight="300" level={3}>
              {`Let's Connect`}
            </Heading>
            <p>
              Join the Amplify Community Discord to ask questions, contribute to
              the open source project, and learn about new features.
            </p>
          </Card>
          <Card>
            <Button
              variation="primary"
              size="large"
              gap="10px"
              width="max-content"
              onClick={() => {
                window.open(
                  "https://discord.gg/amplify",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Chat on Discord
              <ExternalIconCustom />
            </Button>
          </Card>
        </ActionLayout>
      </View>
    </Layout>
  );
};

export default AboutPage;
