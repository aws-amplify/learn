import ExternalLink from './ExternalLink'
import {IoLogoGithub, IoLogoTwitter, IoIosLink} from 'react-icons/io'
import {useMemo} from 'react'

export default props => {
  const links = useMemo(() => {
    const {github, twitter, website} = props
    return [
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
    ]
  }, props)

  const showLinks = useMemo(
    () => !!Object.values(props).filter(Boolean).length,
    props,
  )

  return (
    showLinks && (
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
    )
  )
}
