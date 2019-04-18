import {Link, graphql} from 'gatsby'
import {Page, Card, Section} from '~/components'
import * as thumbnails from '~/assets/images/view-more'
import {ORANGE, mq} from '~/constants'
import {mapNodeToProps} from '~/utilities'

export const pageQuery = graphql`
  fragment Banner on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 309) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment Avatar on File {
    childImageSharp {
      fixed(width: 40, height: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment PostOrEvent on MarkdownRemark {
    fields {
      key
      slug
      date(formatString: "MMMM D")
    }
    frontmatter {
      href
      title
      description
      state
      city
      location
      banner {
        ...Banner
      }
      avatar {
        ...Avatar
      }
      authors {
        fields {
          slug
        }
        frontmatter {
          name
          avatar {
            ...Avatar
          }
          github
          twitter
        }
      }
      organizers {
        fields {
          slug
        }
        frontmatter {
          name
          avatar {
            ...Avatar
          }
          github
          twitter
        }
      }
    }
  }

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
      limit: 7
    ) {
      edges {
        node {
          fields {
            key
            slug
          }
          frontmatter {
            avatar {
              ...Avatar
            }
            name
            bio
            github
            twitter
            website
          }
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
        cta: (
          <Link className='actionable tile button' to='/participate'>
            share your project, writing, event, misc.
          </Link>
        ),
      }}
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
        }}
        data={events}
        mapping={mapNodeToProps}
        Template={Card.Event}
        columnCountByMediaQuery={{
          [mq.tablet]: 3,
          [mq.monitor]: 6,
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
        }}
        data={contributors}
        mapping={mapNodeToProps}
        Template={Card.Contributor}
        columnCountByMediaQuery={{
          [mq.tablet]: 2,
          [mq.desktop]: 4,
          [mq.monitor]: 8,
        }}
      />
    </Page>
  )
}
