import {css} from '@emotion/core'
import Text from './Text'

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 85px 40px;
  color: #fff;
  text-align: center;

  .cta {
    padding-top: 24px;
  }
`

// make sure 'color' is inherited

export default ({backgroundColor, textColor, heading, subheading, cta}) => (
  <div
    css={css`
      ${styles}
      background-color: ${backgroundColor};
      h1, h3 {
        color: ${textColor};
      }
    `}
  >
    <Text heroHeading>{heading}</Text>
    <Text heroSubheading>{subheading}</Text>
    <div className='cta'>{cta}</div>
  </div>
)
