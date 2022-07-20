import { Flex, Heading, Text } from "@aws-amplify/ui-react";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
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
