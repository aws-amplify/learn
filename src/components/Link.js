import {Link} from 'gatsby';
import ExternalLink from './ExternalLink';

export default props => {
  const {href, to, ...rest} = props;
  const external = !!href;
  const Tag = external ? ExternalLink : Link;
  return <Tag {...rest} {...(external ? {href} : {to})} />;
};
