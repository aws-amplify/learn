import { default as LearnFooterMobileCustom } from "../../ui-components/LearnFooterMobileCustom";
import { default as LearnFooterCustom } from "../../ui-components/LearnFooterCustom";

export function LearnFooter({ isMobile }: { isMobile: boolean }) {
  if (!isMobile) {
    return <LearnFooterCustom width="100vw" />;
  } else {
    return <LearnFooterMobileCustom width="100vw" />;
  }
}
