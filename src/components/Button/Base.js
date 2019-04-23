import {css} from '@emotion/core'

const styles = css`
  cursor: pointer;
  appearance: none;
  color: #000;
`

export default ({children, styles: passedStyles}) => (
  <button
    css={[styles, passedStyles]}
    type='button'
    {...{children}}
    className='tile actionable'
  />
)
