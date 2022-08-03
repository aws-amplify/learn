import { Flex, Loader } from "@aws-amplify/ui-react";
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
        <Loader
          size="large"
          ariaLabel="Loading"
          width="3em"
          height="3em"
          filledColor="#0074BD"
          fr={undefined}
        />
      </Flex>
    </Layout>
  );
}
