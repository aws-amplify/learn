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
import {classNames, useRootFontSize} from '~/utilities';
import DiscordButton from '../DiscordButton';

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
      will-change: transform;
      top: 0;
      backface-visibility: none;
      transform: translate3d(0, 26.625rem, 0);

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
export default ({header, menu, main, hasHero = false}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // useLockBodyScroll(true);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const {y: scrollTop} = useWindowScroll();
  const {width: windowWidth, height: windowHeight} = useWindowSize();

  const rootFontSize = useRootFontSize();
  const navHeight = 3.75 * rootFontSize;
  const spaceBetweenNavAndSidebar = 3.125 * rootFontSize;

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const mainRef = useRef(null);

  const {width: menuWidth, height: initialMenuHeight} = useSize(menuRef) || {
    width: 200,
    height: 0,
  };
  const {height: mainHeight} = useSize(mainRef);
  const {height: headerHeight} = useSize(headerRef);
  const maxMenuHeight = windowHeight - navHeight;
  const menuHeightGreaterThanMax = initialMenuHeight > maxMenuHeight;
  const menuHeightStyleProp = menuHeightGreaterThanMax
    ? `${maxMenuHeight / 16}rem`
    : 'initial';

  const maxScrollTop =
    mainHeight - initialMenuHeight + spaceBetweenNavAndSidebar;
  const menuOffset =
    scrollTop === 0 && hasHero
      ? 410
      : scrollTop < headerHeight - navHeight + spaceBetweenNavAndSidebar
      ? spaceBetweenNavAndSidebar + headerHeight - scrollTop
      : scrollTop + spaceBetweenNavAndSidebar <= maxScrollTop
      ? navHeight
      : -(scrollTop - maxScrollTop) + 25;
  const showSidebar = windowWidth >= TABLET_BREAKPOINT;
  const scrollableClassName = menuHeightGreaterThanMax ? 'scrollable' : '';

  return (
    <>
      <GlobalStyles />
      <div css={styles}>
        <layoutContext.Provider value={{menuOpen, toggleMenu}}>
          <div ref={headerRef}>{header}</div>

          <div className='body'>
            {showSidebar && (
              <>
                <div
                  className={classNames(scrollableClassName, 'side menu')}
                  style={{
                    height: menuHeightStyleProp,
                    transform: `translateY(${menuOffset / 16}rem)`,
                  }}
                >
                  <div ref={menuRef}>{menu}</div>
                </div>
                <div
                  className='ghost'
                  style={{
                    marginTop: '3.75rem',
                    width: menuWidth || '12.5rem',
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
      <DiscordButton />
    </>
  );
};
