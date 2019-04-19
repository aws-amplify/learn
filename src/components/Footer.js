import {css} from '@emotion/core'
import {
  mq,
  MEDIUM_GRAY,
  TWITTER_BLUE,
  GITHUB_GRAY,
  YOUTUBE_RED,
  ORANGE,
  DARK_BLUE,
  SECTION_MAX_WIDTH,
} from '~/constants'

import {useState} from 'react'
import {ExternalLink} from '~/components'
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoMdArrowForward,
} from 'react-icons/io'
import awsSrc from '~/assets/images/aws.png'

const styles = css`
  background-color: #fff;

  > div {
    max-width: ${SECTION_MAX_WIDTH};
    margin: 0px auto;
    padding: 40px 32px;
  }

  .weekly {
    max-width: 800px;
    margin: 0px auto;
    border-bottom: 1px solid #eee;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: ${DARK_BLUE};

    ${mq.tablet} {
      flex-direction: row;

      .input {
        width: 380px;
      }
    }

    > * {
      margin: 16px;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h4 {
      font-weight: 400;
    }

    h5 {
      text-align: left;
    }

    .input {
      width: 87.5%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.125);
      display: flex;
      flex-direction: row;
      border-radius: 4px;
      overflow: hidden;

      button,
      input {
        appearance: none;
        border-width: 0px;
      }

      input {
        display: flex;
        flex: 1;
        padding: 15px;
        font-size: 13px;
        font-family: Amazon Ember;
        font-weight: 300;

        &::placeholder {
          color: ${MEDIUM_GRAY};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 10px;
        background-color: ${ORANGE};
        color: #fff;
      }
    }
  }

  .copyright-and-links {
    display: flex;
    flex: 1;

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      ${mq.desktop} {
        flex-direction: row;
      }

      h6 {
        max-width: 400px;
        color: ${MEDIUM_GRAY};
        line-height: 24px;
      }

      img {
        margin: 16px;
      }

      .links {
        a {
          margin: 16px;
          color: ${MEDIUM_GRAY};
          transition: all 0.25s ease;

          &:hover {
            &.twitter {
              color: ${TWITTER_BLUE};
            }
            &.github {
              color: ${GITHUB_GRAY};
            }
            &.youtube {
              color: ${YOUTUBE_RED};
            }
          }
        }
      }
    }
  }
`

export default () => (
  <div css={styles}>
    <div className='weekly'>
      <div className='description'>
        <h4>Recieve our Newsletter</h4>
        <h5>stay up-to-date with the latest Amplify news and resources</h5>
      </div>
      <div className='input'>
        <input type='email' placeholder='Email Address' />
        <button type='button' onClick={() => console.log('submitting')}>
          <IoMdArrowForward size={25} />
        </button>
      </div>
    </div>

    <div className='copyright-and-links'>
      <div>
        <img src={awsSrc} alt='aws' />
        <h6 className='copyright'>
          Amplify Framework is supported by Amazon Web Services © 2018, Amazon
          Web Services, Inc. or its affiliates. All rights reserved.
        </h6>
        <div className='links'>
          {[
            {
              className: 'github',
              href: 'https://github.com/aws-amplify',
              Icon: IoLogoGithub,
            },
            {
              className: 'twitter',
              href: 'https://twitter.com/awsformobile',
              Icon: IoLogoTwitter,
            },
            {
              className: 'youtube',
              href: 'https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg',
              Icon: IoLogoYoutube,
            },
          ].map(({Icon, ...linkProps}) => (
            <ExternalLink {...linkProps}>
              <Icon size={30} />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  </div>
)
