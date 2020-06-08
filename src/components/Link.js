import {Link} from 'gatsby';
import ExternalLink from './ExternalLink';

export default props => {
  let {href, to, ...rest} = props;
  const external = !!href;
  const Tag = external ? ExternalLink : Link;
  if (to && !to.startsWith("/")) to = `/${to}`;
  return <Tag {...rest} {...(external ? {href} : {to})} />;
};
