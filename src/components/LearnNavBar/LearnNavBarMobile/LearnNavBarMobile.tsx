import { Flex, View } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon, LearnLogo, MenuIcon } from "../../../ui-components";
import styles from "../LearnNavBar.module.scss";
import { NavBarMenuItem } from "../NavBarMenuItem";

export function LearnNavBarMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex
      gap="0"
      direction="column"
      width="100vw"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        direction="row"
        height="80px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 32px 0px 32px"
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
        >
          <Link href="/learn">
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
        >
          {isExpanded ? (
            <View
              onClick={() => {
                setIsExpanded(false);
              }}
            >
              <CloseIcon
                width="24px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
              ></CloseIcon>
            </View>
          ) : (
            <View
              onClick={() => {
                setIsExpanded(true);
              }}
            >
              <MenuIcon
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
              ></MenuIcon>
            </View>
          )}
        </Flex>
      </Flex>
      {isExpanded ? (
        <>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="16px 32px 16px 32px"
          >
            <Link href="/learn/courses">
              <a className={styles["navbar-menu-item"]}>Courses</a>
            </Link>
          </Flex>
          <View
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(214,220,220,1)"
          ></View>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="16px 32px 16px 32px"
          >
            <Link href="/learn/about">
              <a className={styles["navbar-menu-item"]}>About</a>
            </Link>
          </Flex>
          <View
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(214,220,220,1)"
          ></View>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="16px 32px 16px 32px"
          >
            <NavBarMenuItem href="https://docs.amplify.aws/" onMobile={true}>
              Docs
            </NavBarMenuItem>
          </Flex>
          <View
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(214,220,220,1)"
          ></View>
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
}
