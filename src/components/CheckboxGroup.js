import {css} from '@emotion/core'
import {useState, useCallback} from 'react'
import Checkbox from './Checkbox'

const styles = css`
  display: flex;
  flex-direction: column;

  h4 {
    padding: 10px 7px 3px 7px;
    text-transform: capitalize;
  }
`

export default ({groupName, options, onChange: onAnyChange}) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  return (
    <div css={styles}>
      {groupName && <h4>{groupName}</h4>}

      {options.map(option => {
        const onChange = useCallback(
          ({target: {checked}}) => {
            // optimize
            const updated = checked
              ? [...selectedOptions, option]
              : selectedOptions.filter(inQuestion => inQuestion !== option)

            ;[setSelectedOptions, onAnyChange].forEach(fn => fn(updated))
          },
          [selectedOptions, option],
        )

        return <Checkbox value={option} {...{onChange, option}} />
      })}
    </div>
  )
}
