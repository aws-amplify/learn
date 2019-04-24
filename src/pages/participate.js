import {Layout, Card, List, Nav, Text} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'

const header = <Nav />
const main = (
  <>
    <List
      heading={<Text listHeading>Contribute to the community</Text>}
      items={[
        {
          heading: 'Submit a Post',
          subheading:
            'Want to share a post with the community. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          to: '/posts/submit',
        },
        {
          heading: 'Submit an Event',
          subheading:
            'Want to share a post with the community. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          to: '/events/submit',
        },
      ].map(props => {
        const {heading: key} = props
        return <Card.Submit {...{key}} {...props} />
      })}
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 2,
      }}
    />
    <List
      heading={<Text listHeading>Templates to get you started</Text>}
      items={[
        {
          heading: 'Event Hosting Starter Pack',
          subheading:
            'Ready to host an event? Everything you need to get started included here.',
          to: '/posts/submit',
        },
        {
          heading: 'Presentation-only Kit',
          subheading:
            'Presentation template with supporting assets to help you build a deck',
          to: '/events/submit',
        },
        {
          heading: 'Logos & Assets',
          subheading: 'Amplify logos and banners for general-purpose use',
        },
      ].map(props => {
        const {heading: key} = props
        return <Card.Submit {...{key}} {...props} />
      })}
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 3,
      }}
    />
  </>
)

export default () => <Layout.Basic {...{header, main}} />
