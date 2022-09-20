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
export default function LearnSocial(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { GithubIcon: {}, LearnSocial: {} },
      variantValues: { isHover: "false", isActive: "false" },
    },
    {
      overrides: {
        GithubIcon: {},
        LearnSocial: {
          border: "1px SOLID rgba(35,47,62,1)",
          backgroundColor: "rgba(242,243,243,1)",
        },
      },
      variantValues: { isHover: "true", isActive: "false" },
    },
    {
      overrides: {
        GithubIcon: {},
        LearnSocial: {
          border: "1px SOLID rgba(35,47,62,1)",
          backgroundColor: "rgba(233,236,236,1)",
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
    <View
      width="41px"
      height="41px"
      position="relative"
      border="1px SOLID rgba(169,182,183,1)"
      borderRadius="100.5px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LearnSocial")}
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
