import {css} from '@emotion/core'
import {useMemo} from 'react'
import {generate} from 'shortid'
import {LIGHT_BLUE} from '~/constants'

const styles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;

  * {
    user-select: none;
  }

  input {
    display: none;
  }

  input:checked ~ .circle {
    > div {
      background-color: ${LIGHT_BLUE};
    }
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 1px solid ${LIGHT_BLUE};
    border-radius: 1px;

    > div {
      width: 61.81%;
      height: 61.81%;
      border-radius: 1px;
    }
  }

  span {
    margin-left: 7px;
  }
`

export default ({value, onChange}) => {
  const id = useMemo(generate, [])

  return (
    <label className='checkbox' css={styles} htmlFor={id}>
      <input type='checkbox' {...{id, value, onChange}} />
      <div className='circle'>
        <div />
      </div>
      <span>{value}</span>
    </label>
  )
}
