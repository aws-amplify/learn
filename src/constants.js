import {mapObject} from '~/utilities'

const breakpoints = {
  tablet: 600,
  laptop: 768,
  desktop: 992,
  monitor: 1200,
}

export const mq = mapObject(
  breakpoint => `@media (min-width: ${breakpoint}px)`,
  breakpoints,
)

export const ORANGE = '#ff9900'
export const LIGHTER_BLUE = '#4b6189'
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
