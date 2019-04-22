import {css} from '@emotion/core'
import Base from './Base'

export const Small = props => (
  <Base
    {...props}
    styles={css`
      font-size: 15px;
      padding: 14px;
    `}
  />
)

export const Medium = props => (
  <Base
    {...props}
    styles={css`
      font-size: 14px;
      padding: 12px 15px 13px 15px;
    `}
  />
)

export const Large = props => (
  <Base
    {...props}
    styles={css`
      font-size: 15px;
      padding: 14px;
    `}
  />
)
