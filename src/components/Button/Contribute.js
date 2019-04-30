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
  }
`;

export default ({href, children, hidePlus}) => (
  <Basic
    {...{href}}
    className='actionable shadow'
    css={styles}
    textClass='landing-list-cta'
    padding='medium'
  >
    <Text span className='contribute-cta' {...{children}} />
    {!hidePlus && <IoIosAdd size={22} />}
  </Basic>
);
