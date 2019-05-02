import {css} from '@emotion/core';
import Text from './Text';
import {mq} from '~/constants';

const styles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 85px 40px 85px 40px;
  color: #fff;
  text-align: center;

  .overlay {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    s-index: -100;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  h2,
  h3,
  .cta {
    z-index: 10;
  }

  .hero-container {
    display: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 200;
  }

  h3 {
    margin-top: 10px;
    font-size: 1.375rem;
    line-height: 2.25rem;
    font-weight: 200;
  }

  .cta {
    display: flex;
    flex: 1;
    padding-top: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default ({background, textColor, heading, overlay, subheading, cta}) => (
  <div
    css={css`
      ${styles}
      background: ${background};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      h2, h3 {
        color: ${textColor};
      }
    `}
  >
    {overlay && (
      <div className='overlay' style={{backgroundImage: `url(${overlay})`}} />
    )}
    <Text h2 children={heading} />
    <Text h3 children={subheading} />
    <div className='cta' children={cta} />
  </div>
);
