import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import {map, __, isEmpty} from 'ramda';
import {mapNodeToProps, extract} from '~/utilities';
import {MappedList, Layout, Card, Nav, Text, Meta} from '~/components';
import {LAPTOP_BREAKPOINT, DESKTOP_BREAKPOINT} from '~/constants';

export const pageQuery = graphql`
  query ($id: String!) {
    contributor: markdownRemark(fields: {id: {eq: $id}}) {
      ...Contributor
      frontmatter {
        avatar {
          ...AvatarLarge
        }
      }
    }

    posts: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "posts"}}
        frontmatter: {authorIds: {in: [$id]}}
      }
      sort: {fields: [fields___date], order: DESC}
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
          frontmatter {
            banner {
              ...Banner
            }
          }
        }
      }
    }

    events: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "events"}}
        frontmatter: {attendantIds: {in: [$id]}}
      }
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
  }
`;

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  > .contributor.card {
    margin: 3.5rem 1rem 0.75rem;
  }
`;

export default props => {
  const extractFromProps = extract.fromPath(__, props);
  const [posts, events, contributor] = map(extractFromProps, [
    ['data', 'posts', 'edges'],
    ['data', 'events', 'edges'],
    ['data', 'contributor'],
  ]);
  const {name} = contributor.frontmatter;

  const main = (
    <div css={styles}>
      <Card.Contributor
        {...mapNodeToProps(contributor)}
        disabled
        className='rounded'
      />

      {!isEmpty(posts) && (
        <MappedList
          heading={<Text h2 className='list-heading' children='Posts' />}
          data={posts}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Post.Expanded {...p} />}
          additionalItemProps={{
            className: 'three-dee actionable rounded',
            onContributorPage: true,
          }}
        />
      )}

      {!isEmpty(events) && (
        <MappedList
          heading={<Text h2 className='list-heading' children='Events' />}
          data={events}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Event {...p} />}
          additionalItemProps={{
            className: 'three-dee actionable rounded',
            onContributorPage: true,
          }}
          columnCountByBreakpoint={{
            [LAPTOP_BREAKPOINT]: 2,
            [DESKTOP_BREAKPOINT]: 3,
          }}
        />
      )}
    </div>
  );

  return (
    <>
      <Meta pageName={`${name}'s Profile`} />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
