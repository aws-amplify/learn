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
  top: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  flex: 1;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease;
  z-index: 10000;

  > div {
    max-width: ${MAX_WIDTH};
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    height: 75px;

    > .branding,
    > .internal,
    > .external {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    > .internal,
    > .external {
      margin: 0px 8px;

      ${mq.tablet} {
        margin: 0px 16px;
      }

      ${mq.desktop} {
        margin: 0px 24px;
      }

      a {
        display: flex;
        align-self: stretch;
        justify-content: center;
        align-items: center;
        margin: 0px 8px;

        ${mq.tablet} {
          margin: 0px 16px;
        }

        ${mq.desktop} {
          margin: 0px 24px;
        }

        &:hover,
        &.active {
          padding-top: 2px;
          border-bottom: 2px solid #fff;
        }
      }
    }

    > .branding {
      padding: 16px;
      font-size: 20px;

      .text {
        padding-left: 8px;
        letter-spacing: 0.5px;
      }

      img {
        width: 25px;
        height: 20px;
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
          position: relative;
          top: 2px;
          margin-left: 4px;
        }
      }
    }
  }
`;

const defaults = {
  beforeScroll: {
    background: ORANGE_PEEL_COLOR,
    linkColor: '#fff',
    brandingColor: '#fff',
    logoSrc: logoLightURI,
  },

  afterScroll: {
    background: '#fff',
    linkColor: '#000',
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

        .nav-branding {
          color: ${beforeScroll.brandingColor};
        }

        &.scrolled {
          background: ${afterScroll.background};
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.125);

          * {
            color: ${afterScroll.linkColor};
          }

          .nav-branding {
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
          height: 75px;
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

            <Text h3 className='nav-branding' children='Community' />
          </Link>

          <div className='internal'>
            {map(
              ({to, children}) => (
                <Link {...{to}} key={children} activeClassName='active'>
                  <Text span className='nav-link' {...{children}} />
                </Link>
              ),
              [
                {to: '/events', children: 'Events'},
                {to: '/posts', children: 'Posts'},
              ],
            )}
          </div>

          <div className='external'>
            {map(
              ({href, children}) => (
                <ExternalLink {...{href}} key={children}>
                  <Text span className='nav-link' {...{children}} />
                  <MdOpenInNew className='external-graphic' size={14} />
                </ExternalLink>
              ),
              [
                {
                  href: 'https://gitter.im/AWS-Amplify/Lobby?source=orgpage',
                  children: 'Chat',
                },
                {
                  href: 'https://aws-amplify.github.io/docs/',
                  children: 'Docs',
                },
              ],
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
