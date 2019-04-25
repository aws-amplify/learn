import {keys, find} from 'ramda'

const existenceByValidTags = {
  p: true,
  span: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
}

export default ({className: key, ...rest}) => {
  const Tag = find(k => !!existenceByValidTags[k], keys(rest)) || 'p'
  const className = `text ${key}`
  return <Tag {...{className}} {...rest} />
}
