import {useContext} from 'react'
import CheckboxGroup from './CheckboxGroup'
import {filter as filterContext} from '~/contexts'
import {css} from '@emotion/core'
import {mq} from '~/constants'

const styles = css`
  padding: 16px;

  ${mq.tablet} {
    padding-right: 0px;
  }

  > div {
    background-color: #fff;
  }

  .checkbox-group {
    padding: 16px;
    border-top: 1px solid #e2e2e2;
    &:first-child {
      border-top-width: 0px;
    }
  }
`

export default ({filters}) => {
  const {setCriteria} = useContext(filterContext)

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
  )
}
