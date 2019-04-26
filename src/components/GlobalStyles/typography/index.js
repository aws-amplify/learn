import {css} from '@emotion/core';
import {join, values, mapObjIndexed} from 'ramda';
import dictionary from './dictionary';
import fontFaces from './font-faces';

const createStyleStringByProp = {
  size: x => `font-size: ${x}px;`,
  weight: x => `font-weight: ${x};`,
  height: x => `line-height: ${x}px;`,
  color: x => `color: ${x};`,
  transform: x => `text-transform: ${x};`,
};

export default css`
  ${fontFaces}

  .text {
    display: inline;
    font-family: Amazon Ember;
  }

  ${values(
    mapObjIndexed(
      (props, className) =>
        css`
          &.${className} {
            ${join(
              '',
              values(
                mapObjIndexed(
                  (value, key) => createStyleStringByProp[key](value),
                  props,
                ),
              ),
            )}
          }
        `,
      dictionary,
    ),
  )}
`;
