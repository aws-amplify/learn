import { Flex, View, Text } from "@aws-amplify/ui-react";
import styles from "../LearnNavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export function LearnNavBarDesktop() {
  const router = useRouter();

  return (
    <Flex
      gap="32px"
      direction="row"
      width="100vw"
      height="56px"
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
        height="100%"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Link href="/learn">
          <a className={styles["navbar-menu-item"]}>
            <Text
              fontFamily="Amazon Ember"
              fontSize="20px"
              fontWeight="400"
              color="rgba(35,47,62,1)"
              lineHeight="22px"
              textAlign="left"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
            >
              Learn
            </Text>
          </a>
        </Link>
        <Link href="/courses">
          <a
            className={`${styles["navbar-menu-item"]} ${
              router.asPath.startsWith("/learn/courses")
                ? styles["current-nav-menu-item"]
                : ""
            }`}
          >
            Courses
          </a>
        </Link>
        <Link href="/learn/about">
          <a
            className={`${styles["navbar-menu-item"]} ${
              router.asPath.startsWith("/learn/about")
                ? styles["current-nav-menu-item"]
                : ""
            }`}
          >
            About
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}
