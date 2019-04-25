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

  .hero-subheading {
    margin-top: 10px;
  }

  .cta {
    padding-top: 24px;
  }
`

// make sure 'color' is inherited

export default ({background, textColor, heading, subheading, cta}) => (
  <div
    css={css`
      ${styles}
      background-color: ${background};
      
      .hero-heading,
      .hero-subheading {
        color: ${textColor};
      }
    `}
  >
    <Text h2 className='hero-heading'>
      {heading}
    </Text>
    <Text h3 className='hero-subheading'>
      {subheading}
    </Text>
    <div className='cta'>{cta}</div>
  </div>
)
