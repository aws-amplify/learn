import { View } from "@aws-amplify/ui-react";
import Link from "next/link";
import styles from "../LearnNavBar.module.scss";

export function LearnNavBarMobile() {
  return (
    <>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/">
          <View className={styles["navbar-menu-item"]}>Home</View>
        </Link>
      </View>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/courses">
          <View className={styles["navbar-menu-item"]}>Courses</View>
        </Link>
      </View>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/about">
          <View className={styles["navbar-menu-item"]}>About</View>
        </Link>
      </View>
    </>
  );
}
