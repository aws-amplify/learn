import {css} from '@emotion/core'
import {useState, useCallback, useRef} from 'react'
import {mq} from '~/constants'
import Base from './Base'
import {ToggleMenu} from '../Button'
import {layout as layoutContext} from '~/contexts'
import {Sticky} from 'react-sticky'
import useSize from '@rehooks/component-size'

const megaMenuStyles = css`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &.closed {
    display: none;
  }

  &.open {
    display: flex;
    background-color: #fff;
    padding-top: 75px;
    flex-direction: column;
    justify-content: flex-start;

    > div {
      &,
      & > div,
      & > div > div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }
  }

  ${mq.tablet} {
    &.open {
      display: none;
    }
  }
`

export default ({header, menu, main}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen])
  const [stuck, setStuck] = useState(false)
  const ref = useRef(null)
  const size = useSize(ref)

  return (
    <Base>
      <layoutContext.Provider value={{menuOpen, toggleMenu}}>
        {menuOpen && (
          <div
            css={megaMenuStyles}
            className={`mega menu ${menuOpen ? 'open' : 'closed'}`}
          >
            {menu}
          </div>
        )}

        {header}

        <div className='body'>
          <div>
            <Sticky>
              {({style: {width, top, ...style}, isSticky}) => {
                // fine-tune this affix behavior
                isSticky !== stuck && setStuck(isSticky)

                return (
                  <div className='side menu' style={{...style, top: '75px'}}>
                    <div {...{ref}}>{menu}</div>
                  </div>
                )
              }}
            </Sticky>
            {stuck && (
              <div
                className='ghost'
                style={{display: 'block', ...size, marginTop: '50px'}}
              />
            )}
            <div className='main'>{main}</div>
          </div>
        </div>

        <ToggleMenu />
      </layoutContext.Provider>
    </Base>
  )
}
