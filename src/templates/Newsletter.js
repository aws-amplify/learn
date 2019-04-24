import {graphql} from 'gatsby'
import {Layout, Card, List, Nav, Button, Text} from '~/components'
import {
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  VIOLETTE,
  ORANGE,
} from '~/constants'
import {mapNodeToProps, extract} from '~/utilities'
import {css} from '@emotion/core'
import logoLightURI from '~/assets/images/logo-light.svg'
import {map} from 'ramda'

export const pageQuery = graphql`
  query($events: [Date!]!, $posts: [Date!]!, $newsletters: [Date!]!) {
    upcomingEvents: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {in: $events}}}
    ) {
      edges {
        node {
          ...Event
          frontmatter {
            avatar {
              ...AvatarMedium
            }
          }
        }
      }
    }

    latestPosts: allMarkdownRemark(
      filter: {fields: {category: {eq: "posts"}, date: {in: $posts}}}
    ) {
      edges {
        node {
          ...Post
          fields {
            authors {
              frontmatter {
                avatar {
                  ...AvatarMedium
                }
              }
            }
          }
        }
      }
    }

    newsletters: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "newsletters"}, date: {in: $newsletters}}
      }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`

const navProps = {
  beforeScroll: {
    backgroundColor: ORANGE,
    textColor: '#fff',
    logoSrc: logoLightURI,
  },
}

export default props => {
  const extractEdges = alias =>
    extract.fromPath(['data', alias, 'edges'], props)

  const [upcomingEventNodes, latestPostNodes] = map(extractEdges, [
    'upcomingEvents',
    'latestPosts',
  ])

  const sections = [
    {
      key: 'upcomingEventsSection',
      heading: 'Upcoming Events',
      cta: {
        children: 'Add an Event',
        to: '/events/new',
      },
      nodes: upcomingEventNodes,
      Template: Card.Event,
      columnCountByBreakpoint: {
        [LAPTOP_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 3,
      },
    },
    {
      key: 'latestPostsSection',
      heading: 'Latest Posts',
      cta: {
        children: 'Add a Post',
        to: '/posts/new',
      },
      nodes: latestPostNodes,
      Template: Card.Post,
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 4,
      },
      cardContainerStyles: css`
        background-color: ${VIOLETTE};
        * {
          color: #fff;
        }
      `,
    },
  ]

  const main = map(
    ({
      heading,
      key,
      cta,
      nodes,
      Template,
      more,
      cardContainerStyles,
      ...rest
    }) => {
      const items = map(
        node => (
          <Template
            containerStyles={cardContainerStyles}
            {...mapNodeToProps(node)}
          />
        ),
        nodes,
      )

      return (
        <List
          heading={<Text listHeading>{heading}</Text>}
          {...{key, items}}
          {...rest}
        />
      )
    },
    sections,
  )

  return <Layout.Basic header={<Nav {...navProps} />} {...{main}} />
}
