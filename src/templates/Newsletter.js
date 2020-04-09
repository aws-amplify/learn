import {graphql} from 'gatsby';
import {Layout, Card, List, Nav, Button, Text, Meta} from '~/components';
import {
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  ORANGE_PEEL_COLOR,
} from '~/constants';
import {mapNodeToProps, extract, track} from '~/utilities';
import {css} from '@emotion/core';
import logoLightURI from '~/assets/images/logo-light.svg';
import {map} from 'ramda';
import moment from 'moment';
import {useEffect, useMemo} from 'react';

moment.suppressDeprecationWarnings = true;

export const pageQuery = graphql`
  query(
    $current: String!
    $events: [String!]!
    $posts: [String!]!
    $newsletterInjections: [String!]!
  ) {
    context: sitePage(path: {eq: $current}) {
      context {
        week
        year
        previous
        next
        startDate
        endDate
      }
    }

    upcomingEvents: allMarkdownRemark(
      filter: {id: {in: $events}}
      sort: {fields: [fields___date], order: ASC}
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
      filter: {id: {in: $posts}}
      sort: {fields: [fields___date], order: ASC}
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

    newsletters: allMarkdownRemark(filter: {id: {in: $newsletterInjections}}) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

const headingStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;

  > h2 {
    font-size: 2rem;
    line-height: 3.375rem;
    font-weight: 400;
  }

  > h4 {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 300;
    padding-top: 0.875rem;
    padding-bottom: 1.375rem;
  }

  > p {
    font-size: 1.125rem;
    font-weight: 1.6875rem;
    font-weight: 200;
    padding-bottom: 0.25rem;
  }
`;

const buttonStyles = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;

  > .button {
    background-color: #fff;
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5rem;
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
  useEffect(() => track.internalPageView(props), []);

  const extractEdges = alias =>
    extract.fromPath(['data', alias, 'edges'], props);

  const {
    week,
    previous,
    next,
    startDate: stringifiedStartDate,
    endDate: stringifiedEndDate,
  } = extract.fromPath(['data', 'context', 'context'], props);

  const [startDate, endDate] = useMemo(
    () =>
      map(e => moment(e).format('MMMM Do'), [
        stringifiedStartDate,
        stringifiedEndDate,
      ]),
    [stringifiedStartDate, stringifiedEndDate],
  );

  const [upcomingEventNodes, latestPostNodes] = map(extractEdges, [
    'upcomingEvents',
    'latestPosts',
  ]);

  const sections = [
    {
      visitorCue: 'events',
      key: 'upcomingEventsSection',
      heading: 'Upcoming Events',
      cta: {
        children: 'Host an Event',
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
      visitorCue: 'posts',
      key: 'latestPostsSection',
      heading: 'Latest Posts',
      cta: {
        children: 'Add a Post',
        to: '/posts/new',
      },
      nodes: latestPostNodes,
      Template: Card.Post.Condensed,
      columnCountByBreakpoint: {
        [TABLET_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 4,
      },
    },
  ];

  const sharedProps = {
    className: 'three-dee rounded actionable',
    onNewsletter: true,
  };

  const dateRange = `${startDate} to ${endDate}`;

  const main = [
    <div css={headingStyles}>
      <Text h2 children={`Week ${week}`} />
      <Text h4 children={`${startDate} to ${endDate}`} />
      <Text
        p
        children={`Welcome to Week ${week} of the AWS Amplify newsletter - a weekly roundup of the articles, podcasts, and videos that are relevant to developers who utilize the AWS platform for building great mobile and modern web applications.`}
      />
    </div>,

    ...map(
      ({heading, key, cta, nodes, Template, more, visitorCue, ...rest}) => {
        if (nodes.length) {
          const items = map(
            node => (
              <Template
                {...(key === 'upcomingEventsSection'
                  ? mapNodeToProps(node, 'href')
                  : mapNodeToProps(node))}
                {...sharedProps}
              />
            ),
            nodes,
          );

          return (
            <>
              <div data-date-range={dateRange} />
              <List
                heading={
                  <Text h2 className='list-heading' children={heading} />
                }
                {...{key, items, visitorCue}}
                {...rest}
              />
            </>
          );
        }

        return null;
      },
      sections,
    ),

    <div css={buttonStyles}>
      {map(
        ({key, condition, ...buttonprops}) =>
          condition && (
            <Button.Basic
              {...{key}}
              {...buttonprops}
              {...sharedProps}
              size='medium'
            />
          ),
        [
          {
            key: 'a',
            condition: previous,
            to: previous,
            children: 'Previous',
          },
          {
            key: 'b',
            condition: true,
            to: '/newsletters',
            children: 'View All',
          },
          {
            key: 'c',
            condition: next,
            to: next,
            children: 'Next',
          },
        ],
      )}
    </div>,
  ];

  return (
    <>
      <Meta pageName={`Week ${week} of Newsletter`} />
      <Layout.Basic header={<Nav {...navProps} />} {...{main}} />
    </>
  );
};
