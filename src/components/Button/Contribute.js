import {IoIosAdd} from 'react-icons/io';
import {css} from '@emotion/core';
import Basic from './Basic';
import {ORANGE_PEEL_COLOR} from '~/constants';
import Text from '../Text';

const styles = css`
  border-radius: 20px;
  background-color: ${ORANGE_PEEL_COLOR};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  > * {
    color: #fff;
  }

  .text {
    margin-left: 8px;
  }

  svg {
    position: relative;
    top: 1px;
    margin: 0px;
  }
`;

export default ({href, children, hidePlus}) => (
  <Basic
    {...{href}}
    className='three-dee'
    css={styles}
    textClass='landing-list-cta'
    padding='medium'
  >
    <Text span className='contribute-cta'>
      {children}
    </Text>
    {!hidePlus && <IoIosAdd size={24} />}
  </Basic>
);
