import {css} from '@emotion/core'
import asCard from './asCard'
import Text from '../Text'
import {GRAY_COLOR} from '~/constants'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;

  .submit-card-subheading {
    color: ${GRAY_COLOR};
  }
`

export default asCard(({ConditionalAnchor, heading, subheading}) => {
  return (
    <div css={styles} className='tile three-dee'>
      <ConditionalAnchor>
        <Text h3 className='submit-card-heading'>
          {heading}
        </Text>
        <Text p className='submit-card-subheading'>
          {subheading}
        </Text>
      </ConditionalAnchor>
    </div>
  )
})
