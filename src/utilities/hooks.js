import {useMemo} from 'react'

export const some = deps => useMemo(() => !!deps.filter(Boolean).length, deps)
