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
import GithubIcon from "./GithubIcon";
import { View } from "@aws-amplify/ui-react";
export default function LearnSocialBorderless(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { GithubIcon: {}, LearnSocialBorderless: {} },
      variantValues: { isHover: "false", isActive: "false" },
    },
    {
      overrides: {
        GithubIcon: {},
        LearnSocialBorderless: { backgroundColor: "rgba(233,236,236,1)" },
      },
      variantValues: { isHover: "true", isActive: "false" },
    },
    {
      overrides: {
        GithubIcon: {},
        LearnSocialBorderless: { backgroundColor: "rgba(214,220,220,1)" },
      },
      variantValues: { isHover: "false", isActive: "true" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="40px"
      height="40px"
      position="relative"
      borderRadius="100px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LearnSocialBorderless")}
    >
      <GithubIcon
        position="absolute"
        top="20%"
        bottom="20%"
        left="20%"
        right="20%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "GithubIcon")}
      ></GithubIcon>
    </View>
  );
}
