import GlobalStyles from '../GlobalStyles'
import {css} from '@emotion/core'
import {mq} from '~/constants'
import {StickyContainer} from 'react-sticky'
import Footer from '../Footer'

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
      max-width: 1200px;
      margin: 0px auto;

      .menu {
        &.side {
          display: none;
          flex-shrink: 1;
          margin-top: 50px;

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
        padding: 16px 0px;
      }
    }
  }
`

export default ({children}) => (
  <>
    <GlobalStyles />
    <StickyContainer>
      <div css={style}>{children}</div>
      <Footer />
    </StickyContainer>
  </>
)
