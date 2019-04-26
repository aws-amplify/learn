import {css} from '@emotion/core';
// make sure Gatsby properly chunks font assets into async loadables
import {Th, ThIt, Lt, LtIt, Rg, RgIt, Bd, BdIt} from '~/assets/fonts';
import {map, join} from 'ramda';

export default css`
  ${join(
    '',
    map(
      ({uri, style, weight}) => `
        @font-face {
          font-family: Amazon Ember;
          src: url(${uri});
          font-style: ${style};
          font-weight: ${weight};
        }
      `,
      [
        {
          uri: Th,
          weight: '100',
          style: 'normal',
        },
        {
          uri: ThIt,
          weight: '100',
          style: 'italic',
        },
        {
          uri: Lt,
          weight: '200',
          style: 'normal',
        },
        {
          uri: LtIt,
          weight: '200',
          style: 'italic',
        },
        {
          uri: Rg,
          weight: '300',
          style: 'normal',
        },
        {
          uri: RgIt,
          weight: '300',
          style: 'italic',
        },
        {
          uri: Bd,
          weight: '400',
          style: 'normal',
        },
        {
          uri: BdIt,
          weight: '400',
          style: 'italic',
        },
      ],
    ),
  )}
`;
