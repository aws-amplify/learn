import {css, Global} from '@emotion/core'

import reset from './reset'
import fontFaces from './font-faces'
import {LIGHT_GRAY, TWITTER_BLUE, GITHUB_GRAY, YOUTUBE_RED} from '~/constants'

const styles = css`
  ${reset}
  ${fontFaces}

  body,
  html {
    font-family: Amazon Ember;
    font-size: 15px;
    line-height: 18px;
    font-weight: 200;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    background-color: ${LIGHT_GRAY};
  }

  * {
    color: #000;
    box-sizing: border-box;
    backface-visibility: none;
    appearance: none;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  &:focus {
    outline: 0;
  }

  &::webkit-scrollbar {
    display: none;
  }

  svg {
    color: inherit;

    path {
      color: inherit;
    }
  }

  .social a:hover {
    transition: 0.375s ease all;

    &.twitter {
      color: ${TWITTER_BLUE};
    }
    &.github {
      color: ${GITHUB_GRAY};
    }
    &.youtube {
      color: ${YOUTUBE_RED};
    }
  }

  .three-dee {
    box-shadow: 2px 2px 0 2px hsl(0, 0%, 80%);
    transition: 0.25s ease all;

    &:hover {
      box-shadow: 3px 3px 0px 3px hsl(0, 0%, 80%);
      transform: translate(-1px, -1px);
    }
  }

  .shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    transition: 0.25s ease all;

    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.375);
    }
  }

  .three-dee,
  .shadow {
    &:active {
      box-shadow: 0px 0px 0px transparent;
    }
  }

  .tile {
    background-color: #fff;
    border-width: 0px;
    border-radius: 4px;
  }
`

export default () => <Global {...{styles}} />
