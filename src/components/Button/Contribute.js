import {IoIosAdd} from 'react-icons/io';
import {css} from '@emotion/core';
import Basic from './Basic';
import {ORANGE_PEEL_COLOR} from '~/constants';
import Text from '../Text';

const styles = css`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  border-width: 0px;
  padding-top: 7px;
  padding-bottom: 8px;

  > * {
    color: ${ORANGE_PEEL_COLOR};
  }

  .text {
    margin-left: 7px;
    margin-right: 7px;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.3125rem;
  }
`;

export default ({href, children, hidePlus}) => (
  <Basic {...{href}} className='actionable shadow' css={styles}>
    <Text span {...{children}} />
    {!hidePlus && <IoIosAdd size={22} />}
  </Basic>
);
