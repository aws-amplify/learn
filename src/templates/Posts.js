import {graphql} from 'gatsby'
import {
  extract,
  mapNodeToProps,
  createFilterContextValue,
  getFilterOptions,
} from '~/utilities'
import {filter as filterContext} from '~/contexts'
import {MappedList, Layout, Card, Filter, Nav, Text, Button} from '~/components'
import {all, includes} from 'ramda'
import {ORANGE_PEEL_COLOR} from '~/constants'
import {css} from '@emotion/core'

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
`

const header = <Nav />

const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms']
const CATEGORIES_PATH = ['node', 'frontmatter', 'categories']

const meetsCriterion = (field, criterion) =>
  !criterion || all(c => field && includes(c, field), criterion)

export default props => {
  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props)

  const platformOptions = getFilterOptions(PLATFORMS_PATH, edges)
  const categoryOptions = getFilterOptions(CATEGORIES_PATH, edges)

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
  )

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) => (
        <MappedList
          heading={(
            <Text h2 className='list-heading'>
              Latest Posts
            </Text>
)}
          cta={(
            <Button.Basic
              className='three-dee'
              styles={css`
                border-radius: 20px;
                background-color: ${ORANGE_PEEL_COLOR};
                padding-right: 16px;
                padding-left: 16px;
                > * {
                  color: #fff;
                }
              `}
              href='https://aws-amplify.github.io'
              landingListCta
            >
              Add a Post
            </Button.Basic>
)}
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
