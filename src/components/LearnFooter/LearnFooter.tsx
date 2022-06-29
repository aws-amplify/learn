import {
  LearnFooterMobile,
  LearnFooter as FigmaLearnFooter,
} from "../../ui-components";

export function LearnFooter({ isMobile }: { isMobile: boolean }) {
  if (!isMobile) {
    return <FigmaLearnFooter width="100vw" />;
  } else {
    return <LearnFooterMobile width="100vw" />;
  }
}
