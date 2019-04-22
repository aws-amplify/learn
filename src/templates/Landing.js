import {graphql} from 'gatsby'
import {Layout, Card, List, Nav, Hero, Button} from '~/components'
import {
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  LIGHT_BLUE,
  ORANGE,
} from '~/constants'
import {mapNodeToProps, extract} from '~/utilities'
import {FaArrowCircleRight} from 'react-icons/fa'
import {IoMdPeople, IoIosJournal} from 'react-icons/io'
import {css} from '@emotion/core'
import logoLightURI from '~/assets/images/logo-light.svg'

export const pageQuery = graphql`
  query pageQuery($currentDate: Date) {
    upcomingEvents: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {gt: $currentDate}}}
      sort: {fields: [fields___date], order: ASC}
      limit: 5
    ) {
      edges {
        node {
          ...Event
          frontmatter {
            avatar {
              ...AvatarSmall
            }
          }
        }
      }
    }

    upcomingEventsCount: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {gt: $currentDate}}}
    ) {
      totalCount
    }

    latestPosts: allMarkdownRemark(
      filter: {fields: {category: {eq: "posts"}}}
      sort: {fields: [fields___date], order: DESC}
      limit: 3
    ) {
      edges {
        node {
          ...Post
          frontmatter {
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

    postsCount: allMarkdownRemark(filter: {fields: {category: {eq: "posts"}}}) {
      totalCount
    }

    featuredContributors: allMarkdownRemark(
      filter: {fields: {category: {eq: "contributors"}}}
      limit: 5
    ) {
      edges {
        node {
          ...Contributor
          frontmatter {
            avatar {
              ...AvatarLarge
            }
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

const heroProps = {
  heading: <h1>AWS Amplify Community</h1>,
  subheading: (
    <h3>
      A place to share projects, events, articles and other Amplify-related
      resources
    </h3>
  ),
  cta: <Button.Medium>Join the community</Button.Medium>,
  backgroundColor: ORANGE,
  textColor: '#fff',
}

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

  const [upcomingEventNodes, latestPostNodes, featuredContributorNodes] = [
    'upcomingEvents',
    'latestPosts',
    'featuredContributors',
  ].map(extractEdges)

  const extractCount = aliasPrefix =>
    extract.fromPath(['data', `${aliasPrefix}Count`, 'totalCount'], props)

  const [upcomingEventsCount, postsCount, contributorsCount] = [
    'upcomingEvents',
    'posts',
    'events',
  ].map(extractCount)

  const containerStyles = css`
    * {
      color: ${ORANGE};
    }

    h5 {
      color: #868686;
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `

  const sections = [
    {
      key: 'upcomingEventsSection',
      heading: 'Upcoming Events',
      subheading: `Meetups & hackathons near you`,
      cta: <Button.Medium>submit an event</Button.Medium>,
      nodes: upcomingEventNodes,
      Template: Card.Event,
      more: {
        containerStyles: css`
          ${containerStyles}
          text-align: left;
          .right {
            padding-right: 16px;
          }
        `,
        heading: 'View All Events',
        subheading: `${upcomingEventsCount} upcoming events`,
        to: '/events',
        left: false,
        right: <FaArrowCircleRight size={24} />,
      },
      columnCountByBreakpoint: {
        [DESKTOP_BREAKPOINT]: 3,
      },
    },
    {
      key: 'latestPostsSection',
      heading: 'Latest Posts',
      subheading: `Writing about Amplify`,
      cta: <Button.Medium>submit a post</Button.Medium>,
      nodes: latestPostNodes,
      Template: Card.Post,
      more: {
        containerStyles,
        heading: 'View All Posts',
        subheading: `${postsCount} posts and counting`,
        to: '/posts',
        top: <IoIosJournal size={50} />,
        bottom: <FaArrowCircleRight size={24} />,
      },
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 4,
      },
      cardContainerStyles: {backgroundColor: LIGHT_BLUE},
    },
    {
      key: 'featuredContributorsSection',
      heading: 'Featured Contributors',
      subheading: `A big thanks to these community members`,
      cta: <Button.Medium>become a community member</Button.Medium>,
      nodes: featuredContributorNodes,
      Template: Card.Contributor,
      more: {
        containerStyles,
        heading: 'All Contributors',
        subheading: `See all ${contributorsCount} members of our community`,
        to: '/contributors',
        top: <IoMdPeople size={60} />,
        bottom: <FaArrowCircleRight size={24} />,
      },
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 3,
        [DESKTOP_BREAKPOINT]: 6,
      },
    },
  ]

  const main = sections.map(
    ({
      heading,
      subheading,
      key,
      nodes,
      Template,
      more,
      cardContainerStyles,
      ...rest
    }) => {
      const items = [
        ...nodes.map(node => {
          return <Template {...mapNodeToProps(node)} />
        }),
        <Card.CTA {...more} />,
      ]

      return (
        <List
          heading={<h3>{heading}</h3>}
          subheading={<h4>{subheading}</h4>}
          {...{key, items}}
          {...rest}
        />
      )
    },
  )

  return (
    <Layout.Basic
      header={[<Nav {...navProps} />, <Hero {...heroProps} />]}
      {...{main}}
    />
  )
}
