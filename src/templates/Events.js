import {graphql} from 'gatsby'
import {
  mapNodeToProps,
  extract,
  groupEdgesByMonth,
  createFilterContextValue,
  getFilterOptions,
} from '~/utilities'
import {Layout, Card, MappedList, Nav, Filter} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'
import {filter as filterContext} from '~/contexts'
import {map} from 'ramda'

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

  return (
    <filterContext.Provider {...{value}}>
      <filterContext.Consumer>
        {({meetsCriteria}) => (
          <Layout.SideMenu
            main={map(([groupMonth, groupData]) => {
              console.log(groupMonth, groupData)

              return (
                groupData.length && (
                  <MappedList
                    key={groupMonth}
                    heading={groupMonth}
                    columnCountByBreakpoint={{
                      [TABLET_BREAKPOINT]: 2,
                    }}
                    noItems={<p>no items to display</p>}
                    data={groupData}
                    mapping={mapNodeToProps}
                    keyExtractor={extract.keyFromNode}
                    renderItem={p => <Card.Event {...p} />}
                    renderCondition={meetsCriteria}
                  />
                )
              )
            }, edgesByMonth)}
            {...{header, menu}}
          />
        )}
      </filterContext.Consumer>
    </filterContext.Provider>
  )
}
