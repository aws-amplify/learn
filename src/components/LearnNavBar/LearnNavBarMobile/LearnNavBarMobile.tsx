import { View } from "@aws-amplify/ui-react";
import Link from "next/link";
import styles from "../LearnNavBar.module.scss";

export function LearnNavBarMobile() {
  return (
    <>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/" className={styles["navbar-menu-item"]}>
          Home
        </Link>
      </View>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/courses" className={styles["navbar-menu-item"]}>
          Courses
        </Link>
      </View>
      <View className={styles["mobile-nav-menu-items"]}>
        <Link href="/about" className={styles["navbar-menu-item"]}>
          About
        </Link>
      </View>
    </>
  );
}
