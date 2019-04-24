import {css} from '@emotion/core'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
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
