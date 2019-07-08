import {useCallback} from 'react';
import LazyLoad from 'react-lazyload';
import Link from '../Link';
import {classNames} from '~/utilities';

export default Template => ({href, to, disabled, className, ...rest}) => {
  const ConditionalAnchor = useCallback(
    props => {
      const [CTag, cProps] = disabled
        ? ['div', props]
        : [Link, {to, href, ...props}];
      return <CTag {...cProps} />;
    },
    [disabled, to, href],
  );

  return (
    <LazyLoad>
      <Template
        className={classNames(className, 'card')}
        {...{ConditionalAnchor, href, to, disabled}}
        {...rest}
      />
    </LazyLoad>
  );
};
