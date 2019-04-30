import {graphql} from 'gatsby';
import {Layout, Card, List, Nav, Button, Text} from '~/components';
import {
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  KASHMIR_BLUE_COLOR,
  ORANGE_PEEL_COLOR,
} from '~/constants';
import {mapNodeToProps, extract, track} from '~/utilities';
import {css} from '@emotion/core';
import logoLightURI from '~/assets/images/logo-light.svg';
import {map} from 'ramda';

export const pageQuery = graphql`
  query(
    $current: String!
    $events: [Date!]!
    $posts: [Date!]!
    $newsletters: [Date!]!
  ) {
    context: sitePage(path: {eq: $current}) {
      context {
        week
        year
        previous
        next
        dateRange {
          startDate(formatString: "MMM Do")
          endDate(formatString: "MMM Do")
        }
      }
    }

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
`;

const navProps = {
  beforeScroll: {
    backgroundColor: ORANGE_PEEL_COLOR,
    textColor: '#fff',
    logoSrc: logoLightURI,
  },
};

export default props => {
  track.internalPageView(props);

  const extractEdges = alias =>
    extract.fromPath(['data', alias, 'edges'], props);

  const {
    week,
    year,
    previous,
    next,
    dateRange: {startDate, endDate},
  } = extract.fromPath(['data', 'context', 'context'], props);

  const [upcomingEventNodes, latestPostNodes] = map(extractEdges, [
    'upcomingEvents',
    'latestPosts',
  ]);

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
        background-color: ${KASHMIR_BLUE_COLOR};
        * {
          color: #fff;
        }
      `,
    },
  ];

  latestPostNodes.forEach(n => console.log(n.node.fields.date));

  const main = [
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 16px 16px 0px 16px;

        .page-subheading {
          padding-top: 14px;
          padding-bottom: 22px;
        }

        .paragraph-large {
          padding-bottom: 4px;
        }
      `}
    >
      <Text h2 className='page-heading' children={`Week ${week} of ${year}`} />
      <Text
        h4
        className='page-subheading'
        children={`${startDate} to ${endDate}`}
      />
      <Text
        p
        className='paragraph-large'
        children={`Welcome to week ${week} of the AWS Amplify newsletter - a weekly roundup of the articles, podcasts, and videos that are relevant to developers who utilize the AWS platform for building great mobile and modern web applications.`}
      />
    </div>,
    ...map(
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
        if (nodes.length) {
          const items = map(
            node => (
              <Template
                containerStyles={cardContainerStyles}
                {...mapNodeToProps(node)}
                className='rounded'
              />
            ),
            nodes,
          );

          return (
            <List
              heading={<Text h2 className='list-heading' children={heading} />}
              {...{key, items}}
              {...rest}
            />
          );
        }

        return null;
      },
      sections,
    ),
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 16px 16px 0px 16px;

        > .button {
          background-color: #fff;
          margin: 8px;
        }
      `}
    >
      {previous && (
        <Button.Basic
          className='three-dee actionable rounded'
          newsletterNextPrevious
          size='medium'
          to={previous}
        >
          Previous
        </Button.Basic>
      )}

      <Button.Basic
        className='three-dee actionable rounded'
        newsletterNextPrevious
        size='medium'
        to='/newsletters'
      >
        View All
      </Button.Basic>

      {next && (
        <Button.Basic
          className='three-dee actionable rounded'
          newsletterNextPrevious
          size='medium'
          to={next}
        >
          Next
        </Button.Basic>
      )}
    </div>,
  ];

  return <Layout.Basic header={<Nav {...navProps} />} {...{main}} />;
};
