import { Button, Flex, View } from "@aws-amplify/ui-react";
import { forwardRef, useState } from "react";
import { LearnLogo } from "../../ui-components";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";
import styles from "./LearnNavBarDesktop.module.scss";
import Link from "next/link";

export function LearnNavBarDesktop() {
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
          <Link href="/">
            <a>
              <LearnLogo
                className={styles["learn-logo"]}
                display="flex"
                gap="8px"
                position="absolute"
                top="calc(50% - 11px - 0px)"
                left="0px"
                direction="row"
                alignItems="flex-start"
                padding="0px 0px 0px 0px"
              ></LearnLogo>
            </a>
          </Link>
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
          <Link href="/courses" passHref>
            <NavBarMenuItem>Courses</NavBarMenuItem>
          </Link>
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
          <Link href="/about" passHref>
            <NavBarMenuItem>About</NavBarMenuItem>
          </Link>
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
        >
          <Link href="https://docs.amplify.aws/" passHref>
            <NavBarMenuItem showExternalIcon={true}>Docs</NavBarMenuItem>
          </Link>
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

const NavBarMenuItem = forwardRef(
  (
    {
      children,
      href,
      showExternalIcon = false,
    }: {
      children: any;
      href?: string;
      showExternalIcon?: boolean;
    },
    ref
  ) => {
    // Colors for changing "ExternalIcon"
    const hoverColor = "rgba(35,47,62,1)";
    const defaultColor = "rgba(84,91,100,1)";
    const [isHoverColor, setIsHoverColor] = useState(defaultColor);

    return (
      <a
        className={styles["navbar-menu-item"]}
        href={href}
        {...(showExternalIcon
          ? { rel: "noopener noreferrer", target: "_blank" }
          : {})}
      >
        <Flex
          alignItems="center"
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
            display={showExternalIcon ? "" : "none"}
          />
        </Flex>
      </a>
    );
  }
);

NavBarMenuItem.displayName = "NavBarMenuItem";
