import {css} from '@emotion/core'
// make sure Gatsby properly chunks font assets into async loadables
import {Th, ThIt, Lt, LtIt, Rg, RgIt, Bd, BdIt} from '~/assets/fonts'

export default css`
  ${[
    {
      uri: Th,
      weight: 'thin',
      style: 'normal',
    },
    {
      uri: ThIt,
      weight: 'thin',
      style: 'italic',
    },
    {
      uri: Lt,
      weight: 'lighter',
      style: 'normal',
    },
    {
      uri: LtIt,
      weight: 'lighter',
      style: 'italic',
    },
    {
      uri: Rg,
      weight: 'normal',
      style: 'normal',
    },
    {
      uri: RgIt,
      weight: 'normal',
      style: 'italic',
    },
    {
      uri: Bd,
      weight: 'bold',
      style: 'normal',
    },
    {
      uri: BdIt,
      weight: 'bold',
      style: 'italic',
    },
  ]
    .map(
      ({uri, style, weight}) => `
        @font-face {
          font-family: Ember;
          src: url(${uri});
          font-style: ${style};
          font-weight: ${weight};
        }
      `,
    )
    .join('')}
`
