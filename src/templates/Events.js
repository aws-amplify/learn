import {graphql} from 'gatsby'
import {
  mapNodeToProps,
  extract,
  groupEdgesByMonth,
  createFilterContextValue,
  getFilterOptions,
} from '~/utilities'
import {Layout, Card, MappedList, Nav, Filter, Text} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'
import {filter as filterContext} from '~/contexts'
import {values, mapObjIndexed} from 'ramda'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "events"}}}
    ) {
      edges {
        node {
          ...Event
          frontmatter {
            platforms
            avatar {
              ...AvatarSmall
            }
          }
        }
      }
    }
  }
`

const header = <Nav />
const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms']

export default props => {
  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props)

  const platformOptions = getFilterOptions(PLATFORMS_PATH, edges)

  const value = createFilterContextValue({
    key: 'platforms',
    path: PLATFORMS_PATH,
    meetsCriterion: (field, criterion) =>
      !criterion || criterion.every(c => field.includes(c)),
  })

  const menu = (
    <Filter filters={[{key: 'platforms', options: platformOptions}]} />
  )

  const edgesByMonth = groupEdgesByMonth(edges)

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) =>
        values(
          mapObjIndexed((group, key) => {
            console.log(group, key)

            return (
              group.length && (
                <MappedList
                  key={key}
                  heading={<Text listHeading>{key}</Text>}
                  columnCountByBreakpoint={{
                    [TABLET_BREAKPOINT]: 2,
                  }}
                  noItems={<p>no items to display</p>}
                  data={group}
                  mapping={mapNodeToProps}
                  keyExtractor={extract.keyFromNode}
                  renderItem={p => <Card.Event {...p} />}
                  renderCondition={meetsCriteria}
                />
              )
            )
          }, edgesByMonth),
        )
      }
    </filterContext.Consumer>
  )

  return (
    <filterContext.Provider {...{value}}>
      <Layout.SideMenu {...{header, menu, main}} />
    </filterContext.Provider>
  )
}
