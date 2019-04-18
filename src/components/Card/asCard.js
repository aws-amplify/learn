import Link from '../Link'
import {useCallback, createElement} from 'react'

export default Template => ({href, to, disabled, ...rest}) => {
  const Container = useCallback(
    props => {
      const [CTag, cProps] = disabled
        ? ['div', props]
        : [Link, {to, href, ...props}]
      return createElement(CTag, {...cProps, className: 'container'})
    },
    [disabled, to, href],
  )

  return <Template {...{Container, href, to, disabled}} {...rest} />
}
