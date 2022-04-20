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
export default function ContributorHorizontal(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {},
        "Jane Doe": {},
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorHorizontal: {},
      },
      variantValues: {
        property1: "Horizontal",
        property2: "Regular",
        property3: "false",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": { border: "2px SOLID rgba(233,94,7,1)" },
        "Jane Doe": { color: "rgba(233,94,7,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorHorizontal: {},
      },
      variantValues: {
        property1: "Horizontal",
        property2: "Regular",
        property3: "true",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {
          border: "2px SOLID rgba(218,107,16,1)",
          backgroundColor: "rgba(242,243,243,1)",
        },
        "Jane Doe": { color: "rgba(218,107,16,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorHorizontal: {},
      },
      variantValues: {
        property1: "Horizontal",
        property2: "Regular",
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
      gap="16px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContributorHorizontal")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="64px"
        height="64px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(169,182,183,1)"
        borderRadius="100px"
        padding="4px 4px 4px 4px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 360")}
      >
        <Icon
          width="52px"
          height="52px"
          viewBox={{ minX: 0, minY: 0, width: 52, height: 52 }}
          paths={[
            {
              d: "M52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26Z",
              fillRule: "nonzero",
            },
          ]}
          grow="1"
          basis="52px"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 15")}
        ></Icon>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="48px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 331")}
      >
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,116,189,1)"
          lineHeight="24px"
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
          fontSize="16px"
          fontWeight="400"
          color="rgba(84,91,100,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
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
