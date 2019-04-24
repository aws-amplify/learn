import {css} from '@emotion/core'
import {mq, MEDIUM_GRAY, ORANGE, DARK_BLUE} from '~/constants'
import ExternalLink from './ExternalLink'
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
    max-width: 1600px;
    margin: 0px auto;
    padding: 40px 32px;
  }

  .weekly {
    max-width: 800px;
    margin: 0px auto;
    border-bottom: 1px solid #f5f5f5;
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
      align-items: center;
    }

    h4 {
      font-weight: 400;
      margin-bottom: 8px;
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

      h5 {
        color: ${MEDIUM_GRAY};
        line-height: 24px;
        margin: 0px 5%;
      }

      img {
        margin: 16px;
      }

      .links {
        margin-top: 24px;
        ${mq.desktop} {
          margin-top: 0px;
        }

        a {
          margin: 16px;
          color: ${MEDIUM_GRAY};
          transition: all 0.25s ease;
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
        <h5 className='copyright'>
          Amplify Framework is supported by Amazon Web Services © 2018, Amazon
          Web Services, Inc. or its affiliates. All rights reserved.
        </h5>
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
