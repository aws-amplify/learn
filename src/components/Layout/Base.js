import GlobalStyles from '../GlobalStyles'
import {css} from '@emotion/core'
import Nav from '../Nav'
import Hero from '../Hero'
import {mq} from '~/constants'

export const style = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  > .nav {
    z-index: 1;
  }

  > .body {
    display: flex;
    flex: 1;
    z-index: 0;

    > div {
      display: flex;
      flex-direction: row;
      flex: 1;
      max-width: 1600px;
      margin: 0px auto;

      .menu {
        &.side {
          display: none;
          flex-shrink: 1;

          ${mq.tablet} {
            display: flex;
          }
        }
      }

      .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        z-index: 0;
      }
    }
  }
`

export default ({children}) => {
  return (
    <>
      <GlobalStyles />
      <div css={style}>{children}</div>
    </>
  )
}
