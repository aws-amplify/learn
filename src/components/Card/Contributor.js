import {css} from '@emotion/core'
import Img from 'gatsby-image'
import asCard from './asCard'
import ExternalLink from '../ExternalLink'
import {IoLogoGithub, IoLogoTwitter, IoIosLink} from 'react-icons/io'
import {useMemo} from 'react'

const styles = css`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  align-items: center;

  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .gatsby-image-wrapper {
      border-radius: 50%;
      overflow: hidden;
    }

    h4 {
      margin-top: 16px;
    }

    h5 {
      text-align: center;
    }
  }

  > .social-links {
    margin-top: 16px;

    > a {
      padding: 0px 8px;
    }
  }
`

export default asCard(
  ({Container, name, bio, avatar, github, twitter, website}) => {
    const deps = [github, twitter, website]
    const showLinks = useMemo(() => !!deps.filter(Boolean).length, deps)
    const links = useMemo(
      () => [
        {
          href: github,
          IconTag: IoLogoGithub,
        },
        {
          href: twitter,
          IconTag: IoLogoTwitter,
        },
        {
          href: website,
          IconTag: IoIosLink,
        },
      ],
      [showLinks, ...deps],
    )

    return (
      <div css={styles} className='tile'>
        <Container>
          {avatar ? <Img {...avatar} /> : '[backup image]'}
          {name && <h4 className='name'>{name}</h4>}
          {bio && <h5 className='bio'>{bio}</h5>}
        </Container>
        {showLinks && (
          <div className='social-links'>
            {links.map(
              ({href, IconTag}) =>
                href && (
                  <ExternalLink {...{href}}>
                    <IconTag size={20} />
                  </ExternalLink>
                ),
            )}
          </div>
        )}
      </div>
    )
  },
)
