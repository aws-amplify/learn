import {identity, map} from 'ramda';
import List from './List';

export default ({
  data,
  mapping = identity,
  renderCondition = identity,
  renderItem,
  keyExtractor,
  additionalItemProps = {},
  ...rest
}) => {
  const items = map(
    e =>
      renderCondition(e) &&
      renderItem({
        key: keyExtractor(e),
        ...mapping(e),
        ...additionalItemProps,
      }),
    data,
  );

  return <List {...rest} {...{items}} />;
};
