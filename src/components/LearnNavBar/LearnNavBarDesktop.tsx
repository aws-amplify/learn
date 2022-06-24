import { Button, Flex, View, Text } from "@aws-amplify/ui-react";
import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import { useState } from "react";
import { LearnLogo } from "../../ui-components";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";
import styles from "./LearnNavBarDesktop.module.scss";

export function LearnNavBarDesktop() {
  const frameFourZeroEightOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://docs.amplify.aws/",
  });

  return (
    <Flex
      gap="32px"
      direction="row"
      width="100vw"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 32px 0px 32px"
      backgroundColor="rgba(255,255,255,1)"
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
      >
        <View
          width="157px"
          height="22px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
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
        >
          <NavBarMenuItem>Courses</NavBarMenuItem>
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
        >
          <NavBarMenuItem>About</NavBarMenuItem>
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
        >
          <NavBarMenuItem showExternalIcon={true}>Docs</NavBarMenuItem>
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
          isDisabled={false}
          // @ts-ignore
          variation="default"
        >
          Try Amplify
          <ExternalIconCustom />
        </Button>
      </Flex>
    </Flex>
  );
}

function NavBarMenuItem({
  children,
  showExternalIcon = false,
}: {
  children: any;
  showExternalIcon?: boolean;
}) {
  // Colors for changing "ExternalIcon"
  const hoverColor = "rgba(35,47,62,1)";
  const defaultColor = "rgba(84,91,100,1)";
  const [isHoverColor, setIsHoverColor] = useState(defaultColor);

  return (
    <Button
      className={styles["navbar-menu-item"]}
      gap="10px"
      border="none"
      fontFamily="Amazon Ember"
      fontSize="16px"
      fontWeight="400"
      lineHeight="24px"
      variation="link"
      onMouseEnter={() => {
        if (showExternalIcon) {
          setIsHoverColor(hoverColor);
        }
      }}
      onMouseLeave={() => {
        if (showExternalIcon) {
          setIsHoverColor(defaultColor);
        }
      }}
    >
      {children}
      <ExternalIconCustom
        width="24px"
        height="30px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        color={isHoverColor}
        display={showExternalIcon ? "" : "none"} />
    </Button>
  );
}
