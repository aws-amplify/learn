import {css} from '@emotion/core';
import {useState, useCallback, useRef} from 'react';
import {mq, MAX_WIDTH, TABLET_BREAKPOINT, CONCRETE_COLOR} from '~/constants';
import useSize from '@rehooks/component-size';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';
// import useLockBodyScroll from 'react-use/lib/useLockBodyScroll';
import {ToggleMenu} from '../Button';
import {layout as layoutContext} from '~/contexts';
import GlobalStyles from '../GlobalStyles';
import Footer from '../Footer';

const styles = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  > .body {
    position: relative;
    display: flex;
    flex-direction: row;
    max-width: ${MAX_WIDTH};
    margin: 0px auto;
    width: 100%;

    .menu {
      position: fixed;
      max-height: 100%;
      overflow-y: scroll;

      ::-webkit-scrollbar-track-piece,
      ::-webkit-scrollbar,
      ::-webkit-scrollbar-thumb,
      ::-webkit-scrollbar-track {
        display: none;
      }
    }

    .ghost {
      display: flex;
    }

    .main {
      &,
      & > div {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    }
  }
`;

const megaMenuStyles = css`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: ${CONCRETE_COLOR};
  padding-top: 75px;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export default ({header, menu, main}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // useLockBodyScroll(!menuOpen);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const {y: scrollTop} = useWindowScroll();
  const {width: windowWidth, height: windowHeight} = useWindowSize();

  const menuRef = useRef(null);
  const mainRef = useRef(null);

  const {width: menuWidth, height: menuHeight} = useSize(menuRef);
  const {height: mainHeight} = useSize(mainRef);

  const maxScrollTop = mainHeight - menuHeight + 50;
  const menuOffset =
    scrollTop < 50
      ? 125 - scrollTop
      : scrollTop < maxScrollTop
      ? 75
      : -(scrollTop - maxScrollTop) + 75;
  const showSidebar = windowWidth >= TABLET_BREAKPOINT;

  return (
    <>
      <GlobalStyles />
      <div css={styles}>
        <layoutContext.Provider value={{menuOpen, toggleMenu}}>
          {header}

          <div className='body'>
            {showSidebar && (
              <>
                <div
                  className='menu'
                  style={{
                    maxHeight: `${windowHeight - 90}px`,
                    top: menuOffset,
                  }}
                >
                  <div ref={menuRef}>{menu}</div>
                </div>
                <div
                  className='ghost'
                  style={{
                    marginTop: '75px',
                    width: menuWidth,
                    height: menuHeight,
                  }}
                />
              </>
            )}
            <div className='main'>
              <div ref={mainRef}>{main}</div>
            </div>
          </div>

          <Footer />

          {!showSidebar && (
            <>
              {menuOpen && (
                <div
                  css={megaMenuStyles}
                  className={`mega menu ${menuOpen ? 'open' : 'closed'}`}
                  children={menu}
                />
              )}
              <ToggleMenu />
            </>
          )}
        </layoutContext.Provider>
      </div>
    </>
  );
};
