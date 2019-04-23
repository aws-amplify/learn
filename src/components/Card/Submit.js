import {css} from '@emotion/core'
import {Link} from 'gatsby'
import {ORANGE} from '~/constants'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;

  > h5 {
    margin-top: 8px;
  }

  > a {
    margin-top: 16px;
    background-color: ${ORANGE};
  }
`

export default ({ConditionalAnchor, heading, subheading}) => {
  return (
    <div css={styles} className='tile'>
      <ConditionalAnchor>
        <h3>{heading}</h3>
        <h5>{subheading}</h5>
      </ConditionalAnchor>
    </div>
  )
}
