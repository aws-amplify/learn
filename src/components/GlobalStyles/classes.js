import {css} from '@emotion/core'

export default css`
  .actionable {
    box-shadow: 2px 2px 0 2px hsl(0, 0%, 80%);
    transition: none;

    &:hover {
      box-shadow: 3px 3px 0 3px hsl(0, 0%, 80%);
      transform: translate(-1px, -1px);
    }
  }

  .tile {
    background-color: #fff;
    border-width: 0px;
    border-radius: 4px;
  }
`
