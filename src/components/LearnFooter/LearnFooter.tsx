import { default as LearnFooterMobileCustom } from "../../ui-components/LearnFooterMobileCustom";
import { default as LearnFooterCustom } from "../../ui-components/LearnFooterCustom";
import { SocialMediaButton } from "../SocialMediaButton";
import { SocialMediaPlatform } from "../../models";
import { createGithubIssueLink } from "../../utils";
import { View } from "@aws-amplify/ui-react";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";
import styles from "./LearnFooter.module.scss";
import { trackExternalLink } from "../../utils/track";

export function LearnFooter({ isMobile }: { isMobile: boolean }) {
  let learnFooter;

  const iconSize = isMobile ? "26px" : "38px";

  const socialMediaButtons = [
    <SocialMediaButton
      key={1}
      platform={SocialMediaPlatform.GITHUB}
      url="https://github.com/aws-amplify/"
      iconAriaLabel="Github Repo for Amplify Learn"
      showBorder={false}
      iconWidth={iconSize}
      iconHeight={iconSize}
    />,
    <SocialMediaButton
      key={2}
      platform={SocialMediaPlatform.TWITTER}
      url="https://twitter.com/AWSAmplify"
      iconAriaLabel="AWS Amplify Twitter account"
      showBorder={false}
      iconWidth={iconSize}
      iconHeight={iconSize}
    />,
    <SocialMediaButton
      key={3}
      platform={SocialMediaPlatform.YOUTUBE}
      url="https://www.youtube.com/c/amazonwebservices"
      iconAriaLabel="AWS Amplify Youtube channel"
      showBorder={false}
      iconWidth={iconSize}
      iconHeight={iconSize}
    />,
    <SocialMediaButton
      key={4}
      platform={SocialMediaPlatform.DISCORD}
      url="https://discord.gg/amplify"
      iconAriaLabel="AWS Amplify Discord"
      showBorder={false}
      iconWidth={iconSize}
      iconHeight={iconSize}
    />,
  ];

  const githubIssueUrl = createGithubIssueLink();

  const submitGithubIssueLink = (
    <a
      href={githubIssueUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["submit-github-issue-link"]}
      onClick={() => {
        trackExternalLink(githubIssueUrl);
      }}
    >
      <View
        className={styles["submit-github-issue-button"]}
        display="flex"
        gap="12px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
      >
        Submit issue on GitHub
        <ExternalIconCustom />
      </View>
    </a>
  );

  if (!isMobile) {
    learnFooter = (
      <LearnFooterCustom
        socialMediaButtons={socialMediaButtons}
        submitGithubIssueButton={submitGithubIssueLink}
        width="100vw"
      />
    );
  } else {
    learnFooter = (
      <LearnFooterMobileCustom
        socialMediaButtons={socialMediaButtons}
        submitGithubIssueButton={submitGithubIssueLink}
        width="100vw"
      />
    );
  }

  return <footer>{learnFooter}</footer>;
}
