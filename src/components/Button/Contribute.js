import {IoIosAdd} from 'react-icons/io';
import {css} from '@emotion/core';
import Basic from './Basic';
import {ORANGE_PEEL_COLOR} from '~/constants';
import Text from '../Text';

const styles = css`
  border-radius: 22px;
  background-color: ${ORANGE_PEEL_COLOR};
  display: flex;
  border-width: 0px;
  padding-top: 12px;
  padding-bottom: 11px;

  > * {
    color: #fff;
  }

  .text {
    margin-left: 8px;
  }

  svg {
    position: relative;
    margin: 0px;
    top: -1px;
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
    {!hidePlus && <IoIosAdd size={23} />}
  </Basic>
);
