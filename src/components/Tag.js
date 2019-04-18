import {css} from '@emotion/core'
import {Link} from 'gatsby'

const styles = css`
  padding: 4px;
  border: 1px solid #e9e9e9;
`

export default ({children}) => (
  <Link css={styles} to={`tags/${children}`} {...{children}} />
)
