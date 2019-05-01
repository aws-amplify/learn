import {graphql} from 'gatsby';
import {
  Layout,
  Card,
  List,
  Nav,
  Hero,
  Button,
  Text,
  Subscribe,
  Meta,
} from '~/components';
import {
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  ORANGE_PEEL_COLOR,
} from '~/constants';
import {mapNodeToProps, extract, track} from '~/utilities';
import {IoMdPeople, IoIosJournal} from 'react-icons/io';
import {map, length, keys, dropLast} from 'ramda';
import heroOverlaySrc from '~/assets/images/map.svg';
import {useMemo} from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

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
  heading: 'Welcome to the Amplify Community',
  subheading: 'A place to share projects, events, articles and other resources',
  background: ORANGE_PEEL_COLOR,
  textColor: '#fff',
  cta: <Subscribe />,
  overlay: heroOverlaySrc,
};

export default props => {
  track.internalPageView(props);
  const {width: windowWidth} = useWindowSize();

  const extractEdges = alias =>
    extract.fromPath(['data', alias, 'edges'], props);

  const [upcomingEventNodes, latestPostNodes, allContributorNodes] = map(
    extractEdges,
    ['upcomingEvents', 'latestPosts', 'featuredContributors'],
  );

  const featuredContributorNodes = useMemo(() => {
    let indicesLength = 0;
    const indices = {};
    while (indicesLength < 5) {
      const index = Math.floor(Math.random() * length(allContributorNodes));
      if (!indices[index]) {
        indices[index] = true;
        indicesLength += 1;
      }
    }
    return keys(indices).map(i => allContributorNodes[i]);
  }, []);

  const featuredContributorNodesByScreen =
    windowWidth > DESKTOP_BREAKPOINT
      ? dropLast(1, featuredContributorNodes)
      : featuredContributorNodes;

  const extractCount = aliasPrefix =>
    extract.fromPath(['data', `${aliasPrefix}Count`, 'totalCount'], props);

  const [upcomingEventsCount, postsCount, contributorsCount] = map(
    extractCount,
    ['upcomingEvents', 'posts', 'contributors'],
  );

  const sections = [
    {
      heading: 'Upcoming Events',
      cta: {
        children: 'Host an Event',
        href:
          'https://github.com/aws-amplify/community/tree/master/content/events/README.md',
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
        href:
          'https://github.com/aws-amplify/community/tree/master/content/posts/README.md',
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
      additionalProps: {limitDescriptionLength: true},
    },
    {
      heading: 'Featured Contributors',
      cta: {
        children: 'Join The Community',
        href:
          'https://github.com/aws-amplify/community/tree/master/content/contributors/README.md',
        hidePlus: true,
      },
      nodes: featuredContributorNodesByScreen,
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
        [DESKTOP_BREAKPOINT]: 5,
      },
      itemContainerClassName: 'actionable',
      additionalProps: {limitBioLength: true},
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
      additionalProps,
      ...rest
    }) => {
      const {Template: ViewAllCard, ...viewAllProps} = more;

      const items = [
        ...map(
          node => (
            <Template
              {...(className ? {className} : {})}
              {...mapNodeToProps(node)}
              {...additionalProps || {}}
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
    <>
      <Meta pageName='Welcome' />
      <Layout.Basic header={[<Nav />, <Hero {...heroProps} />]} {...{main}} />
    </>
  );
};
