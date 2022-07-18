import { SocialMediaPlatform } from "../../models";
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

type SocialMediaButtonProps = {
  platform:
    | string
    | "INSTAGRAM"
    | "LINKEDIN"
    | "FACEBOOK"
    | "GITHUB"
    | "TWITTER"
    | "TWITCH"
    | "YOUTUBE"
    | "DISCORD"
    | undefined;
  url: string | null | undefined;
  iconAriaLabel: string;
  iconWidth: string;
  iconHeight: string;
  showBorder?: boolean;
};

export function SocialMediaButton({
  platform,
  url,
  iconAriaLabel,
  iconWidth,
  iconHeight,
  showBorder = true,
}: SocialMediaButtonProps) {
  let icon = <></>;

  switch (platform) {
    case SocialMediaPlatform.DISCORD:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <DiscordIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.FACEBOOK:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <FacebookIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.GITHUB:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          {/* Hard coding the position of the Github icon because it's built different from the other icons */}
          <GithubIcon
            top="15%"
            left="20%"
            ariaLabel={iconAriaLabel}
            overrides={{
              Shape: {
                width: iconWidth,
                height: iconHeight,
              },
            }}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.INSTAGRAM:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <InstagramIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.LINKEDIN:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <LinkedinIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.TWITCH:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <TwitchIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.TWITTER:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <TwitterIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
        </LearnSocialCustom>
      );
      break;
    case SocialMediaPlatform.YOUTUBE:
      icon = (
        <LearnSocialCustom
          className={styles["social-media-button"]}
          showBorder={showBorder}
        >
          <YouTubeIcon
            width={iconWidth}
            height={iconHeight}
            ariaLabel={iconAriaLabel}
          />
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
