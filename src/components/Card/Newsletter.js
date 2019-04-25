import {css} from '@emotion/core'
import asCard from './asCard'
import Text from '../Text'

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
        <Text h3 className='newsletter-card-heading'>
          {heading}
        </Text>
      </div>
    </ConditionalAnchor>
  )
})
