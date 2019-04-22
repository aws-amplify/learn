import List from './List'
import {map} from 'ramda'

export default ({
  data,
  mapping,
  renderCondition = e => e,
  renderItem,
  keyExtractor,
  ...rest
}) => {
  const items = map(
    e =>
      renderCondition(e) &&
      renderItem({
        key: keyExtractor(e),
        ...(mapping ? mapping(e) : e),
      }),
    data,
  )

  return <List {...rest} {...{items}} />
}
