import {keys, find} from 'ramda';
import {classNames} from '~/utilities';
import {useMemo} from 'react';

const existenceByValidTag = {
  p: true,
  span: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
};

export default ({className: key, ...rest}) => {
  const Tag = useMemo(
    () => find(k => !!existenceByValidTag[k], keys(rest)) || 'p',
    [rest],
  );
  const className = useMemo(() => classNames('text', key), [key]);
  return <Tag {...{className}} {...rest} />;
};
