import {css, Global} from '@emotion/core'

import reset from './reset'
import fontFaces from './font-faces'
import typography from './typography'
import classes from './classes'
import {LIGHT_GRAY} from '~/constants'

const styles = css`
  ${reset}
  ${fontFaces}
  ${typography}
  ${classes}

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
`

export default () => <Global {...{styles}} />
