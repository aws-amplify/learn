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
import {classNames} from '~/utilities';

const styles = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  > .body {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    max-width: ${MAX_WIDTH};

    .side.menu {
      display: none;
      position: fixed;

      &.scrollable {
        overflow-y: scroll;

        ::-webkit-scrollbar-track-piece,
        ::-webkit-scrollbar,
        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-track {
          display: none;
        }
      }

      ${mq.tablet} {
        display: block;
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

// eventually swap out with REM when dynamically searching sticky-related element values
const megaMenuStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${CONCRETE_COLOR};
  padding-top: 3.75rem;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &.open {
    display: flex;

    .filter-input {
      background-color: #fff;
      margin-bottom: 1rem;
    }
  }

  &.closed {
    display: none;
  }

  > * {
    &,
    & > * {
      display: flex;
      flex: 1;
    }
  }
`;

// rewrite using request-animation-frame for 60fps!!!
export default ({header, menu, main}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // useLockBodyScroll(true);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const {y: scrollTop} = useWindowScroll();
  const {width: windowWidth, height: windowHeight} = useWindowSize();

  const menuRef = useRef(null);
  const mainRef = useRef(null);

  const {width: menuWidth, height: initialMenuHeight} = useSize(menuRef);
  const {height: mainHeight} = useSize(mainRef);
  const maxMenuHeight = windowHeight - 60;
  const menuHeightGreaterThanMax = initialMenuHeight > maxMenuHeight;
  const menuHeightStyleProp = menuHeightGreaterThanMax
    ? `${maxMenuHeight}px`
    : 'initial';

  const maxScrollTop = mainHeight - initialMenuHeight + 50;
  const menuOffset =
    scrollTop < 50
      ? 110 - scrollTop
      : scrollTop + 50 < maxScrollTop
      ? 60
      : -(scrollTop - maxScrollTop) + 25;
  const showSidebar = windowWidth >= TABLET_BREAKPOINT;
  const scrollableClassName = menuHeightGreaterThanMax ? 'scrollable' : '';

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
                  className={classNames(scrollableClassName, 'side menu')}
                  style={{
                    height: menuHeightStyleProp,
                    top: menuOffset,
                  }}
                >
                  <div ref={menuRef}>{menu}</div>
                </div>
                <div
                  className='ghost'
                  style={{
                    marginTop: '3.75rem',
                    width: menuWidth,
                    height: Math.min(initialMenuHeight, maxMenuHeight),
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
