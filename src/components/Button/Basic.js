import {css} from '@emotion/core';
import {useMemo} from 'react';
import {map} from 'ramda';
import Link from '../Link';

const styles = css`
  display: flex;
  cursor: pointer;
  appearance: none;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;

  &:focus,
  &:active {
    outline: none;
    border-width: 0px;
  }
`;

const paddings = map(
  p =>
    css`
      padding: ${p};
    `,
  {
    small: `5px`,
    medium: `8px 12px 9px`,
    large: `15px`,
  },
);

// {
//   children,
//   styles: passedStyles,
//   to,
//   href,
//   className,
//   size,
//   onClick,
// }

export default ({to, href, padding, className: passedClassName, ...rest}) => {
  const [Tag, uniqueProps] = useMemo(
    () => (to || href ? [Link, {to, href}] : ['button', {type: 'button'}]),
    [to, href],
  );

  return (
    <Tag
      css={[styles, paddings[padding || 'medium']]}
      className={`button ${passedClassName}`}
      {...uniqueProps}
      {...rest}
    />
  );
};
