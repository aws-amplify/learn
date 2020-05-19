import discordLogoSrc from '~/assets/images/discord-white.svg';
import externalLinkSrc from "~/assets/images/external-link.svg";
import ExternalLink from "./ExternalLink";
import {css} from "@emotion/core";
import {ORANGE_PEEL_COLOR, mq} from "../constants"

export default () => {
  return (
    <ExternalLink
      href="https://discord.com/invite/jWVbPfC"
      css={css`
        display: none;
        flex-direction: row;
        align-items: center;
        position: fixed;
        right: 1rem;
        bottom: 0;
        background-color: ${ORANGE_PEEL_COLOR};
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        color: #fff !important;
        font-size: .875rem;
        font-weight: 200;
        padding: 0.675rem;

        img:nth-of-type(1) {
          height: 1.5rem;
          margin-right: .5rem;
        }

        img:nth-of-type(2) {
          height: 0.675rem;
          margin-left: 0.25rem;
        }

        ${mq.tablet} {
          display: flex;
        }
      `}
    >
      <img src={discordLogoSrc} />
      Open Chat
      <img src={externalLinkSrc} />
    </ExternalLink>
  )
}