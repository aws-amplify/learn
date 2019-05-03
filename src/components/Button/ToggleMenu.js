import {css} from '@emotion/core';
import {useContext} from 'react';
import {layout as layoutContext} from '~/contexts';
import {IoMdClose, IoIosMore} from 'react-icons/io';
import {EBONY_CLAY_COLOR, mq} from '~/constants';

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 3.75rem;
  height: 3.75rem;
  background-color: ${EBONY_CLAY_COLOR};
  color: #fff;
  border-width: 0;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 1001;
  cursor: pointer;

  ${mq.tablet} {
    display: none;
  }

  .hidden {
    display: none;
  }
`;

export default () => {
  const {toggleMenu, menuOpen} = useContext(layoutContext);

  return (
    <button css={styles} type='button' onClick={toggleMenu}>
      {[IoMdClose, IoIosMore].map((Tag, i) => (
        <Tag {...(menuOpen === !!i ? {className: 'hidden'} : {})} size={23} />
      ))}
    </button>
  );
};
