/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LearnLogo from "./LearnLogo";
import LearnMenuItem from "./LearnMenuItem";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { navBar, overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="row"
      width="924px"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 32px 0px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="40px"
        direction="row"
        width="475px"
        alignItems="center"
        shrink="0"
        height="24px"
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
        <Flex
          gap="40px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32131473019")}
        >
          <LearnMenuItem
            display="flex"
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            isDisabled={false}
            isHover="false"
            {...getOverrideProps(overrides, "LearnMenuItem31473021")}
          ></LearnMenuItem>
          <LearnMenuItem
            display="flex"
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            isDisabled={false}
            isHover={false}
            {...getOverrideProps(overrides, "LearnMenuItem31473022")}
          ></LearnMenuItem>
          <LearnMenuItem
            display="flex"
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            isDisabled={false}
            isHover={false}
            {...getOverrideProps(overrides, "LearnMenuItem31473023")}
          ></LearnMenuItem>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32131473024")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Try Amplify"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
