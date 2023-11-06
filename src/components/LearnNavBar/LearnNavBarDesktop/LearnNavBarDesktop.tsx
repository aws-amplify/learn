import { Flex, View } from "@aws-amplify/ui-react";
import styles from "../LearnNavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export function LearnNavBarDesktop() {
  const router = useRouter();

  return (
    <Flex
      gap="32px"
      direction="row"
      height="3rem"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 24px"
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
        className={styles["navbar"]}
      >
        <Link href="/">
          <View
            className={styles["navbar-menu-item"]}
            style={{ fontSize: "1.25rem" }}
          >
            Learn
          </View>
        </Link>
        <Link href="/courses">
          <View
            className={`${styles["navbar-menu-item"]} ${
              router.asPath.startsWith("/courses")
                ? styles["current-nav-menu-item"]
                : ""
            }`}
          >
            Courses
          </View>
        </Link>
        <Link href="/about">
          <View
            className={`${styles["navbar-menu-item"]} ${
              router.asPath.startsWith("/about")
                ? styles["current-nav-menu-item"]
                : ""
            }`}
          >
            About
          </View>
        </Link>
      </Flex>
    </Flex>
  );
}
