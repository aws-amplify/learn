import {reduce, assoc, invertObj} from 'ramda';
import * as extract from './extract';

export const monthNameByIndex = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthIndexByName = invertObj(monthNameByIndex);

const extractDateFromNode = extract.fromPath(['node', 'fields', 'date']);

export default reduce((accumulator, current) => {
  const stringifiedDate = extractDateFromNode(current);
  const date = new Date(stringifiedDate);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = monthNameByIndex[monthIndex];
  const key = `${month} ${year}`;
  return assoc(key, [...(accumulator[key] || []), current], accumulator);
}, {});
