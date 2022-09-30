import { LearnNavBarDesktop } from "./LearnNavBarDesktop";
import { LearnNavBarMobile } from "./LearnNavBarMobile";
import styles from "./LearnNavBar.module.scss";

export function LearnNavBar({ isMobile }: { isMobile?: boolean }) {
  // let navbar;

  // if (isMobile) {
  //   navbar = <LearnNavBarMobile />;
  // } else {
  //   navbar = <LearnNavBarDesktop />;
  // }

  return (
    <nav aria-label="Learn" className={styles["learn-navbar"]}>
      <LearnNavBarDesktop />
    </nav>
  );
}
