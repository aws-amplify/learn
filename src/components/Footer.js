import {css} from '@emotion/core'
import {Link, useStaticQuery, graphql} from 'gatsby'
import ExternalLink from './ExternalLink'
import {TiNews} from 'react-icons/ti'
import Text from './Text'
import {FaArrowCircleRight} from 'react-icons/fa'
import {ORANGE, MEDIUM_DARK_BLUE, DARK_GRAY, mq} from '~/constants'
import {IoLogoGithub, IoLogoTwitter} from 'react-icons/io'
import awsLogoSrc from '~/assets/images/aws-logo.png'
import bugleGraphicSrc from '~/assets/images/bugle.svg'
import {map} from 'ramda'

const styles = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;

  > div {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 1600px;
    margin: 0px auto;

    > a {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 28px 16px;

      &:hover {
        background-color: rgba(250, 250, 250, 1);
      }

      > * {
        margin: 0px 4px;
      }

      > .primary,
      > svg {
        color: ${ORANGE};
      }

      > .secondary {
        color: ${MEDIUM_DARK_BLUE};
      }
    }

    &.upper {
      direction: row;

      img {
        height: 30px;
      }
    }

    &.lower {
      flex-direction: column-reverse;
      align-items: center;
      padding: 32px 16px;

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
          color: ${DARK_GRAY};
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
`

export default () => {
  const {allSitePage} = useStaticQuery(graphql`
    {
      allSitePage(filter: {path: {glob: "/newsletters/**/*"}}, limit: 1) {
        edges {
          node {
            context {
              latestNewsletterSlug
            }
          }
        }
      }
    }
  `)

  const {latestNewsletterSlug} = allSitePage.edges[0].node.context

  return (
    <footer css={styles}>
      {/* eslint-disable-next-line */}
      {!window.location.href.includes('newsletters') && (
        <>
          <div className='upper'>
            <Link to={latestNewsletterSlug}>
              <img src={bugleGraphicSrc} alt='bugle' />
              <Text footerNewsletterCTA className='secondary'>
                The latest newsletter is out!
              </Text>
              <Text footerNewsletterCTA className='primary'>
                {' '}
                Read the latest
              </Text>
              <FaArrowCircleRight size={22} />
            </Link>
          </div>

          <hr />
        </>
      )}

      <div className='lower'>
        <div className='copyright'>
          <Text footerCopyright>
            {`Amplify Framework is supported by Amazon Web Services © ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`}
          </Text>
          <img src={awsLogoSrc} alt='aws' />
        </div>

        <div className='social'>
          {map(
            ({Icon, ...linkProps}) => {
              const {className: key} = linkProps
              return (
                <ExternalLink {...{key}} {...linkProps}>
                  <Icon size={42} />
                </ExternalLink>
              )
            },
            [
              {
                className: 'github',
                href: 'https://github.com/aws-amplify',
                Icon: IoLogoGithub,
              },
              {
                className: 'twitter',
                href: 'https://twitter.com/AWSAmplify',
                Icon: IoLogoTwitter,
              },
            ],
          )}
        </div>
      </div>
    </footer>
  )
}
