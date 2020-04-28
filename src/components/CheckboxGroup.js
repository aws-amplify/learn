import {css} from '@emotion/core';
import {useState, useCallback} from 'react';
import Checkbox from './Checkbox';
import Text from './Text';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export default ({
  heading,
  options,
  onChange: onAnyChange,
  className,
  criteria = [],
}) => {
  const [selectedOptions, setSelectedOptions] = useState(criteria);

  return (
    <div css={styles} {...{className}}>
      {heading && (
        <Text h3 className='filter-heading'>
          {heading}
        </Text>
      )}

      {options.map(option => {
        const onChange = useCallback(
          ({target: {checked}}) => {
            // optimize
            const updated = checked
              ? [...selectedOptions, option]
              : selectedOptions.filter(inQuestion => inQuestion !== option);

            [setSelectedOptions, onAnyChange].forEach(fn => fn(updated));
          },
          [selectedOptions, option],
        );

        return (
          <Checkbox
            value={option}
            {...{onChange, option}}
            defaultChecked={selectedOptions && selectedOptions.includes(option)}
          />
        );
      })}
    </div>
  );
};
