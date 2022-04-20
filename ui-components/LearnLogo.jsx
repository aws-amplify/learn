/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function LearnLogo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LearnLogo")}
    >
      <View
        width="24px"
        height="22px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <Icon
          width="24px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 18 }}
          paths={[
            {
              d: "M20.6144 18L10.1205 0L13.5019 0L24 18L20.6144 18ZM7.80721 4.3588L15.4882 18L18.7952 18L9.45719 1.42859L7.80721 4.3588ZM4.89082 9.54189L0 18L13.8795 18L12.1271 14.9696L5.2705 14.9696L8.70006 9.04304L6.94038 6L4.89082 9.54189Z",
              fill: "rgba(255,153,0,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="1px"
          left="0px"
          {...getOverrideProps(overrides, "Combined Shape")}
        >
          <Icon
            width="13.88px"
            height="12px"
            viewBox={{ minX: 0, minY: 0, width: 13.879638671875, height: 12 }}
            paths={[
              {
                d: "M4.89082 3.54189L0 12L13.8795 12L12.1271 8.96964L5.2705 8.96964L8.70006 3.04304L6.94038 0L4.89082 3.54189Z",
                fill: "rgba(255,153,0,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="6px"
            left="0px"
            {...getOverrideProps(overrides, "Fill 1")}
          ></Icon>
          <Icon
            width="10.99px"
            height="16.57px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.988037109375,
              height: 16.571426391601562,
            }}
            paths={[
              {
                d: "M0 2.93021L7.68101 16.5714L10.988 16.5714L1.64998 0L0 2.93021Z",
                fill: "rgba(255,153,0,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="1.43px"
            left="7.81px"
            {...getOverrideProps(overrides, "Path29813213")}
          ></Icon>
          <Icon
            width="13.88px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 13.879638671875, height: 18 }}
            paths={[
              {
                d: "M0 0L10.4938 18L13.8795 18L3.38142 0L0 0Z",
                fill: "rgba(255,153,0,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="0px"
            left="10.12px"
            {...getOverrideProps(overrides, "Path29813214")}
          ></Icon>
        </Icon>
      </View>
      <Text
        fontFamily="Amazon Ember"
        fontSize="20px"
        fontWeight="400"
        color="rgba(35,47,62,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Learn Amplify"
        {...getOverrideProps(overrides, "Amplify Admin UI")}
      ></Text>
    </Flex>
  );
}
