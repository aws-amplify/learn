import ExternalLink from './ExternalLink'
import {Link} from 'gatsby'

export default props => {
  const {href, to, ...rest} = props
  const external = !!href
  const Tag = external ? ExternalLink : Link
  return <Tag {...rest} {...(external ? {href} : {to})} />
}
