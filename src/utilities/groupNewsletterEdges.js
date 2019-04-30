import {reduce, assoc} from 'ramda';
import * as extract from './extract';

// const extractDateFromNode = extract.fromPath(['node', 'fields', 'date']);

// export default reduce((accumulator, current) => {
//   const stringifiedDate = extractDateFromNode(current);
//   const date = new Date(stringifiedDate);
//   const year = date.getFullYear();
//   const monthIndex = date.getMonth();
//   const month = monthNameByIndex[monthIndex];
//   const key = `${month} ${year}`;
//   return assoc(key, [...(accumulator[key] || []), current], accumulator);
// }, {});

export default () => {};
