import {useContext, useCallback} from 'react';
import {filter as filterContext} from '~/contexts';
import {css} from '@emotion/core';
import {mq, GRAY_COLOR} from '~/constants';
import {curry} from 'ramda';
import MultiSelect from './MultiSelect';
import DateRange from './DateRange';
import CheckboxGroup from './CheckboxGroup';

const styles = css`
  padding: 16px;

  ${mq.tablet} {
    padding-right: 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fff;
  }

  .filter-input {
    border-top: 1px solid #ddd;

    &:first-child {
      border-top-width: 0px;
    }
  }

  .filter-heading {
    margin-bottom: 8px;
    color: ${GRAY_COLOR};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6875rem;
  }
`;

export default ({filters}) => {
  const {setCriteria} = useContext(filterContext);
  const createOnChange = useCallback(
    curry((key, d) => setCriteria({[key]: d})),
    [],
  );

  return (
    <div css={styles}>
      <div>
        {filters.map(({type, key, name, options}) => {
          const onChange = useCallback(createOnChange(key), [key]);

          switch (type) {
            case 'CHECKBOX_GROUP': {
              return (
                <CheckboxGroup
                  className='filter-input'
                  {...{key, onChange, options}}
                  heading={name}
                />
              );
            }

            case 'DATE_RANGE': {
              return (
                <DateRange
                  className='filter-input'
                  {...{key, name, onChange}}
                />
              );
            }

            case 'MULTI_SELECT': {
              return <MultiSelect {...{options, key, name, onChange}} />;
            }

            default: {
              return null;
            }
          }
        })}
      </div>
    </div>
  );
};
