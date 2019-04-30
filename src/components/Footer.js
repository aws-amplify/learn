import {css} from '@emotion/core';
import {Link, useStaticQuery, graphql} from 'gatsby';
import {FaArrowCircleRight} from 'react-icons/fa';
import {
  ORANGE_PEEL_COLOR,
  BIG_STONE_COLOR,
  GRAY_COLOR,
  MAX_WIDTH,
  mq,
} from '~/constants';
import {IoLogoGithub, IoLogoTwitter} from 'react-icons/io';
import awsLogoSrc from '~/assets/images/aws-logo.png';
import bugleGraphicSrc from '~/assets/images/bugle.svg';
import {map} from 'ramda';
import Text from './Text';
import ExternalLink from './ExternalLink';

const styles = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;

  > div {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: ${MAX_WIDTH};
    margin: 0px auto;

    > a {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 28px 16px;

      &:hover {
        background: linear-gradient(
          to left,
          rgb(255, 255, 255),
          rgb(250, 250, 250),
          rgb(255, 255, 255)
        );
      }

      > * {
        display: inline;
      }

      .primary,
      svg {
        color: ${ORANGE_PEEL_COLOR};
      }

      svg,
      img {
        margin: 0px 10px;
        display: none;

        ${mq.tablet} {
          display: initial;
        }
      }

      .secondary {
        color: ${BIG_STONE_COLOR};
      }

      span {
        display: inline;
      }
    }

    &.upper {
      direction: row;

      img {
        height: 28px;
      }
    }

    &.lower {
      flex-direction: column-reverse;
      align-items: center;
      padding: 64px 48px;

      ${mq.tablet} {
        flex-direction: row;
      }

      .copyright {
        display: flex;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;

        ${mq.tablet} {
          flex-direction: column-reverse;
          align-items: flex-start;
          text-align: left;
        }

        > img {
          width: 75px;
          margin: 16px 0px;
        }

        .text {
          max-width: 360px;
          color: ${GRAY_COLOR};
          margin: 16px 0px;
        }
      }

      .social {
        display: flex;
        flex: 1;
        flex-direction: row;
        padding: 8px 0px;

        ${mq.tablet} {
          justify-content: flex-end;
        }

        > * {
          margin: 0px 12px;
          ${mq.tablet} {
            margin: 0px 0px 0px 24px;
          }
        }
      }
    }
  }

  > hr {
    display: block;
    width: 100%;
    height: 1px;
    margin: 0px;
    border-width: 0px;
    background-color: #eee;
  }
`;

export default () => {
  const {sitePage} = useStaticQuery(graphql`
    {
      sitePage(path: {eq: "/newsletters"}) {
        context {
          latestSlug
        }
      }
    }
  `);

  const {latestSlug} = sitePage.context;

  // !window.location.href.includes('newsletters')
  return (
    <footer css={styles}>
      <div className='upper'>
        <Link to={latestSlug}>
          <img src={bugleGraphicSrc} alt='bugle' />
          <span>
            <Text h4 className='footer-newsletter-cta secondary'>
              The latest newsletter is out!
            </Text>
            <Text h4 className='footer-newsletter-cta primary'>
              {' '}
              Read the latest
            </Text>
          </span>
          <FaArrowCircleRight size={22} />
        </Link>
      </div>

      <hr />

      <div className='lower'>
        <div className='copyright'>
          <Text className='footer-copyright'>
            {`Amplify Framework is supported by Amazon Web Services © ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`}
          </Text>
          <img src={awsLogoSrc} alt='aws' />
        </div>

        <div className='social'>
          {map(
            ({Icon, size, ...linkProps}) => {
              const {className: key} = linkProps;
              return (
                <ExternalLink {...{key}} {...linkProps}>
                  <Icon {...{size}} />
                </ExternalLink>
              );
            },
            [
              {
                className: 'github',
                href: 'https://github.com/aws-amplify/community',
                Icon: IoLogoGithub,
                size: 42,
              },
              {
                className: 'twitter',
                href: 'https://twitter.com/AWSAmplify',
                Icon: IoLogoTwitter,
                size: 45,
              },
            ],
          )}
        </div>
      </div>
    </footer>
  );
};
