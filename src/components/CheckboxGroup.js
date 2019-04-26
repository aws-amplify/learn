import {css} from '@emotion/core';
import {useState, useCallback} from 'react';
import Checkbox from './Checkbox';
import Text from './Text';
import {GRAY_COLOR} from '~/constants';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  border-top: 1px solid #e2e2e2;

  &:first-child {
    border-top-width: 0px;
  }

  .checkbox-group-heading {
    color: ${GRAY_COLOR};
  }
`;

export default ({heading, options, onChange: onAnyChange}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div css={styles} className='checkbox-group'>
      {heading && (
        <Text h3 className='checkbox-group-heading'>
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

        return <Checkbox value={option} {...{onChange, option}} />;
      })}
    </div>
  );
};
