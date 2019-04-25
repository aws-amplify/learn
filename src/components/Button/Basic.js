import {css} from '@emotion/core'
import {useMemo} from 'react'
import Link from '../Link'
import Text from '../Text'
import {map, keys} from 'ramda'

const styles = css`
  display: flex;
  cursor: pointer;
  appearance: none;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
`

const paddingBySize = map(
  p =>
    css`
      padding: ${p};
    `,
  {
    small: `5px`,
    medium: `8px 12px 9px`,
    large: `15px`,
  },
)

export default ({
  children,
  styles: passedStyles,
  to,
  href,
  className,
  size,
  onClick,
  textClass,
}) => {
  const deps = [to, href]
  const isLink = useMemo(() => !!(to || href), deps)
  const Tag = useMemo(() => (isLink ? Link : 'button'), deps)

  return (
    <Tag
      css={[styles, paddingBySize[size || 'medium'], passedStyles]}
      className={`${className}`}
      {...(isLink ? {} : {type: 'button'})}
      {...{onClick, href, to}}
    >
      <Text span className={textClass} {...{children}} />
    </Tag>
  )
}
