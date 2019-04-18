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
