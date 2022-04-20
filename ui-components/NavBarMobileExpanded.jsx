/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LearnLogo from "./LearnLogo";
import { Flex, View } from "@aws-amplify/ui-react";
import CloseIcon from "./CloseIcon";
import LearnMenuItem from "./LearnMenuItem";
export default function NavBarMobileExpanded(props) {
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
      {...getOverrideProps(overrides, "NavBarMobileExpanded")}
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
          <CloseIcon
            width="24px"
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "CloseIcon")}
          ></CloseIcon>
        </Flex>
      </Flex>
      <View
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(214,220,220,1)"
        {...getOverrideProps(overrides, "Rectangle 13")}
      ></View>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 32px 16px 32px"
        {...getOverrideProps(overrides, "Frame 397")}
      >
        <LearnMenuItem
          display="flex"
          gap="10px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          isDisabled={false}
          isHover={false}
          {...getOverrideProps(overrides, "LearnMenuItem35367421")}
        ></LearnMenuItem>
      </Flex>
      <View
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(214,220,220,1)"
        {...getOverrideProps(overrides, "Rectangle 14")}
      ></View>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 32px 16px 32px"
        {...getOverrideProps(overrides, "Frame 400")}
      >
        <LearnMenuItem
          display="flex"
          gap="10px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          isDisabled={false}
          isHover={false}
          {...getOverrideProps(overrides, "LearnMenuItem35367424")}
        ></LearnMenuItem>
      </Flex>
      <View
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(214,220,220,1)"
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></View>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 32px 16px 32px"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <LearnMenuItem
          display="flex"
          gap="10px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          isDisabled={false}
          isHover={false}
          {...getOverrideProps(overrides, "LearnMenuItem35367427")}
        ></LearnMenuItem>
      </Flex>
      <View
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(214,220,220,1)"
        {...getOverrideProps(overrides, "Rectangle 16")}
      ></View>
    </Flex>
  );
}
