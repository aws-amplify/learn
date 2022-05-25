import {createContext} from 'react';
const {map} = require('ramda');

export const [layout, filter] = map(createContext, new Array(2));
