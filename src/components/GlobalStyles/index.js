import {css, Global} from '@emotion/core';
import reset from './reset';
import fontFaces from './font-faces';
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

  .text,
  ::placeholder {
    display: inline;
    font-family: Amazon Ember;
  }

  ${fontFaces}

  body,
  html {
    color: #000;
    font-family: Amazon Ember;
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
    overflow-x: hidden;
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
    box-shadow: rgba(0, 0, 0, 0.09) 5px 5px 0px -1px;
    transition: 0.25s ease all;

    &.actionable {
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.09) 7px 7px 0px -1px;
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

  .list-heading {
    font-size: 1.375rem;
    line-height: 2.0625rem;
    weight: 400;
  }
`;

export default () => <Global {...{styles}} />;
