import {graphql} from 'gatsby'
import {extract} from '~/utilities'
import {MappedList, Layout, Nav, Card, Text} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'

export const pageQuery = graphql`
  {
    allSitePage(filter: {path: {glob: "/newsletters/**/*"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`

const extractProps = ({node: {path: to}}) => {
  // eslint-disable-next-line
  const [x, xx, year, week] = to.split('/')
  return {
    to,
    heading: `Week ${week} of ${year}`,
  }
}

const extractKey = ({node: {path}}) => path

export default props => {
  const edges = extract.fromPath(['data', 'allSitePage', 'edges'], props)
  console.log(edges)

  const main = (
    <MappedList
      heading={<Text listHeading>Weekly Newsletters</Text>}
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 2,
      }}
      noItems={<p>no items to display</p>}
      data={edges}
      mapping={extractProps}
      keyExtractor={extractKey}
      renderItem={p => <Card.Newsletter {...p} />}
    />
  )

  return <Layout.Basic header={<Nav />} {...{main}} />
}
