import Select from 'react-select';
import {css} from '@emotion/core';
import {map} from 'ramda';
import {mq} from '~/constants';
import Text from './Text';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 1.875rem;

  ${mq.tablet} {
    max-width: 18.75rem;
  }

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

const mapToOptions = o => ({
  label: o,
  value: o,
});

export default ({
  className,
  name,
  onChange,
  options: unformattedOptions,
  criteria,
}) => {
  const options = map(mapToOptions, unformattedOptions);

  return (
    <div css={styles} {...{className}}>
      <Text className='filter-heading' children={name} />
      <Select
        className='multi-select'
        closeMenuOnSelect={false}
        defaultValue={criteria ? map(mapToOptions, criteria) : null}
        isMulti
        onChange={e => onChange(map(({value}) => value, e))}
        {...{options}}
      />
    </div>
  );
};
