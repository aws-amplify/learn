/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function LearnBreadcrumb(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(242,243,243,1)"
      {...rest}
      {...getOverrideProps(overrides, "LearnBreadcrumb")}
    >
      <Button
        display="flex"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Home"
        {...getOverrideProps(overrides, "Button31473057")}
      ></Button>
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-right31473058")}
      ></View>
      <Button
        display="flex"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="link"
        children="All Courses"
        {...getOverrideProps(overrides, "Button31473059")}
      ></Button>
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-right31473060")}
      ></View>
      <Button
        display="flex"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Overview"
        {...getOverrideProps(overrides, "Button31473061")}
      ></Button>
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-right31473062")}
      ></View>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="Lesson"
        {...getOverrideProps(overrides, "Button31473063")}
      ></Button>
    </Flex>
  );
}
