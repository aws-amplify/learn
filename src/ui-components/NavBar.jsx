/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import LearnLogo from "./LearnLogo";
import { Button, Flex, View } from "@aws-amplify/ui-react";
import LearnMenuItem from "./LearnMenuItem";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const frameFourZeroEightOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://docs.amplify.aws/",
  });
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
        width="454px"
        alignItems="center"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 327")}
      >
        <View
          width="157px"
          height="22px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 405")}
        >
          <LearnLogo
            display="flex"
            gap="8px"
            position="absolute"
            top="calc(50% - 11px - 0px)"
            left="0px"
            direction="row"
            alignItems="flex-start"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "LearnLogo")}
          ></LearnLogo>
        </View>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          height="30px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 406")}
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
            ishover="false"
            {...getOverrideProps(overrides, "LearnMenuItem31473021")}
          ></LearnMenuItem>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          height="30px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 407")}
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
            ishover="false"
            {...getOverrideProps(overrides, "LearnMenuItem31473022")}
          ></LearnMenuItem>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          height="30px"
          alignItems="center"
          grow="1"
          basis="74px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourZeroEightOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 408")}
        >
          <LearnMenuItem
            display="flex"
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            isDisabled={false}
            ishover="false"
            {...getOverrideProps(overrides, "LearnMenuItem31473023")}
          ></LearnMenuItem>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          display="flex"
          gap="10px"
          direction="row"
          width="163px"
          height="42px"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(169,182,183,1)"
          borderRadius="5px"
          padding="5px 16px 5px 16px"
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
