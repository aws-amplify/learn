import { LearnNavBarDesktop } from "./LearnNavBarDesktop";
import { LearnNavBarMobile } from "./LearnNavBarMobile";

export function LearnNavBar({ isMobile }: { isMobile: boolean }) {
  let navbar;

  if (isMobile) {
    navbar = <LearnNavBarMobile />;
  } else {
    navbar = <LearnNavBarDesktop />;
  }

  return <nav aria-label="Main">{navbar}</nav>;
}
