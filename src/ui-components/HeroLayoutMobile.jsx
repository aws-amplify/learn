/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function HeroLayoutMobile(props) {
  const { course, level, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="369px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayoutMobile")}
    >
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 389")}
      >
        <Text
          fontFamily="Amazon Ember Display"
          fontSize="16px"
          fontWeight="700"
          color="rgba(35,47,62,1)"
          textTransform="uppercase"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.13px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NEW COURSE"
          {...getOverrideProps(overrides, "NEW COURSE")}
        ></Text>
        <Icon
          width="24px"
          height="1px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 24 }}
          paths={[
            {
              d: "M0 1L-0.5 1L-0.5 1.5L0 1.5L0 1ZM24 1L24 1.5L24.5 1.5L24.5 1L24 1ZM0 0L0 -0.5L-0.5 -0.5L-0.5 0L0 0ZM24 0L24.5 0L24.5 -0.5L24 -0.5L24 0ZM0 1.5L24 1.5L24 0.5L0 0.5L0 1.5ZM-0.5 0L-0.5 1L0.5 1L0.5 0L-0.5 0ZM24 -0.5L0 -0.5L0 0.5L24 0.5L24 -0.5ZM24.5 1L24.5 0L23.5 0L23.5 1L24.5 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M24 1L0 1L0 0L24 0L24 1Z",
              fill: "rgba(169,182,183,1)",
              fillRule: "evenodd",
            },
          ]}
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Line 7 (Stroke)")}
        ></Icon>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="400"
          color="rgba(35,47,62,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Advanced"
          {...getOverrideProps(overrides, "Advanced")}
        ></Text>
        <Icon
          width="24px"
          height="1px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 24 }}
          paths={[
            {
              d: "M24 1L0 1L0 0L24 0L24 1Z",
              fill: "rgba(169,182,183,1)",
              fillRule: "evenodd",
            },
          ]}
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Line 8 (Stroke)")}
        ></Icon>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="400"
          color="rgba(35,47,62,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2h 36m"
          {...getOverrideProps(overrides, "2h 36m")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Amazon Ember Display"
        fontSize="32px"
        fontWeight="300"
        color="rgba(35,47,62,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={course?.title}
        {...getOverrideProps(
          overrides,
          "Build fullstack mobile applications with Amplify"
        )}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 57")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="35px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          size="small"
          isDisabled={false}
          variation="default"
          children="#fullstack"
          {...getOverrideProps(overrides, "Button31473035")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="35px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          size="small"
          isDisabled={false}
          variation="default"
          children="#mobile"
          {...getOverrideProps(overrides, "Button31473036")}
        ></Button>
      </Flex>
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
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={course?.description}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."
        )}
      ></Text>
      <Flex
        gap="8px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="8px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 16")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Explore course"
          {...getOverrideProps(overrides, "Button31473039")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Watch trailer"
          {...getOverrideProps(overrides, "Button31473040")}
        ></Button>
      </Flex>
    </Flex>
  );
}
