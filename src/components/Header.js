import {css} from '@emotion/core'
import {Link} from 'gatsby'
// get consistent format for logos
import whiteLogoSrc from '~/assets/images/logo-white.svg'
import orangeLogoSrc from '~/assets/images/logo.png'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import {useMemo} from 'react'
import {ORANGE, SECTION_MAX_WIDTH} from '~/constants'

const ghostStylesWithoutBackground = css`
  width: 100%;
  height: 75px;
`

const navStylesWithoutBackground = css`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 10000;
  backdrop-filter: blur(10px);
  transition: all 0.5s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);

    a {
      color: #000;
    }

    .landing-link {
      color: ${ORANGE};
    }

    .white {
      display: none;
    }

    .orange {
      display: block;
    }
  }

  > div {
    display: flex;
    flex: 1;
    margin: 0px auto;
    height: 75px;
    max-width: ${SECTION_MAX_WIDTH};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12.5px;

    a {
      color: #fff;
      margin: 0px 12.5px;
      font-weight: 200;

      &.active {
        text-decoration: underline;
      }
    }

    .landing-link {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      > svg,
      > img {
        margin-right: 5px;
      }
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
  }
`

const heroStylesWithoutBackground = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 85px 40px;
  color: #fff;
  text-align: center;

  h3 {
    line-height: 50px;
    font-weight: 100;
    display: flex;
  }

  .cta {
    padding-top: 24px;
  }
`

const linkProps = [
  {to: '/posts', children: 'Posts'},
  {to: '/events', children: 'Events'},
  {to: '/participate', children: 'Participate'},
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
        <div>
          <Link className='landing-link' to='/'>
            <img src={whiteLogoSrc} alt='logo' className='white' />
            <img src={orangeLogoSrc} alt='logo' className='orange' />
            AMPLIFY
          </Link>
          <div>
            {linkProps.map(props => (
              <Link {...props} activeClassName='active' />
            ))}
          </div>
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
