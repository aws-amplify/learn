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
} from '~/components';
import {all, includes} from 'ramda';

export const pageQuery = graphql`
  {
    allMarkdownRemark(
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

const header = <Nav />;

const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms'];
const CATEGORIES_PATH = ['node', 'frontmatter', 'categories'];

const meetsCriterion = (field, criterion) =>
  !criterion || all(c => field && includes(c, field), criterion);

export default props => {
  track.internalPageView(props);

  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props);

  const platformOptions = getFilterOptions(PLATFORMS_PATH, edges);
  const categoryOptions = getFilterOptions(CATEGORIES_PATH, edges);

  const value = createFilterContextValue(
    {
      key: 'platforms',
      path: PLATFORMS_PATH,
      meetsCriterion,
    },
    {
      key: 'categories',
      path: CATEGORIES_PATH,
      meetsCriterion,
    },
  );

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) => (
        <MappedList
          heading={<Text h2 className='list-heading' children='Latest Posts' />}
          cta={(
            <Button.Contribute
              href='https://github.com/aws-amplify/community/tree/master/content/posts/README.md'
              children='Add a Post'
            />
)}
          noItems={<p>no items to display</p>}
          data={edges}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderCondition={meetsCriteria}
          renderItem={p => <Card.Post {...p} />}
          additionalProps={{className: 'on-posts-page right-rounded'}}
        />
      )}
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
    <filterContext.Provider {...{value}}>
      <Layout.SideMenu {...{header, menu, main}} />
    </filterContext.Provider>
  );
};
