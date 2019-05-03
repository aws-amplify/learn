import {css} from '@emotion/core';
import {useMemo} from 'react';
import {map} from 'ramda';
import Link from '../Link';
import {classNames} from '~/utilities';

const styles = css`
  display: flex;
  cursor: pointer;
  appearance: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:active {
    outline: none;
  }
`;

const paddings = map(
  p =>
    css`
      padding: ${p};
    `,
  {
    small: `.3125rem`,
    medium: `.5625rem .75rem .5rem`,
    large: `.9375rem`,
  },
);

export default ({to, href, padding, className, ...rest}) => {
  const [Tag, uniqueProps] = useMemo(
    () => (to || href ? [Link, {to, href}] : ['button', {type: 'button'}]),
    [to, href],
  );

  return (
    <Tag
      css={[styles, paddings[padding || 'medium']]}
      className={classNames('button', className)}
      {...uniqueProps}
      {...rest}
    />
  );
};
