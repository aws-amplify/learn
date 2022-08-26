import { Flex, View } from "@aws-amplify/ui-react";
import Link from "next/link";
import styles from "../LearnNavBar.module.scss";

export function LearnNavBarMobile() {
  return (
    <>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="12px"
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
        padding="12px"
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
    </>
  );
}
