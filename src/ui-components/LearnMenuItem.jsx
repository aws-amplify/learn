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
import { Flex, Text } from "@aws-amplify/ui-react";
import ExternalIcon from "./ExternalIcon";
export default function LearnMenuItem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Menu: {}, "Button Icon": {}, LearnMenuItem: {} },
      variantValues: { isDisabled: "false", isHover: "false" },
    },
    {
      overrides: {
        Menu: { color: "rgba(35,47,62,1)" },
        "Button Icon": {},
        LearnMenuItem: {},
      },
      variantValues: { isDisabled: "false", isHover: "true" },
    },
    {
      overrides: {
        Menu: { color: "rgba(169,182,183,1)" },
        "Button Icon": {},
        LearnMenuItem: {},
      },
      variantValues: { isDisabled: "true", isHover: "false" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LearnMenuItem")}
    >
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
        children="Menu"
        {...getOverrideProps(overrides, "Menu")}
      ></Text>
      <ExternalIcon
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Icon")}
      ></ExternalIcon>
    </Flex>
  );
}
