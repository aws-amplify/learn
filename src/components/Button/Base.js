import {css} from '@emotion/core'

const styles = css`
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
