import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import {css} from '@emotion/core'

const styles = css`
  padding: 40px 0px;
`

export default ({hero, cta, children}) => (
  <>
    <GlobalStyles />
    <Header {...hero} />
    {cta}
    <div css={styles} {...{children}} />
    <Footer />
  </>
)
