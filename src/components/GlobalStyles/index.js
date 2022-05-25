import {css, Global} from '@emotion/core';
import {
  CONCRETE_COLOR,
  TWITTER_BLUE_COLOR,
  GITHUB_GRAY_COLOR,
  YOUTUBE_RED_COLOR,
  SAN_JUAN_COLOR,
} from '~/constants';
import reset from './reset';
import fontFaces from './font-faces';
import toasts from './toasts';
import carousel from './carousel';

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
    border-width: 0;

    &:focus {
      outline: 0;
    }
  }

  .text,
  ::placeholder {
    display: inline;
    font-family: Amazon Ember;
  }

  body,
  html {
    color: #000;
    font-family: Amazon Ember;
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
    overflow-x: hidden;
    background-color: ${CONCRETE_COLOR};

    @media screen and (min-width: 1800px) {
      font-size: 120%;
    }

    @media screen and (min-width: 2200px) {
      font-size: 140%;
    }
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

  ${carousel}
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
    border-radius: 0.25rem;
  }

  .right-rounded {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .card {
    display: flex;
    flex: 1;
    height: 100%;
    background-color: #fff;
    overflow: hidden;

    &.post-condensed {
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      background-color: #4b6189;
    }
  }

  .three-dee {
    box-shadow: 0.125rem 0.125rem 0 0.125rem hsl(0, 0%, 80%);
    transition: 0.25s ease all;

    &.actionable {
      &:hover {
        box-shadow: 0.1875rem 0.1875rem 0 0.1875rem hsl(0, 0%, 80%);
        transform: translate(-0.0625rem, -0.0625rem);
      }

      &:active {
        box-shadow: 0 0 0 transparent;
      }
    }
  }

  .shadow {
    box-shadow: rgba(0, 0, 0, 0.09) 0.3125rem 0.3125rem 0 -0.0625rem;
    transition: 0.25s ease all;

    &.actionable {
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.09) 0.4375rem 0.4375rem 0 -0.0625rem;
      }

      &:active {
        box-shadow: 0 0 0 transparent;
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
    font-weight: 400;
  }
`;

export default () => (
  <>
    <Global styles={fontFaces} />
    <Global {...{styles}} />
  </>
);
