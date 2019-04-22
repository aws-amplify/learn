import {map} from 'ramda'
import {createContext} from 'react'

export const [layout, filter] = map(createContext, new Array(2))
