import {css} from '@emotion/core'
import {LIGHT_BLUE} from '~/constants'

export default css`
  a {
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 42px;
    line-height: 53px;
    font-weight: 200;
  }

  h2 {
    font-size: 28px;
    line-height: 35px;
    font-weight: 300;
  }

  h3 {
    font-size: 22px;
    line-height: 27px;
    font-weight: 300;
  }

  h4 {
    font-size: 15px;
    line-height: 18px;
    font-weight: 300;
  }

  h5 {
    font-size: 13px;
    line-height: 16px;
    font-weight: 300;
  }

  h6 {
    font-size: 12px;
    line-height: 14px;
    font-weight: 100;
  }

  span {
    font-size: 13px;
    line-height: 16px;
    font-weight: 300;
  }

  p {
    font-size: 15px;
    line-height: 18px;
    font-weight: 300;
  }
`
