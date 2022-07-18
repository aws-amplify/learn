import { LearnNavBarDesktop } from "./LearnNavBarDesktop";
import { LearnNavBarMobile } from "./LearnNavBarMobile";

export function LearnNavBar({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return <LearnNavBarMobile />;
  } else {
    return <LearnNavBarDesktop />;
  }
}
