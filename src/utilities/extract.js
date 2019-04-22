import {curry, lensPath, view} from 'ramda'

export const fromPath = curry((path, target) => view(lensPath(path), target))

export const keyFromNode = fromPath(['node', 'fields', 'key'])
