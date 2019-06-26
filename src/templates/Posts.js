import {graphql} from 'gatsby';
import {
  extract,
  mapNodeToProps,
  createFilterContextValue,
  getFilterOptions,
  track,
} from '~/utilities';
import {filter as filterContext} from '~/contexts';
import {
  MappedList,
  Layout,
  Card,
  Filter,
  Nav,
  Text,
  Button,
  Meta,
  FeaturedPosts,
} from '~/components';
import {all, includes, isEmpty, any, sort, map} from 'ramda';
import {useEffect} from 'react';

export const pageQuery = graphql`
  {
    featured: markdownRemark(fields: {id: {eq: "featured"}}) {
      frontmatter {
        posts {
          i
          post {
            frontmatter {
              banner {
                ...Banner
              }
              title
              href
            }
            fields {
              authors {
                fields {
                  slug
                }
                frontmatter {
                  name
                  avatar {
                    ...AvatarSmall
                  }
                }
              }
            }
          }
        }
      }
    }

    posts: allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "posts"}}}
    ) {
      edges {
        node {
          ...Post
          frontmatter {
            platforms
            categories
            banner {
              ...Banner
            }
          }
          fields {
            authors {
              frontmatter {
                name
                github
                avatar {
                  ...AvatarMedium
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms'];
const CATEGORIES_PATH = ['node', 'frontmatter', 'categories'];

export default props => {
  useEffect(() => track.internalPageView(props), []);
  const featuredData = extract.fromPath(
    ['data', 'featured', 'frontmatter', 'posts'],
    props,
  );
  const sortedFeatured = sort((a, b) => a.i - b.i, featuredData);
  const featured = map(({post}) => post, sortedFeatured);
  const edges = extract.fromPath(['data', 'posts', 'edges'], props);

  const platformOptions = getFilterOptions(PLATFORMS_PATH, edges);
  const categoryOptions = getFilterOptions(CATEGORIES_PATH, edges);

  const value = createFilterContextValue(
    {
      key: 'platforms',
      path: PLATFORMS_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion ||
        isEmpty(criterion) ||
        any(c => field && includes(c, field), criterion),
    },
    {
      key: 'categories',
      path: CATEGORIES_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion || all(c => field && includes(c, field), criterion),
    },
  );

  const header = (
    <>
      <Nav /> 
      {' '}
      <FeaturedPosts items={featured} />
    </>
  );

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) => {
        const heading = (
          <Text h2 className='list-heading' children='Latest Posts' />
        );

        const cta = (
          <Button.Contribute
            href='https://github.com/aws-amplify/community/tree/master/content/posts/README.md'
            children='Add a Post'
          />
        );

        return (
          <MappedList
            {...{heading, cta}}
            data={edges}
            mapping={mapNodeToProps}
            keyExtractor={extract.keyFromNode}
            renderCondition={meetsCriteria}
            renderItem={p => <Card.Post.Expanded {...p} />}
            additionalItemProps={{
              className: 'three-dee actionable right-rounded',
            }}
          />
        );
      }}
    </filterContext.Consumer>
  );

  const menu = (
    <Filter
      filters={[
        {
          type: 'CHECKBOX_GROUP',
          key: 'platforms',
          name: 'Platforms',
          options: platformOptions,
        },
        {
          type: 'CHECKBOX_GROUP',
          key: 'categories',
          name: 'Categories',
          options: categoryOptions,
        },
      ]}
    />
  );

  return (
    <>
      <Meta pageName='Posts' />
      <filterContext.Provider {...{value}}>
        <Layout.SideMenu {...{header, menu, main}} />
      </filterContext.Provider>
    </>
  );
};
