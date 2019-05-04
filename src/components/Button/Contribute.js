import {IoIosAdd} from 'react-icons/io';
import {css} from '@emotion/core';
import Basic from './Basic';
import {ORANGE_PEEL_COLOR} from '~/constants';
import Text from '../Text';

const styles = css`
  border-radius: 1.25rem;
  background-color: #fff;
  display: flex;
  border-width: 0;
  padding-top: 0.4375rem;
  padding-bottom: 0.5rem;

  > * {
    color: ${ORANGE_PEEL_COLOR};
  }

  .text {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
