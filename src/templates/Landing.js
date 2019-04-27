import {graphql} from 'gatsby';
import {Layout, Card, List, Nav, Hero, Button, Text} from '~/components';
import {
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  MONITOR_BREAKPOINT,
  ORANGE_PEEL_COLOR,
} from '~/constants';
import {mapNodeToProps, extract, track} from '~/utilities';
import {IoMdPeople, IoIosJournal} from 'react-icons/io';
import {map} from 'ramda';
import mapSrc from '~/assets/images/map.png';

export const pageQuery = graphql`
  query($currentDate: Date) {
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
`;

const heroProps = {
  heading: 'Join the Amplify Community',
  subheading: 'A place to share projects, events, articles and other resources',
  background: ORANGE_PEEL_COLOR,
  textColor: '#fff',
};

export default props => {
  track.internalPageView(props);

  const extractEdges = alias =>
    extract.fromPath(['data', alias, 'edges'], props);

  const [upcomingEventNodes, latestPostNodes, featuredContributorNodes] = map(
    extractEdges,
    ['upcomingEvents', 'latestPosts', 'featuredContributors'],
  );

  const extractCount = aliasPrefix =>
    extract.fromPath(['data', `${aliasPrefix}Count`, 'totalCount'], props);

  const [upcomingEventsCount, postsCount, contributorsCount] = map(
    extractCount,
    ['upcomingEvents', 'posts', 'events'],
  );

  const sections = [
    {
      heading: 'Upcoming Events',
      cta: {
        children: 'Add an Event',
        to: '/events/new',
      },
      nodes: upcomingEventNodes,
      Template: Card.Event,
      more: {
        Template: Card.ViewAll.Events,
        heading: 'View All Events',
        subheading: `${upcomingEventsCount} upcoming events`,
        to: '/events',
      },
      columnCountByBreakpoint: {
        [LAPTOP_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 3,
      },
    },
    {
      heading: 'Latest Posts',
      cta: {
        children: 'Add a Post',
        to: '/posts/new',
      },
      nodes: latestPostNodes,
      Template: Card.Post,
      more: {
        Template: Card.ViewAll.PostsOrContributors,
        graphic: <IoIosJournal size={50} />,
        heading: 'View All Posts',
        subheading: `${postsCount} posts and counting`,
        to: '/posts',
      },
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 4,
      },
      itemContainerClassName: 'on-landing-page rounded',
    },
    {
      heading: 'Featured Contributors',
      cta: {
        children: 'Join The Community',
        to: '/participate',
        hidePlus: true,
      },
      nodes: featuredContributorNodes,
      Template: Card.Contributor,
      more: {
        Template: Card.ViewAll.PostsOrContributors,
        graphic: <IoMdPeople size={60} />,
        heading: 'All Contributors',
        subheading: `See all ${contributorsCount} members of our community`,
        to: '/contributors',
      },
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 3,
        [MONITOR_BREAKPOINT]: 6,
      },
    },
  ];

  const main = map(
    ({
      heading,
      key,
      cta,
      nodes,
      Template,
      more,
      itemContainerClassName: className,
      ...rest
    }) => {
      const {Template: ViewAllCard, ...viewAllProps} = more;

      const items = [
        ...map(
          node => (
            <Template
              {...(className ? {className} : {})}
              {...mapNodeToProps(node)}
            />
          ),
          nodes,
        ),
        <ViewAllCard {...viewAllProps} />,
      ];

      return (
        <List
          key={heading}
          heading={<Text h2 className='list-heading' children={heading} />}
          cta={<Button.Contribute {...cta} />}
          {...{key, items}}
          {...rest}
        />
      );
    },
    sections,
  );

  return (
    <Layout.Basic header={[<Nav />, <Hero {...heroProps} />]} {...{main}} />
  );
};
