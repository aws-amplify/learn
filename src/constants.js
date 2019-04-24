import {mapObjIndexed} from 'ramda'
import {css} from '@emotion/core'

export const TABLET_BREAKPOINT = 600
export const LAPTOP_BREAKPOINT = 768
export const DESKTOP_BREAKPOINT = 992
export const MONITOR_BREAKPOINT = 1200

const breakpoints = {
  tablet: TABLET_BREAKPOINT,
  laptop: LAPTOP_BREAKPOINT,
  desktop: DESKTOP_BREAKPOINT,
  monitor: MONITOR_BREAKPOINT,
}

export const mq = mapObjIndexed(
  breakpoint => `@media (min-width: ${breakpoint}px)`,
  breakpoints,
)

export const ORANGE = '#ff9900'
export const VIOLETTE = '#4b6189'
export const LIGHTER_BLUE = '#007bb7'
export const LIGHT_BLUE = '#31456f'
export const MEDIUM_BLUE = '#232f3e'
export const DARK_BLUE = '#1c222d'
export const DARK_GRAY = '#828282'
export const MEDIUM_GRAY = '#a2a2a2'
export const LIGHT_GRAY = '#e1e4ea'
export const LIGHTER_GRAY = '#f2f2f2'

export const TWITTER_BLUE = '#4199d4'
export const GITHUB_GRAY = '#333'
export const YOUTUBE_RED = '#c4302b'

export const SECTION_MAX_WIDTH = '1600px'

export const sectionStyles = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0px 16px;
`
