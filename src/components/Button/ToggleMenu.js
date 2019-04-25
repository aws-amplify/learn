import {css} from '@emotion/core'
import {useContext} from 'react'
import {layout as layoutContext} from '~/contexts'
import {IoMdClose, IoIosMore} from 'react-icons/io'
import {EBONY_CLAY_COLOR, mq} from '~/constants'

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 8px;
  bottom: 8px;
  width: 60px;
  height: 60px;
  background-color: ${EBONY_CLAY_COLOR};
  color: #fff;
  border-width: 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 1001;
  cursor: pointer;

  ${mq.tablet} {
    display: none;
  }

  .hidden {
    display: none;
  }
`

export default () => {
  const {toggleMenu, menuOpen} = useContext(layoutContext)

  return (
    <button css={styles} type='button' onClick={toggleMenu}>
      {[IoMdClose, IoIosMore].map((Tag, i) => (
        <Tag {...(menuOpen === !!i ? {className: 'hidden'} : {})} size={23} />
      ))}
    </button>
  )
}
