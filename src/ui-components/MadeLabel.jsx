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
import AmplifyBorderLogo from "./AmplifyBorderLogo";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import HeartIcon from "./HeartIcon";
export default function MadeLabel(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        AmplifyBorderLogo: {},
        Divider: {},
        "Made with": {},
        HeartIcon: {},
        "in Amplify": {},
        "Frame 386": {},
        MadeLabel: {},
      },
      variantValues: { isHover: "false", isActive: "false" },
    },
    {
      overrides: {
        AmplifyBorderLogo: {},
        Divider: {},
        "Made with": { color: "rgba(35,47,62,1)" },
        HeartIcon: {},
        "in Amplify": { color: "rgba(35,47,62,1)" },
        "Frame 386": {},
        MadeLabel: {
          border: "1px SOLID rgba(35,47,62,1)",
          backgroundColor: "rgba(250,250,250,1)",
        },
      },
      variantValues: { isHover: "true", isActive: "false" },
    },
    {
      overrides: {
        AmplifyBorderLogo: {},
        Divider: {},
        "Made with": { color: "rgba(35,47,62,1)" },
        HeartIcon: {},
        "in Amplify": { color: "rgba(35,47,62,1)" },
        "Frame 386": {},
        MadeLabel: {
          border: "1px SOLID rgba(35,47,62,1)",
          backgroundColor: "rgba(242,243,243,1)",
        },
      },
      variantValues: { isHover: "false", isActive: "true" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(169,182,183,1)"
      borderRadius="4px"
      padding="7px 19px 7px 19px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MadeLabel")}
    >
      <AmplifyBorderLogo
        width="25.3px"
        height="19.63px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AmplifyBorderLogo")}
      ></AmplifyBorderLogo>
      <Divider
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="4px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 386")}
      >
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="700"
          color="rgba(84,91,100,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Made with "
          {...getOverrideProps(overrides, "Made with")}
        ></Text>
        <HeartIcon
          width="16px"
          height="16px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HeartIcon")}
        ></HeartIcon>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="700"
          color="rgba(84,91,100,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="in Amplify"
          {...getOverrideProps(overrides, "in Amplify")}
        ></Text>
      </Flex>
    </Flex>
  );
}
