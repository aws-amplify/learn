import type { NextPage } from "next";
import { Button, Card, Heading } from "@aws-amplify/ui-react";
import { HomePageContent } from "../components/HomePageContent";
import { ActionLayout } from "../components/ActionLayout";
import { Layout } from "../components/Layout";
import ExternalIconCustom from "../ui-components/ExternalIconCustom";

const Home: NextPage = () => {
  return (
    <Layout>
      <Card columnStart="2">
        <HomePageContent />
      </Card>
      <ActionLayout>
        <Card>
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={3}>
            Take Amplify for a Spin!
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
            Try Amplify now
            <ExternalIconCustom />
          </Button>
        </Card>
      </ActionLayout>
    </Layout>
  );
};

export default Home;
