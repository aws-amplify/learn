/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function ContributorLarge(props) {
  const { image, name, roleTitle, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {},
        "Jane Doe": {},
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
        property3: "false",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": { border: "3px SOLID rgba(233,94,7,1)" },
        "Jane Doe": { color: "rgba(233,94,7,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
        property3: "true",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {
          border: "3px SOLID rgba(218,107,16,1)",
          backgroundColor: "rgba(242,243,243,1)",
        },
        "Jane Doe": { color: "rgba(218,107,16,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
        property3: "false",
        property4: "true",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContributorLarge")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="128px"
        height="128px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(169,182,183,1)"
        borderRadius="100px"
        padding="9px 9px 9px 9px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 360")}
      >
        <Icon
          width="104px"
          height="104px"
          viewBox={{ minX: 0, minY: 0, width: 104, height: 104 }}
          paths={[
            {
              d: "M104 52C104 80.7188 80.7188 104 52 104C23.2812 104 0 80.7188 0 52C0 23.2812 23.2812 0 52 0C80.7188 0 104 23.2812 104 52Z",
              fillRule: "nonzero",
            },
          ]}
          grow="1"
          basis="104px"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 15")}
        ></Icon>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 331")}
      >
        <Text
          fontFamily="Amazon Ember"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,116,189,1)"
          lineHeight="32px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Jane Doe"
          {...getOverrideProps(overrides, "Jane Doe")}
        ></Text>
        <Text
          fontFamily="Amazon Ember"
          fontSize="20px"
          fontWeight="400"
          color="rgba(84,91,100,1)"
          lineHeight="32px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Developer Advocate"
          {...getOverrideProps(overrides, "Developer Advocate")}
        ></Text>
      </Flex>
    </Flex>
  );
}
