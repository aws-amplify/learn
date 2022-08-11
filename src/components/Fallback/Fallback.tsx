import { Flex, Loader } from "@aws-amplify/ui-react";
import { MetaInfo } from "../../types/models";
import { Layout } from "../Layout";

export function Fallback() {
  const metaInfo: MetaInfo = {
    title: "Loading",
    description: "Loading site",
  };

  return (
    <Layout metaInfo={metaInfo}>
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
