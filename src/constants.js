import {map} from 'ramda';

export const TABLET_BREAKPOINT = 600;
export const LAPTOP_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 992;
export const MONITOR_BREAKPOINT = 1200;

const breakpoints = {
  tablet: TABLET_BREAKPOINT,
  laptop: LAPTOP_BREAKPOINT,
  desktop: DESKTOP_BREAKPOINT,
  monitor: MONITOR_BREAKPOINT,
};

export const mq = map(
  breakpoint => `@media (min-width: ${breakpoint}px)`,
  breakpoints,
);

export const ORANGE_PEEL_COLOR = '#ff9900';
// export const EMBER_BLAZE =
//   'linear-gradient(to right, #ff9900, #ffc300, #ff9900)';
export const KASHMIR_BLUE_COLOR = '#4b6189';
export const LOCHMARA_COLOR = '#007bb7';
export const SAN_JUAN_COLOR = '#31456f';
export const EBONY_CLAY_COLOR = '#232f3e';
export const BIG_STONE_COLOR = '#152939';
export const MIRAGE_COLOR = '#1c222d';
export const GRAY_COLOR = '#828282';
export const SILVER_CHALICE_COLOR = '#a2a2a2';
export const ATHENS_GRAY_COLOR = '#e1e4ea';
export const CONCRETE_COLOR = '#f2f2f2';

export const TWITTER_BLUE_COLOR = '#4199d4';
export const GITHUB_GRAY_COLOR = '#333';
export const YOUTUBE_RED_COLOR = '#c4302b';

export const MAX_WIDTH = '1200px';
