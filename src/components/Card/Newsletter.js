import {css} from '@emotion/core'
import asCard from './asCard'
import Text from '../Text'
import {DARK_GRAY} from '~/constants'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
`

export default asCard(({ConditionalAnchor, heading}) => {
  return (
    <ConditionalAnchor>
      <div css={styles} className='tile three-dee'>
        <Text newsletterCardHeading>{heading}</Text>
      </div>
    </ConditionalAnchor>
  )
})
