import {css} from '@emotion/core';
import Text from './Text';
import {mq} from '~/constants';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 40px 85px 40px;
  color: #fff;
  text-align: center;

  ${mq.tablet} {
    padding: 50px 40px 85px 40px;
  }

  .hero-subheading {
    margin-top: 10px;
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

// make sure 'color' is inherited

export default ({background, textColor, heading, subheading, cta}) => (
  <div
    css={css`
      ${styles}
      background: ${background};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .hero-heading,
      .hero-subheading {
        color: ${textColor};
      }
    `}
  >
    <Text h2 className='hero-heading' children={heading} />
    <Text h3 className='hero-subheading' children={subheading} />
    <div className='cta' children={cta} />
  </div>
);
