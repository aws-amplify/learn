import {graphql} from 'gatsby';
import {MappedList, Layout, Card, Nav, Text} from '~/components';
import {mapNodeToProps, extract, track} from '~/utilities';
import {css} from '@emotion/core';

export const pageQuery = graphql`
  query($id: String!) {
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
  width: 100%;
  padding: 0px 16px;
`;

export default ({
  data: {
    contributor,
    posts: {edges: posts},
  },
  ...rest
}) => {
  track.internalPageView(rest);

  const props = mapNodeToProps(contributor);
  const main = (
    <div
      css={css`
        max-width: 1000px;
        margin: 0px auto;
      `}
    >
      <div css={styles}>
        <Card.Contributor {...props} disabled />
      </div>

      {!!posts.length && (
        <MappedList
          heading={<Text h2 className='list-heading' children='Posts' />}
          data={posts}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Post {...p} />}
        />
      )}
    </div>
  );

  return <Layout.Basic header={<Nav />} {...{main}} />;
};
