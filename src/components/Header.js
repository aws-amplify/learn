// hero={{
//   styles: `
//     background-color: ${ORANGE};
//   `,
//   heading: 'AWS Amplify Community',
//   subheading: `Let's make cool things together!`,
//   cta: (
//     <Link to='/participate'>
//       share your project, writing, event, misc.
//     </Link>
//   ),
// }}

import {css} from '@emotion/core'
import {Link} from 'gatsby'
// get consistent format for logos
import whiteLogoSrc from '~/assets/images/logo-white.svg'
import orangeLogoSrc from '~/assets/images/logo.png'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import {useMemo} from 'react'

const ghostStylesWithoutBackground = css`
  width: 100%;
  height: 55px;
`

const navStylesWithoutBackground = css`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  padding: 8px;
  z-index: 10000;
  backdrop-filter: blur(10px);

  a {
    color: #fff;
    margin: 8px;

    &.active {
      text-decoration: underline;
    }
  }

  .landing-link {
    display: flex;
    flex-direction: row;
  }

  .white,
  .orange {
    width: 25px;
    height: 20px;
  }

  .white {
    display: block;
  }

  .orange {
    display: none;
  }

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);

    a {
      color: #000;
    }

    .white {
      display: none;
    }

    .orange {
      display: block;
    }
  }
`

const heroStylesWithoutBackground = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px 120px 40px;
  color: #fff;
  text-align: center;

  h3 {
    display: flex;
    padding-top: 8px;
  }

  .cta {
    padding-top: 24px;
  }
`

const linkProps = [
  {to: '/', children: 'community'},
  {to: '/posts', children: 'posts'},
  {to: '/events', children: 'events'},
  {to: '/participate', children: 'participate'},
]

export default ({heading, subheading, cta, backgroundColor}) => {
  const deps = [heading, subheading, cta]
  const hasHero = useMemo(() => !!deps.filter(Boolean).length, deps)
  const {y} = hasHero ? useWindowScroll() : {y: 1}
  const navClasses = useMemo(() => (y > 0 ? 'scrolled' : ''), [y])

  // memoize in prod
  const [ghostStyles, navStyles, heroStyles] = [
    ghostStylesWithoutBackground,
    navStylesWithoutBackground,
    hasHero ? heroStylesWithoutBackground : null,
  ].map(
    styles => css`
      ${styles}
      background-color: ${backgroundColor};
    `,
  )

  return (
    <>
      <div css={ghostStyles} />

      <nav className={navClasses} css={navStyles}>
        <Link className='landing-link' to='/'>
          <img src={whiteLogoSrc} alt='logo' className='white' />
          <img src={orangeLogoSrc} alt='logo' className='orange' />
          MPLIFY
        </Link>
        <div>
          {linkProps.map(props => (
            <Link {...props} activeClassName='active' />
          ))}
        </div>
      </nav>

      {hasHero && (
        <div css={heroStyles}>
          <h1>{heading}</h1>
          <h3>{subheading}</h3>
          <div className='cta'>{cta}</div>
        </div>
      )}
    </>
  )
}
