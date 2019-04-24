import {css} from '@emotion/core'
import Img from 'gatsby-image'
import asCard from './asCard'
import ExternalLink from '../ExternalLink'
import {IoLogoGithub, IoLogoTwitter, IoIosLink} from 'react-icons/io'
import {useMemo} from 'react'
import Text from '../Text'
import {LIGHTER_BLUE} from '~/constants'
import {identity, values, mapObjIndexed} from 'ramda'

const styles = css`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;

  > .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 32px;

    .gatsby-image-wrapper {
      display: flex;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #fff;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }

    .contributor-card-name {
      margin-top: 12px;
    }

    .contributor-card-bio {
      margin-top: 8px;
    }
  }

  > .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #eee;

    > a {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      padding: 16px;

      &:hover {
        path {
          color: ${LIGHTER_BLUE};
        }
      }
    }
  }
`

const propsBySite = {
  github: {
    getHref: handle => `https://github.com/${handle}`,
    size: 20,
    Icon: IoLogoGithub,
  },
  twitter: {
    getHref: handle => `https://twitter.com/${handle}`,
    size: 20,
    Icon: IoLogoTwitter,
  },
  website: {
    getHref: identity,
    size: 20,
    Icon: IoIosLink,
  },
}

export default asCard(
  ({
    ConditionalAnchor,
    name,
    bio,
    avatar,
    github,
    twitter,
    website,
    containerStyles,
  }) => {
    const social = {github, twitter, website}
    const deps = values(social)
    const links = useMemo(
      () =>
        values(
          mapObjIndexed((v, key) => {
            const {getHref, Icon, size} = propsBySite[key]
            const href = v && getHref(v)
            const className = key
            return (
              href && (
                <ExternalLink {...{href, className}}>
                  <Icon {...{size}} />
                </ExternalLink>
              )
            )
          }, social),
        ),
      deps,
    )

    return (
      <div css={[styles, containerStyles]} className='item three-dee tile'>
        <ConditionalAnchor>
          {avatar ? <Img {...avatar} /> : '[backup image]'}
          {name && <Text contributorCardName>{name}</Text>}
          {bio && <Text contributorCardBio='bio'>{bio}</Text>}
        </ConditionalAnchor>
        {deps.length && <div className='social'>{links}</div>}
      </div>
    )
  },
)
