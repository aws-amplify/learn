import {graphql} from 'gatsby'
import {mapNodeToProps, extract, groupEdgesByMonth} from '~/utilities'
import {Layout, Card, MappedList, Nav} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'

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
            avatar {
              ...AvatarSmall
            }
          }
        }
      }
    }
  }
`

export default props => {
  const header = <Nav />
  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props)
  const edgesByMonth = groupEdgesByMonth(edges)
  const main = edgesByMonth.map(
    ([key, value]) =>
      value.length && (
        <MappedList
          heading={key}
          columnCountByBreakpoint={{
            [TABLET_BREAKPOINT]: 2,
          }}
          noItems={<p>no items to display</p>}
          data={value}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Event {...p} />}
        />
      ),
  )

  return <Layout.Basic {...{header, main}} />
}
