import { View } from "@aws-amplify/ui-react";
import Link from "next/link";
import styles from "../LearnNavBar.module.scss";

export function LearnNavBarMobile() {
  return (
    <>
      <View padding="12px" className={styles["mobile-nav-menu-items"]}>
        <Link href="/learn">
          <a className={styles["navbar-menu-item"]}>Home</a>
        </Link>
      </View>
      <View padding="12px" className={styles["mobile-nav-menu-items"]}>
        <Link href="/learn/courses">
          <a className={styles["navbar-menu-item"]}>Courses</a>
        </Link>
      </View>
      <View padding="12px" className={styles["mobile-nav-menu-items"]}>
        <Link href="/learn/about">
          <a className={styles["navbar-menu-item"]}>About</a>
        </Link>
      </View>
    </>
  );
}
