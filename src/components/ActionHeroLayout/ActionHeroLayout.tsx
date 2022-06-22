import { Button, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { ExternalIcon } from "../../ui-components";

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
          <ExternalIcon
            overrides={{
              "Vector 2": {
                // Override `paths`, because the `stroke` was changing the look of the vector for "ExternalIcon"
                // IMPORTANT: Whenever updating "ExternalIcon", make sure to update any overrides here too
                // @ts-ignore
                paths: [
                  {
                    d: "M7.62134 -0.707106C7.23082 -1.09763 6.59765 -1.09763 6.20713 -0.707108C5.81661 -0.316584 5.8166 0.316581 6.20713 0.707106L7.62134 -0.707106ZM13.8284 6.91421L14.5355 7.62132L15.2426 6.91421L14.5355 6.20711L13.8284 6.91421ZM6.20713 13.1213C5.8166 13.5118 5.81661 14.145 6.20713 14.5355C6.59765 14.9261 7.23082 14.9261 7.62134 14.5355L6.20713 13.1213ZM1.69931e-05 5.91421C-0.552268 5.91421 -0.999983 6.36193 -0.999983 6.91421C-0.999983 7.4665 -0.552268 7.91421 1.69931e-05 7.91421L1.69931e-05 5.91421ZM6.20713 0.707106L13.1213 7.62132L14.5355 6.20711L7.62134 -0.707106L6.20713 0.707106ZM13.1213 6.20711L6.20713 13.1213L7.62134 14.5355L14.5355 7.62132L13.1213 6.20711ZM13.8284 5.91421L1.69931e-05 5.91421L1.69931e-05 7.91421L13.8284 7.91421L13.8284 5.91421Z",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                  },
                ],
                // top: "39%"
              },
              Vector: {
                // Override `paths`, because the `stroke` was changing the look of the vector for "ExternalIcon"
                // IMPORTANT: Whenever updating "ExternalIcon", make sure to update any overrides here too
                // @ts-ignore
                paths: [
                  {
                    d: "M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16L23 16ZM6 1C6.55228 1 7 0.552285 7 0C7 -0.552285 6.55228 -1 6 -1L6 1ZM21 16L21 18L23 18L23 16L21 16ZM18 21L4 21L4 23L18 23L18 21ZM4 21C2.34315 21 1 19.6569 1 18L-1 18C-1 20.7614 1.23858 23 4 23L4 21ZM21 18C21 19.6569 19.6569 21 18 21L18 23C20.7614 23 23 20.7614 23 18L21 18ZM4 1L6 1L6 -1L4 -1L4 1ZM1 4C1 2.34315 2.34315 1 4 1L4 -1C1.23858 -1 -1 1.23858 -1 4L1 4ZM1 18L1 4L-1 4L-1 18L1 18Z",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                  },
                ]
              }
            }}
          />
        </Button>
      </Card>
    </Flex>
  );
}
