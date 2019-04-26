import Amplify, {Analytics} from 'aws-amplify'
import awsmobile from '~/aws-exports'

let configured = false

export default ({name, ...rest}) => {
  if (!configured) {
    Amplify.configure(awsmobile)
    configured = true
  }

  Analytics.record({
    name,
    attributes: rest,
  })
}
