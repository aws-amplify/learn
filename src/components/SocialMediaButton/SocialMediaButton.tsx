import { SocialMediaLink, SocialMediaPlatform } from "../../models";
import { default as LearnSocialCustom } from "../../ui-components/LearnSocialCustom";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../../ui-components";
import styles from "./SocialMediaButton.module.scss";

export function SocialMediaButton({ platform, url }: SocialMediaLink) {
  let icon = <></>;

  switch (platform) {
    case SocialMediaPlatform.DISCORD:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <DiscordIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.FACEBOOK:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <FacebookIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.GITHUB:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          {/* Hard coding the position of the Github icon because it's built different from the other icons */}
          <GithubIcon top="20%" left="20%" />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.INSTAGRAM:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <InstagramIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.LINKEDIN:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <LinkedinIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.TWITCH:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <TwitchIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.TWITTER:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <TwitterIcon />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.YOUTUBE:
      icon = (
        <LearnSocialCustom className={styles["social-media-button"]}>
          <YouTubeIcon />
        </LearnSocialCustom>
      );
      break;
    default:
      break;
  }

  return (
    <a target="_blank" href={url || ""} rel="noopener noreferrer">
      {icon}
    </a>
  );
}
