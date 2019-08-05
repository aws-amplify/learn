import Flatpickr from 'react-flatpickr';
import {useState, useMemo} from 'react';
// eslint-disable-next-line
import 'flatpickr/dist/themes/airbnb.css';
import {css} from '@emotion/core';
import {generate} from 'shortid';
import {map} from 'ramda';
import Text from './Text';
import {GRAY_COLOR} from '~/constants';
import {classNames} from '~/utilities';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.875rem;
  flex: 1;
  cursor: pointer;

  label {
    cursor: pointer;
    color: ${GRAY_COLOR};
    margin-bottom: 0.5rem;
  }

  input {
    display: flex;
    flex: 1;
    padding: 0.5625rem 0.0625rem 0.5625rem 0.6875rem;
    font-size: 0.875rem;
    font-weight: 200;
    line-height: 1.3125rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    margin-top: 0.125rem;
    box-sizing: padding-box;
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 0.25rem;
    transition: 0.375 ease border-color;

    &:hover {
      border-color: hsl(0, 0%, 70%);
    }
  }

  &.focused {
    > div {
      border: 2px solid #3e85f7;

      > input {
        padding: 0.5rem 0px 0.5rem 0.625rem;
      }
    }
  }

  .clear {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .separation {
    height: 2rem;
    margin: auto;
    border-left: 1px solid hsl(0, 0%, 80%);
  }
`;

export default ({name, onChange, className, criteria}) => {
  const [range, setRange] = useState(criteria);
  const id = useMemo(generate, []);
  const [focusedClassName, setFocusedClassName] = useState('');

  return (
    <div css={styles} className={classNames(focusedClassName, className)}>
      {name && (
        <label htmlFor={id}>
          <Text className='filter-heading' children={name} />
        </label>
      )}
      <div>
        <Flatpickr
          {...{id}}
          placeholder='Select range'
          value={range}
          onOpen={() => setFocusedClassName('focused')}
          onClose={() => setFocusedClassName('')}
          onChange={v => {
            setRange(v);
            onChange(v);
          }}
          options={{
            mode: 'range',
            dateFormat: 'F j, Y',
          }}
        />
        {range && (
          <>
            <div className='separation' />
            <div
              aria-hidden='true'
              className='clear css-16pqwjk-indicatorContainer'
              onClick={() => {
                setRange(null);
                onChange(null);
              }}
            >
              <svg
                height='20'
                width='20'
                viewBox='0 0 20 20'
                aria-hidden='true'
                focusable='false'
                className='css-19bqh2r'
              >
                <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
