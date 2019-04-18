import {css} from '@emotion/core'
import {Page, Card, Section} from '~/components'
import {mq} from '~/constants'

export default () => {
  return (
    <Page>
      <Section
        heading='Contribute to the community'
        data={[
          {
            heading: 'Submit a Post',
            subheading:
              'Want to share a post with the community. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            action: {
              to: '/post/submit',
              children: 'Submit a Post',
            },
          },
          {
            heading: 'Submit an Event',
            subheading:
              'Want to share an event with the community. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            action: {
              to: '/events/submit',
              children: 'Submit an Event',
            },
          },
          {
            heading: 'Submit a Project',
            subheading:
              'Want to share a project with the community. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            action: {
              to: '/showcase/submit',
              children: 'Submit a Project',
            },
          },
        ]}
        Template={Card.Submit}
        columnCountByMediaQuery={{
          [mq.tablet]: 3,
        }}
      />
    </Page>
  )
}
