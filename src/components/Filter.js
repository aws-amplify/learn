import {useContext} from 'react';
import {filter as filterContext} from '~/contexts';
import {css} from '@emotion/core';
import {mq} from '~/constants';
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
`;

export default ({filters}) => {
  const {setCriteria} = useContext(filterContext);

  return (
    <div css={styles}>
      <div>
        {filters.map(({key, name, options, dateRange}) =>
          options ? (
            <CheckboxGroup
              {...{key}}
              heading={name}
              options={options}
              onChange={d => setCriteria({[key]: d})}
            />
          ) : dateRange ? (
            <DateRange
              {...{key, name}}
              onChange={d => setCriteria({[key]: d})}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};
