import {graphql} from 'gatsby';
import {MappedList, Layout, Card, Nav, Text, Meta} from '~/components';
import {mapNodeToProps, extract, track} from '~/utilities';
import {css} from '@emotion/core';
import {map, __, isEmpty} from 'ramda';

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
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  > .contributor.card {
    margin: 3.5rem 0 0.75rem;
  }
`;

export default props => {
  track.internalPageView(props);

  const extractFromProps = extract.fromPath(__, props);
  const [posts, contributor] = map(extractFromProps, [
    ['data', 'posts', 'edges'],
    ['data', 'contributor'],
  ]);
  const {name} = contributor.frontmatter;

  const main = (
    <div css={styles}>
      <Card.Contributor {...mapNodeToProps(contributor)} disabled />

      {!isEmpty(posts) && (
        <MappedList
          heading={<Text h2 className='list-heading' children='Posts' />}
          data={posts}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Post {...p} />}
          additionalProps={{className: 'rounded on-contributor-page'}}
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
