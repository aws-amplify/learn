import {css} from '@emotion/core';
import {Link} from 'gatsby';
// get consistent format for logos
import logoLightURI from '~/assets/images/logo-light.svg';
import logoDarkURI from '~/assets/images/logo-dark.png';
import {useMemo} from 'react';
import {values, map} from 'ramda';
import {MdOpenInNew} from 'react-icons/md';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import Text from './Text';
import {mq, ORANGE_PEEL_COLOR, MAX_WIDTH} from '~/constants';
import ExternalLink from './ExternalLink';

const baseStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex: 1;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease;
  z-index: 10000;
  > div {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    height: 3.75rem;
    max-width: ${MAX_WIDTH};
    > .branding,
    > .internal,
    > .external {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    > .internal,
    > .external {
      margin: 0 2rem 0 0;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 2rem;
        @media (max-width: 500px) {
          margin: 0 0 0 1rem;
        }
        &:hover,
        &.active {
          padding-top: 0.125rem;
          border-bottom-width: 0.125rem;
          border-bottom-style: solid;
        }
        > .text {
          font-size: 0.9375rem;
          line-height: 1.40625rem;
        }
      }
    }
    > .branding {
      padding: 1rem 0 1rem 1rem;
      font-size: 1.25rem;
      .text {
        padding-left: 0.5rem;
        letter-spacing: 0.03125rem;
        font-size: 1.125rem;
        font-weight: 200;
      }
      img {
        width: 1.5625rem;
        height: 1.25rem;
      }
    }
    > .internal {
      flex: 1;
      justify-content: flex-end;
      ${mq.tablet} {
        justify-content: flex-start;
      }
    }
    > .external {
      display: none;
      ${mq.tablet} {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }
      a {
        svg {
          width: 0.875rem;
          height: 0.875rem;
          margin-left: 0.25rem;
        }
      }
    }
  }
`;

const defaults = {
  beforeScroll: {
    background: ORANGE_PEEL_COLOR,
    linkColor: '#fff',
    linkHoverColor: '#fff',
    brandingColor: '#fff',
    logoSrc: logoLightURI,
  },

  afterScroll: {
    background: 'rgba(255, 255, 255, .95)',
    linkColor: '#000',
    linkHoverColor: ORANGE_PEEL_COLOR,
    brandingColor: ORANGE_PEEL_COLOR,
    logoSrc: logoDarkURI,
  },
};

export default ({beforeScroll: b = {}, afterScroll: a = {}}) => {
  const {y: scrollTop} = useWindowScroll();
  const scrolled = scrollTop > 0;
  const className = scrolled ? 'scrolled' : '';

  const beforeScroll = {...defaults.beforeScroll, ...b};
  const afterScroll = {...defaults.afterScroll, ...a};
  const deps = [...values(beforeScroll), ...values(afterScroll)];

  const dynamicStyles = useMemo(
    () =>
      css`
        background: ${beforeScroll.background};
        * {
          color: ${beforeScroll.linkColor};
        }
        a {
          &:hover,
          &.active {
            * {
              color: ${beforeScroll.linkHoverColor};
            }
            border-bottom-color: ${beforeScroll.linkHoverColor};
          }
        }
        .branding .text {
          color: ${beforeScroll.brandingColor};
        }
        &.scrolled {
          background: ${afterScroll.background};
          box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.125);
          * {
            color: ${afterScroll.linkColor};
          }
          a {
            &:hover,
            &.active {
              * {
                color: ${afterScroll.linkHoverColor};
              }
              border-bottom-color: ${afterScroll.linkHoverColor};
            }
          }
          .branding .text {
            color: ${afterScroll.brandingColor};
          }
        }
      `,
    deps,
  );

  const styles = css`
    ${baseStyles}
    ${dynamicStyles}
  `;

  return (
    <>
      <div
        css={css`
          display: block;
          width: 100%;
          height: 3.75rem;
        `}
      />
      <nav {...{className}} css={styles}>
        <div>
          <Link className='branding' to='/'>
            {scrolled ? (
              <img src={afterScroll.logoSrc} alt='logo' />
            ) : (
              <img src={beforeScroll.logoSrc} alt='logo' />
            )}

            <Text h3 children='Community' />
          </Link>

          <div className='internal'>
            {map(
              ({to, children}) => (
                <Link {...{to}} key={children} activeClassName='active'>
                  <Text span {...{children}} />
                </Link>
              ),
              [
                {to: '/events', children: 'Events'},
                {to: '/posts', children: 'Posts'},
                {to: '/resources', children: 'Resources'},
              ],
            )}
          </div>

          <div className='external'>
            <ExternalLink href='https://docs.amplify.aws/' redirect>
              <Text span>Docs</Text>
            </ExternalLink>
            <ExternalLink href='https://aws.amazon.com/amplify/'>
              <Text span>About Amplify</Text>
              <MdOpenInNew className='external-graphic' />
            </ExternalLink>
          </div>
        </div>
      </nav>
    </>
  );
};
