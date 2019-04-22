import {css, Global} from '@emotion/core'

import reset from './reset'
import fontFaces from './font-faces'
import typography from './typography'
import {LIGHT_GRAY} from '~/constants'

const styles = css`
  ${reset}
  ${fontFaces}
  ${typography}

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
    box-sizing: border-box;
    backface-visibility: none;
    appearance: none;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    
  }

  &:focus {
    outline: 0;
  }

  &::webkit-scrollbar {
    display: none;
  }

  button {
    cursor: pointer;
  }

  .actionable {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .125);
  }

  .tile {
    background-color: #fff;
    border-width: 0px;
    border-radius: 4px;
  }
`

export default () => <Global {...{styles}} />
