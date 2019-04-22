import {Layout, Card, List, Nav} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'

const header = <Nav />
const main = (
  <List
    heading={<h3>Contribute to the community</h3>}
    subheading={(
      <h4>
        Want to share a post with the community. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </h4>
)}
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
    ].map(({heading, subheading, to}) => (
      <Card.CTA {...{heading, subheading, to}} />
    ))}
    columnCountByBreakpoint={{
      [TABLET_BREAKPOINT]: 2,
    }}
  />
)

export default () => <Layout.Basic {...{header, main}} />
