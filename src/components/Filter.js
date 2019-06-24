import {useContext, useCallback} from 'react';
import {filter as filterContext} from '~/contexts';
import {css} from '@emotion/core';
import {mq, GRAY_COLOR} from '~/constants';
import {curry} from 'ramda';
import MultiSelect from './MultiSelect';
import DateRange from './DateRange';
import CheckboxGroup from './CheckboxGroup';

const styles = css`
  padding: 1rem;

  ${mq.tablet} {
    padding-right: 0;
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
    margin-bottom: 0.5rem;
    color: ${GRAY_COLOR};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6875rem;
  }
`;

export default ({filters}) => {
  const {criteria, setCriteria} = useContext(filterContext);
  const createOnChange = curry((key, d) => {
    setCriteria({[key]: d});
  });

  const stringified = JSON.stringify(criteria);
  const encoded = encodeURI(stringified);
  window.location.hash = encoded;

  return (
    <div css={styles}>
      <div>
        {filters.map(({type, key, name, options}) => {
          const onChange = createOnChange(key);

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
