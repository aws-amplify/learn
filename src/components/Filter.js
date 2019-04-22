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
    padding: 16px;
    background-color: #fff;
    border-radius: 5px;
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
