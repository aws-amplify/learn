/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LearnLogo from "./LearnLogo";
import { Flex } from "@aws-amplify/ui-react";
import MenuIcon from "./MenuIcon";
export default function NavBarMobileCollapsed(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="924px"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarMobileCollapsed")}
    >
      <Flex
        gap="282px"
        direction="row"
        height="80px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 396")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="22px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 327")}
        >
          <LearnLogo
            display="flex"
            gap="8px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="22px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "LearnLogo")}
          ></LearnLogo>
        </Flex>
        <Flex
          gap="32px"
          direction="row"
          width="fit-content"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 321")}
        >
          <MenuIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuIcon")}
          ></MenuIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
