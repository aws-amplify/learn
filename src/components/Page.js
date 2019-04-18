import GlobalStyles from './GlobalStyles'
import Header from './Header'

export default ({hero, children}) => (
  <>
    <GlobalStyles />
    <Header {...hero} />
    <div {...{children}} />
  </>
)
