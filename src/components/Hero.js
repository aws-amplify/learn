import {css} from '@emotion/core';
import {LOCHMARA_COLOR} from '~/constants';
import Text from './Text';

const styles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.3125rem 2.5rem;
  color: #fff;
  text-align: center;

  a {
    color: ${LOCHMARA_COLOR};
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
    margin-top: 0.625rem;
    font-size: 1.375rem;
    line-height: 2.25rem;
    font-weight: 200;
    max-width: 45rem;
  }

  .cta {
    display: flex;
    flex: 1;
    padding-top: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`;

export default ({
  background,
  textColor,
  heading,
  overlay,
  subheading,
  cta,
  height,
}) => (
  <div
    css={css`
      ${styles}
      background: ${background};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      h2,
      h3 {
        color: ${textColor};
      }

      ${height &&
      css`
        height: ${height / 16 - 3.75}rem;

        > .cta {
          flex: none;
        }
      `}
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
