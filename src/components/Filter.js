import {useContext} from 'react';
import CheckboxGroup from './CheckboxGroup';
import {filter as filterContext} from '~/contexts';
import {css} from '@emotion/core';
import {mq} from '~/constants';

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
        {filters.map(({key, options}) => (
          <CheckboxGroup
            heading={key}
            options={options}
            onChange={d => setCriteria({[key]: d})}
          />
        ))}
      </div>
    </div>
  );
};
