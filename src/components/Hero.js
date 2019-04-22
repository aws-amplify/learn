import {css} from '@emotion/core'

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 85px 40px;
  color: #fff;
  text-align: center;

  h3 {
    line-height: 50px;
    font-weight: 100;
    display: flex;
  }

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
    <h1>{heading}</h1>
    <h3>{subheading}</h3>
    <div className='cta'>{cta}</div>
  </div>
)
