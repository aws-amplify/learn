import {css, Global} from '@emotion/core';
import reset from './reset';
import typography from './typography';
import {
  CONCRETE_COLOR,
  TWITTER_BLUE_COLOR,
  GITHUB_GRAY_COLOR,
  YOUTUBE_RED_COLOR,
  SAN_JUAN_COLOR,
} from '~/constants';
import toasts from './toasts';

const styles = css`
  ${reset}

  * {
    box-sizing: border-box;
    backface-visibility: none;
    appearance: none;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    background-color: transparent;
    border-width: 0px;

    &:focus {
      outline: 0;
    }
  }

  ${typography}

  body,
  html {
    color: #000;
    font-family: Amazon Ember;
    font-size: 15px;
    line-height: 18px;
    font-weight: 200;
    overflow: -moz-scrollbars-none;
    overflow-x: hidden;
    -ms-overflow-style: none;
    background-color: ${CONCRETE_COLOR};
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:focus,
  :active {
    color: inherit;
  }

  svg {
    color: inherit;
    path {
      color: inherit;
    }
  }

  ${toasts}

  .social a:hover {
    transition: 0.375s ease all;

    &.twitter {
      color: ${TWITTER_BLUE_COLOR};
    }
    &.github {
      color: ${GITHUB_GRAY_COLOR};
    }
    &.youtube {
      color: ${YOUTUBE_RED_COLOR};
    }
    &.website {
      color: ${SAN_JUAN_COLOR};
    }
  }

  .rounded {
    border-radius: 4px;
  }

  .right-rounded {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .card {
    display: flex;
    flex: 1;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
  }

  .three-dee {
    box-shadow: 2px 2px 0 2px hsl(0, 0%, 80%);
    transition: 0.25s ease all;

    &.actionable {
      &:hover {
        box-shadow: 3px 3px 0px 3px hsl(0, 0%, 80%);
        transform: translate(-1px, -1px);
      }

      &:active {
        box-shadow: 0px 0px 0px transparent;
      }
    }
  }

  .shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    transition: 0.25s ease all;

    &.actionable {
      &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.375);
      }

      &:active {
        box-shadow: 0px 0px 0px transparent;
      }
    }
  }

  .scale-down {
    transform: scale(0.9875);

    &.actionable {
      &:hover {
        transform: scale(1.0075);
      }

      &:active {
        transform: scale(0.9875);
      }
    }
  }
`;

export default () => <Global {...{styles}} />;
