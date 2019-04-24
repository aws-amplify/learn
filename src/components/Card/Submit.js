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

  .submit-card-subheading {
    color: ${DARK_GRAY};
  }
`

export default asCard(({ConditionalAnchor, heading, subheading}) => {
  return (
    <div css={styles} className='tile three-dee'>
      <ConditionalAnchor>
        <Text submitCardHeading>{heading}</Text>
        <Text submitCardSubheading>{subheading}</Text>
      </ConditionalAnchor>
    </div>
  )
})
