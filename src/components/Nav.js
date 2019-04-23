import {css} from '@emotion/core'
import {Link} from 'gatsby'
// get consistent format for logos
import logoURI from '~/assets/images/logo-dark.png'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import {useMemo} from 'react'
import {ORANGE, SECTION_MAX_WIDTH} from '~/constants'
import Sticky from 'react-sticky-el'
import Color from 'color'

const baseStyles = css`
  display: flex;
  flex: 1;
  backdrop-filter: blur(10px);
  transition: all 0.5s ease;

  &.scrolled {
    background-color: #fff;
    * {
      color: #000;
    }
  }

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

      img {
        width: 25px;
        height: 20px;
      }
    }

    > .links {
      padding: 8px;
      > a {
        margin: 8px 8px 8px 32px;
      }
    }
  }
`

const LINK_PROPS = [
  {to: '/posts', children: 'Posts'},
  {to: '/events', children: 'Events'},
  {to: '/participate', children: 'Participate'},
]

export default ({beforeScroll = {}}) => {
  const {
    backgroundColor = '#fff',
    textColor = '#000',
    logoSrc = logoURI,
  } = beforeScroll

  console.log(backgroundColor, textColor, logoSrc)

  const dynamicStyles = useMemo(
    () =>
      css`
        background-color: ${backgroundColor};
        a {
          color: ${textColor};
        }
      `,
    [backgroundColor, textColor],
  )

  const {y} = useWindowScroll()
  const scrolled = useMemo(() => y > 0, [y])
  const className = scrolled ? 'scrolled' : ''

  const styles = css`
    ${baseStyles}
    ${dynamicStyles}
  `

  return (
    <Sticky
      stickyStyle={{zIndex: 1000, boxShadow: '0px 0px 5px rgba(0, 0, 0, .125)'}}
    >
      <nav {...{className}} css={styles}>
        <div>
          <Link className='branding' to='/'>
            {scrolled ? (
              <img src={logoURI} alt='logo' />
            ) : (
              <img src={logoSrc} alt='logo' />
            )}
            <h4>AMPLIFY</h4>
          </Link>

          <div className='links'>
            {LINK_PROPS.map(props => {
              const {children: key} = props
              return <Link {...{key}} {...props} activeClassName='active' />
            })}
          </div>
        </div>
      </nav>
    </Sticky>
  )
}
