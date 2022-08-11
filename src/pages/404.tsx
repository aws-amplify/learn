import { Flex, Heading, Text } from "@aws-amplify/ui-react";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { MetaInfo } from "../types/models";

export default function Custom404() {
  // 404 page meta data
  const metaObject: MetaInfo = {
    title: "Not Found - Learn Amplify",
    description: "We could not find what you were looking for on Learn Amplify",
    url: "https://amplify.aws/learn",
    image: "",
  };

  return (
    <Layout metaObject={metaObject}>
      <Flex
        direction="column"
        columnStart={{ base: "1", small: "1", medium: "1", large: "2" }}
        justifyContent="center"
        textAlign="center"
        height="calc(45vh - 80px)"
      >
        <Heading level={1} fontFamily="Amazon Ember Display" fontSize="2rem">
          Page Not Found
        </Heading>
        <Text>
          The link you clicked may be broken or the page may have been removed
        </Text>
        <Text>
          Go to the{" "}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </Text>
      </Flex>
    </Layout>
  );
}
