import {keys, find} from 'ramda';
import {useMemo} from 'react';

const existenceByValidTags = {
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
    () => find(k => !!existenceByValidTags[k], keys(rest)) || 'p',
    [rest],
  );
  const className = useMemo(() => `text ${key}`, [key]);
  return <Tag {...{className}} {...rest} />;
};
