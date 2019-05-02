import {css} from '@emotion/core';
import {useMemo} from 'react';
import {generate} from 'shortid';
import {SAN_JUAN_COLOR, GRAY_COLOR} from '~/constants';
import Text from './Text';

const styles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
  cursor: pointer;

  * {
    user-select: none;
    transition: all 0.25s ease;
  }

  &:hover .display {
    > .text {
      color: #000;
    }

    > .box {
      border-color: #000;
    }
  }

  input {
    display: none;
  }

  .display {
    display: flex;
    flex-direction: row;
  }

  input:checked ~ .display {
    > .box {
      border-color: ${SAN_JUAN_COLOR};

      > div {
        background-color: ${SAN_JUAN_COLOR};
      }
    }

    > .text {
      color: ${SAN_JUAN_COLOR};
    }
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 1px solid ${GRAY_COLOR};
    border-radius: 1px;

    > div {
      width: 61.81%;
      height: 61.81%;
      border-radius: 1px;
    }
  }

  .text {
    margin-left: 7px;
    color: ${GRAY_COLOR};
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.3125rem;
  }
`;

export default ({value, onChange}) => {
  const id = useMemo(generate, []);

  return (
    <label className='checkbox' css={styles} htmlFor={id}>
      <input type='checkbox' {...{id, value, onChange}} />
      <div className='display'>
        <div className='box'>
          <div />
        </div>
        <Text span children={value} />
      </div>
    </label>
  );
};
