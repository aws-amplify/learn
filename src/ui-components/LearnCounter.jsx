/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function LearnCounter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LearnCounter")}
    >
      <Text
        fontFamily="Amazon Ember Display"
        fontSize="14px"
        fontWeight="700"
        color="rgba(135,150,151,1)"
        textTransform="uppercase"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.97px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time to Complete"
        {...getOverrideProps(overrides, "Time to Complete")}
      ></Text>
      <Text
        fontFamily="Amazon Ember Display"
        fontSize="20px"
        fontWeight="500"
        color="rgba(84,91,100,1)"
        lineHeight="32px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2h 36m"
        {...getOverrideProps(overrides, "2h 36m")}
      ></Text>
    </Flex>
  );
}
