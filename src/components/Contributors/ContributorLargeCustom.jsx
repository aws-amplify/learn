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
import { Flex, Text, View } from "@aws-amplify/ui-react";
import styles from "./ContributorCollection.module.scss";
import Image from "next/image";
export default function ContributorLargeCustom(props) {
  const { contributor, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {},
        "Jane Doe": {},
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
        property3: "false",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": { border: "3px SOLID rgba(233,94,7,1)" },
        "Jane Doe": { color: "rgba(233,94,7,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
        property3: "true",
        property4: "false",
      },
    },
    {
      overrides: {
        "Ellipse 15": {},
        "Frame 360": {
          border: "3px SOLID rgba(218,107,16,1)",
          backgroundColor: "rgba(242,243,243,1)",
        },
        "Jane Doe": { color: "rgba(218,107,16,1)" },
        "Developer Advocate": {},
        "Frame 331": {},
        ContributorLarge: {},
      },
      variantValues: {
        property1: "Vertical",
        property2: "Large",
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
      gap="24px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContributorLarge")}
    >
      <Flex
        className={styles["profile-pic-container"]}
        gap="10px"
        direction="row"
        width="128px"
        height="128px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(169,182,183,1)"
        borderRadius="100px"
        padding="9px 9px 9px 9px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 360")}
      >
        <View
          width="104px"
          height="104px"
          overflow="hidden"
          position="relative"
          borderRadius="50%"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={contributor?.profilePic}
            alt={`Profile picture`}
            priority={true}
          ></Image>
        </View>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 331")}
      >
        <Text
          className={styles["contributor-name"]}
          fontFamily="Amazon Ember"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,116,189,1)"
          lineHeight="32px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="nowrap"
          {...getOverrideProps(overrides, "Jane Doe")}
        >{`${contributor.firstName} ${contributor.lastName}`}</Text>
        <Text
          fontFamily="Amazon Ember"
          fontSize="20px"
          fontWeight="400"
          color="rgba(84,91,100,1)"
          lineHeight="32px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="nowrap"
          children={contributor?.jobTitle}
          {...getOverrideProps(overrides, "Developer Advocate")}
        ></Text>
      </Flex>
    </Flex>
  );
}
