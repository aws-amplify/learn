import {css} from '@emotion/core';
import {Link} from 'gatsby';
// get consistent format for logos
import logoURI from '~/assets/images/logo-dark.png';
import {useMemo} from 'react';
import {Sticky} from 'react-sticky';
import {values} from 'ramda';
import {MdOpenInNew} from 'react-icons/md';
import Text from './Text';
import {mq} from '~/constants';
import ExternalLink from './ExternalLink';

const baseStyles = css`
  display: flex;
  flex: 1;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease;
  z-index: 10000;

  > div {
    max-width: 1600px;
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

const LINK_PROPS = [
  {to: '/events', children: 'Events'},
  {to: '/posts', children: 'Posts'},
];

const defaults = {
  backgroundColor: '#fff',
  textColor: '#000',
  logoSrc: logoURI,
};

export default ({beforeScroll: b = {}, afterScroll: a = {}}) => {
  const deps = [...values(b), ...values(a)];

  const beforeScroll = {...defaults, ...b};
  const afterScroll = {...defaults, ...a};

  const dynamicStyles = useMemo(
    () =>
      css`
        background-color: ${beforeScroll.backgroundColor};

        * {
          color: ${beforeScroll.textColor};
        }

        &.scrolled {
          background-color: ${afterScroll.backgroundColor};
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.125);

          * {
            color: ${afterScroll.textColor};
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
                <Text h3 className='nav-branding'>
                  Community
                </Text>
              </Link>

              <div className='links'>
                {LINK_PROPS.map(({to, children}) => (
                  <Link {...{to}} key={children} activeClassName='active'>
                    <Text span className='nav-link'>
                      {children}
                    </Text>
                  </Link>
                ))}
                <ExternalLink href='https://aws-amplify.github.io'>
                  <Text span className='nav-link'>
                    docs
                  </Text>
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
