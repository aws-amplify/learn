import {css} from '@emotion/core'
import {useMemo} from 'react'

const styles = css`
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  ${'' /* box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px; */}
  overflow: hidden;

  &:hover,
  *:hover {
    text-decoration: none;
  }

  &.actionable {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    ${'' /* &:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px,
        rgba(71, 63, 79, 0.16) 0px 8px 16px;
    } */}

    &:active {
      transform: translateY(0px);
      box-shadow: inset rgba(46, 41, 51, 0.08) 0px 1px 2px,
        inset rgba(71, 63, 79, 0.08) 0px 2px 4px;
    }
  }
`

export default ({
  actionable,
  children,
  className: passedClassName = '',
  styles: passedStyles,
  ...rest
}) => {
  const className = useMemo(
    () => `${passedClassName} tile ${actionable ? 'actionable' : ''}`,
    [actionable],
  )

  return (
    <div css={[styles, passedStyles]} {...{className}} {...rest}>
      {children}
    </div>
  )
}
