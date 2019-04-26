import {join, defaultTo, map} from 'ramda';

export default (...all) => join(' ', map(defaultTo(''), all));
