import {Analytics} from 'aws-amplify'

export default props => {
  const {href} = props
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => {
        Analytics.record({
          name: 'followed external link',
          attributes: {href},
        })
      }}
      {...props}
    />
  )
}
