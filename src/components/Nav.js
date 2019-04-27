import {css} from '@emotion/core';
import {Link} from 'gatsby';
// get consistent format for logos
import logoLightURI from '~/assets/images/logo-light.svg';
import logoDarkURI from '~/assets/images/logo-dark.png';
import {useMemo} from 'react';
import {Sticky} from 'react-sticky';
import {values, map} from 'ramda';
import {MdOpenInNew} from 'react-icons/md';
import Text from './Text';
import {mq, ORANGE_PEEL_COLOR, MAX_WIDTH} from '~/constants';
import ExternalLink from './ExternalLink';

const baseStyles = css`
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
    > .links {
      display: flex;
      flex-direction: row;
      align-items: center;
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

    > .links {
      padding: 8px;

      > a {
        display: flex;
        flex-direction: row;
        margin: 8px 8px 8px 8px;
        align-items: center;

        ${mq.tablet} {
          margin: 8px 8px 8px 32px;
        }

        ${mq.desktop} {
          margin: 8px 8px 8px 48px;
        }

        ${mq.monitor} {
          margin: 8px 8px 8px 60px;
        }

        &:hover,
        &.active {
          margin-bottom: 7px;
          border-bottom-width: 1px;
          border-bottom-style: solid;
        }

        > svg {
          margin-top: 2px;
          margin-left: 4px;
          box-shadow: 0px 0px 0px transparent;
        }
      }
    }
  }
`;

const linkProps = [
  {to: '/events', children: 'Events'},
  {to: '/posts', children: 'Posts'},
];

const defaults = {
  beforeScroll: {
    backgroundColor: ORANGE_PEEL_COLOR,
    linkColor: '#fff',
    brandingColor: '#fff',
    logoSrc: logoLightURI,
  },

  afterScroll: {
    backgroundColor: '#fff',
    linkColor: '#000',
    brandingColor: ORANGE_PEEL_COLOR,
    logoSrc: logoDarkURI,
  },
};

export default ({beforeScroll: b = {}, afterScroll: a = {}}) => {
  const beforeScroll = {...defaults.beforeScroll, ...b};
  const afterScroll = {...defaults.afterScroll, ...a};
  const deps = [...values(beforeScroll), ...values(afterScroll)];

  const dynamicStyles = useMemo(
    () =>
      css`
        background-color: ${beforeScroll.backgroundColor};

        * {
          color: ${beforeScroll.linkColor};
        }

        .nav-branding {
          color: ${beforeScroll.brandingColor};
        }

        &.scrolled {
          background-color: ${afterScroll.backgroundColor};
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
    <Sticky>
      {({style, distanceFromTop}) => {
        const scrolled = distanceFromTop < 0;
        const className = scrolled ? 'scrolled' : '';

        return (
          <nav {...{className, style}} css={styles}>
            <div>
              <Link className='branding' to='/'>
                {scrolled ? (
                  <img src={afterScroll.logoSrc} alt='logo' />
                ) : (
                  <img src={beforeScroll.logoSrc} alt='logo' />
                )}

                <Text h3 className='nav-branding' children='Community' />
              </Link>

              <div className='links'>
                {map(
                  ({to, children}) => (
                    <Link {...{to}} key={children} activeClassName='active'>
                      <Text span className='nav-link' {...{children}} />
                    </Link>
                  ),
                  linkProps,
                )}

                <ExternalLink href='https://aws-amplify.github.io'>
                  <Text span className='nav-link' children='Docs' />
                  <MdOpenInNew className='external-graphic' size={14} />
                </ExternalLink>
              </div>
            </div>
          </nav>
        );
      }}
    </Sticky>
  );
};
