import {join, filter, is} from 'ramda';

export default (...all) => join(' ', filter(is(String), all));
