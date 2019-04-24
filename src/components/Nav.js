import {css} from '@emotion/core'
import {Link} from 'gatsby'
// get consistent format for logos
import logoURI from '~/assets/images/logo-dark.png'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import {useMemo} from 'react'
import {ORANGE, SECTION_MAX_WIDTH} from '~/constants'
import {Sticky} from 'react-sticky'
import Color from 'color'
import {values} from 'ramda'
import Text from './Text'

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

      img {
        width: 25px;
        height: 20px;
      }
    }

    > .links {
      padding: 8px;
      > a {
        margin: 8px 8px 8px 48px;
      }
    }
  }
`

const LINK_PROPS = [
  {to: '/posts', children: 'Posts'},
  {to: '/events', children: 'Events'},
  {to: '/participate', children: 'Participate'},
]

const defaults = {
  backgroundColor: '#fff',
  textColor: '#000',
  logoSrc: logoURI,
}

export default ({beforeScroll: b = {}, afterScroll: a = {}}) => {
  const deps = [...values(b), ...values(a)]

  const beforeScroll = {...defaults, ...b}
  const afterScroll = {...defaults, ...a}

  const dynamicStyles = useMemo(
    () =>
      css`
        background-color: ${beforeScroll.backgroundColor};

        * {
          color: ${beforeScroll.textColor};
        }

        &.scrolled {
          background-color: ${afterScroll.backgroundColor};

          * {
            color: ${afterScroll.textColor};
          }
        }
      `,
    deps,
  )

  const {y} = useWindowScroll()
  const scrolled = useMemo(() => y > 0, [y])
  const className = scrolled ? 'scrolled' : ''

  const styles = css`
    ${baseStyles}
    ${dynamicStyles}
  `

  // <Sticky
  //     stickyStyle={{zIndex: 1000, boxShadow: '0px 0px 5px rgba(0, 0, 0, .125)'}}
  //   >

  return (
    <Sticky>
      {({style}) => (
        <nav {...{className, style}} css={styles}>
          <div>
            <Link className='branding' to='/'>
              {scrolled ? (
                <img src={afterScroll.logoSrc} alt='logo' />
              ) : (
                <img src={beforeScroll.logoSrc} alt='logo' />
              )}
              <Text navBranding>AMPLIFY</Text>
            </Link>

            <div className='links'>
              {LINK_PROPS.map(({children, ...rest}) => {
                return (
                  <Link {...{children}} {...rest} activeClassName='active'>
                    <Text navLink>{children}</Text>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      )}
    </Sticky>
  )
}
