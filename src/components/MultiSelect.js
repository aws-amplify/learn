import Select from 'react-select';
import {css} from '@emotion/core';
import {map, keys} from 'ramda';
import Text from './Text';
import {GRAY_COLOR} from '~/constants';

const styles = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 30px;

  .filter-heading {
    margin-bottom: 8px;
    color: ${GRAY_COLOR};
  }

  > .multi-select {
    cursor: pointer;
  }
`;

export default ({className, name, onChange, options: unformattedOptions}) => {
  const options = map(
    o => ({
      label: o,
      value: o,
    }),
    unformattedOptions,
  );

  return (
    <div css={styles} {...{className}}>
      <Text className='filter-heading' children={name} />
      <Select
        className='multi-select'
        closeMenuOnSelect={false}
        defaultValue={[]}
        isMulti
        onChange={e => onChange(map(({value}) => value, e))}
        {...{options}}
      />
    </div>
  );
};
