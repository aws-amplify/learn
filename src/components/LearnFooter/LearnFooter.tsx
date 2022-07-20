import { default as LearnFooterMobileCustom } from "../../ui-components/LearnFooterMobileCustom";
import { default as LearnFooterCustom } from "../../ui-components/LearnFooterCustom";

export function LearnFooter({ isMobile }: { isMobile: boolean }) {
  let learnFooter;

  if (!isMobile) {
    learnFooter = <LearnFooterCustom width="100vw" />;
  } else {
    learnFooter = <LearnFooterMobileCustom width="100vw" />;
  }

  return <footer>{learnFooter}</footer>;
}
