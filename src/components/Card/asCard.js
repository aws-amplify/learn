import {useCallback} from 'react';
import {classNames} from '~/utilities';
import Link from '../Link';

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
    <Template
      className={classNames(className, 'card')}
      {...{ConditionalAnchor, href, to, disabled}}
      {...rest}
    />
  );
};
