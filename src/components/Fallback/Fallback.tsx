import { Flex, Placeholder } from "@aws-amplify/ui-react";
import { Layout } from "../Layout";

export function Fallback() {
  return (
    <Layout>
      <Flex
        columnStart={{
          base: "1",
          small: "1",
          medium: "1",
          large: "2",
        }}
        justifyContent="center"
        alignItems="center"
        height="calc(45vh - 80px)"
      >
        <Placeholder size="large" ariaLabel="Loading" />
      </Flex>
    </Layout>
  );
}
