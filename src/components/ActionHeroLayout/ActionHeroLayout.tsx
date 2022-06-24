import { Button, Card, Flex, Heading } from "@aws-amplify/ui-react";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";

export function ActionHeroLayout() {
  return (
    <Flex
      direction={{
        base: "column",
        small: "column",
        medium: "column",
        large: "row",
      }}
      height="45vh"
      alignItems={{
        base: "flex-start",
        small: "flex-start",
        medium: "flex-start",
        large: "center",
      }}
      columnStart="2"
      gap={{
        base: "0px",
        small: "0px",
        medium: "0px",
        large: "200px",
      }}
    >
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
        <Button variation="primary" size="large" gap="10px" width="max-content">
          Try Amplify now
          <ExternalIconCustom />
        </Button>
      </Card>
    </Flex>
  );
}
