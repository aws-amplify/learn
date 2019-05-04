import Select from 'react-select';
import {css} from '@emotion/core';
import {map, keys} from 'ramda';
import Text from './Text';

const styles = css`
  display: flex;
  flex-direction: column;
  max-width: 18.75rem;
  padding: 1.875rem;

  > .multi-select {
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 200;
    line-height: 1.3125rem;

    > div {
      padding: 0.0625rem 0 0.125rem;
    }
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
