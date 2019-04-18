import {graphql} from 'gatsby'
import {Page, Card, CTA, Section} from '~/components'
import * as thumbnails from '~/assets/images/view-more'
import {ORANGE, mq} from '~/constants'
import {mapNodeToProps} from '~/utilities'
import {FaArrowCircleRight} from 'react-icons/fa'
import {IoMdPeople, IoIosCalendar, IoIosJournal} from 'react-icons/io'

export const pageQuery = graphql`
  query pageQuery($currentDate: Date) {
    events: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {gt: $currentDate}}}
      sort: {fields: [fields___date], order: ASC}
      limit: 5
    ) {
      edges {
        node {
          ...PostOrEvent
        }
      }
    }

    upcomingEventsCount: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {gt: $currentDate}}}
    ) {
      totalCount
    }

    posts: allMarkdownRemark(
      filter: {fields: {category: {eq: "posts"}}}
      sort: {fields: [fields___date], order: DESC}
      limit: 3
    ) {
      edges {
        node {
          ...PostOrEvent
        }
      }
    }

    postsCount: allMarkdownRemark(filter: {fields: {category: {eq: "posts"}}}) {
      totalCount
    }

    contributors: allMarkdownRemark(
      filter: {fields: {category: {eq: "contributors"}}}
      limit: 3
    ) {
      edges {
        node {
          ...Contributor
        }
      }
    }

    contributorsCount: allMarkdownRemark(
      filter: {fields: {category: {eq: "contributors"}}}
    ) {
      totalCount
    }
  }
`

export default ({
  data: {
    events: {edges: events},
    upcomingEventsCount: {totalCount: upcomingEventsCount},
    posts: {edges: posts},
    postsCount: {totalCount: postsCount},
    contributors: {edges: contributors},
    contributorsCount: {totalCount: contributorsCount},
  },
}) => {
  return (
    <Page
      hero={{
        backgroundColor: ORANGE,
        heading: 'AWS Amplify Community',
        subheading: `Let's make cool things together!`,
      }}
      cta={<CTA />}
    >
      <Section
        heading='New Posts'
        action={{
          text: 'write a post',
          to: '/posts',
        }}
        more={{
          background: thumbnails.posts,
          heading: 'View All Posts',
          subheading: `${postsCount} posts & counting`,
          to: '/posts',
          top: <IoIosJournal size={50} />,
          bottom: <FaArrowCircleRight size={25} />,
        }}
        data={posts}
        mapping={mapNodeToProps}
        Template={Card.Post}
        columnCountByMediaQuery={{
          [mq.tablet]: 2,
          [mq.desktop]: 4,
        }}
      />

      <Section
        heading='Upcoming Events'
        action={{
          text: 'add your event',
          to: '/events',
        }}
        more={{
          background: thumbnails.events,
          heading: 'View All Events',
          subheading: `${upcomingEventsCount} upcoming events`,
          to: '/events',
          right: <FaArrowCircleRight size={25} />,
        }}
        data={events}
        mapping={mapNodeToProps}
        Template={Card.Event}
        columnCountByMediaQuery={{
          [mq.tablet]: 3,
        }}
      />

      <Section
        heading='Featured Community Members'
        action={{
          text: 'join our community',
          to: '/contributors',
        }}
        more={{
          background: thumbnails.contributors,
          heading: 'Browse The Community',
          subheading: `${contributorsCount} AWSome Amplifiers`,
          to: '/contributors',
          top: <IoMdPeople size={60} />,
          bottom: <FaArrowCircleRight size={25} />,
        }}
        data={contributors}
        mapping={mapNodeToProps}
        Template={Card.Contributor}
        columnCountByMediaQuery={{
          [mq.tablet]: 2,
          [mq.desktop]: 4,
        }}
      />
    </Page>
  )
}
