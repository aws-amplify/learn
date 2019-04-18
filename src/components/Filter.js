import {useCallback} from 'react'
import CheckboxGroup from './CheckboxGroup'
import {getOptions} from '~/utilities'

export default ({filters, data, selections, setSelections}) => {
  const options = getOptions(filters, data)

  return (
    <div>
      {filters.map(key => {
        const onChange = useCallback(
          selection => {
            setSelections({
              ...selections,
              [key]: selection,
            })
          },
          [selections, key],
        )

        return (
          <CheckboxGroup
            groupName={key}
            options={options[key]}
            {...{onChange}}
          />
        )
      })}
    </div>
  )
}
