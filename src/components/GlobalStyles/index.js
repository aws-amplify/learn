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
    font-family: Ember;
    font-weight: thinner;
    
    font-size: 16px;
    line-height: 24px;

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

  hr {
    display: block;
    width: 100%;
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    border-bottom: 1px solid #9e9e9;
    margin: 0px;
  }

  &.actionable{
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    
    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
    }

    &:active {
      transform: translateY(0px);
      box-shadow: inset rgba(46, 41, 51, 0.08) 0px 1px 2px, inset rgba(71, 63, 79, 0.08) 0px 2px 4px;
    }
  }

  .tile {
    background-color: rgba(255, 255, 255, .9);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
    border-radius: 4px;
    ${'' /* overflow: hidden; */}

    &:hover, *:hover {
      text-decoration: none;
    }
  }

  .button {
    display: flex;
    padding: 8px 12px;
  }
`

export default () => <Global {...{styles}} />
