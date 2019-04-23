import {graphql} from 'gatsby'
import {
  extract,
  mapNodeToProps,
  createFilterContextValue,
  getFilterOptions,
} from '~/utilities'
import {filter as filterContext} from '~/contexts'
import {MappedList, Layout, Card, Filter, Nav} from '~/components'

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
`

const header = <Nav />

const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms']
const CATEGORIES_PATH = ['node', 'frontmatter', 'categories']

export default props => {
  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props)
  console.log(edges)

  const platformOptions = getFilterOptions(PLATFORMS_PATH, edges)
  const categoryOptions = getFilterOptions(CATEGORIES_PATH, edges)

  const value = createFilterContextValue(
    {
      key: 'platforms',
      path: PLATFORMS_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion || criterion.every(c => field.includes(c)),
    },
    {
      key: 'categories',
      path: CATEGORIES_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion || criterion.every(c => field.includes(c)),
    },
  )

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) => (
        <MappedList
          noItems={<p>no items to display</p>}
          data={edges}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderCondition={meetsCriteria}
          renderItem={p => <Card.Post {...p} />}
        />
      )}
    </filterContext.Consumer>
  )

  const menu = (
    <Filter
      filters={[
        {key: 'platforms', options: platformOptions},
        {key: 'categories', options: categoryOptions},
      ]}
    />
  )

  return (
    <filterContext.Provider {...{value}}>
      <Layout.SideMenu {...{header, menu, main}} />
    </filterContext.Provider>
  )
}
