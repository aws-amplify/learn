import {css} from '@emotion/core'
import {useState, useCallback} from 'react'
import {mq} from '~/constants'
import Base from './Base'
import {ToggleMenu} from '../Button'
import {layout as layoutContext} from '~/contexts'
import {StickyContainer, Sticky} from 'react-sticky'

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

        <StickyContainer className='body'>
          <div>
            <Sticky>
              {({style}) => (
                <div className='side menu' {...{style}}>
                  {menu}
                </div>
              )}
            </Sticky>
            <div className='menu-ghost' />
            <div className='main'>{main}</div>
          </div>
        </StickyContainer>

        <ToggleMenu />
      </layoutContext.Provider>
    </Base>
  )
}
