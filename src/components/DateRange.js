import Flatpickr from 'react-flatpickr';
import {useState, useMemo} from 'react';
// eslint-disable-next-line
import 'flatpickr/dist/themes/airbnb.css';
import {css} from '@emotion/core';
import {generate} from 'shortid';
import Text from './Text';
import {SILVER_CHALICE_COLOR, GRAY_COLOR} from '~/constants';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 24px 30px 24px 30px;
  flex: 1;
  cursor: pointer;

  label {
    cursor: pointer;
    color: ${GRAY_COLOR};
  }

  input {
    margin-top: 2px;
  }

  .clear {
    margin-top: 4px;
    color: ${SILVER_CHALICE_COLOR};
  }
`;

export default ({name, onChange, className}) => {
  const [range, setRange] = useState(null);
  const id = useMemo(generate, []);

  return (
    <div css={styles} {...{className}}>
      {name && (
        <label htmlFor={id}>
          <Text className='date-range-heading'>{name}</Text>
        </label>
      )}
      <Flatpickr
        {...{id}}
        className='date-range'
        placeholder='none selected'
        value={range}
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
        <Text
          className='clear'
          onClick={() => {
            setRange(null);
            onChange(null);
          }}
        >
          clear selection
        </Text>
      )}
    </div>
  );
};
