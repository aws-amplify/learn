import {graphql} from 'gatsby'
import {MappedList, Layout, Nav, Card, Text} from '~/components'
import {TABLET_BREAKPOINT} from '~/constants'
import {identity} from 'ramda'

export const pageQuery = graphql`
  {
    sitePage(path: {eq: "/newsletters"}) {
      context {
        sortedSlugs
      }
    }
  }
`

const extractProps = slug => {
  // eslint-disable-next-line
  const [x, year, week] = slug.split('/')
  return {
    to: slug,
    heading: `Week ${week} of ${year}`,
  }
}

export default ({
  data: {
    sitePage: {
      context: {sortedSlugs},
    },
  },
}) => {
  const main = (
    <MappedList
      heading={(
        <Text h2 className='list-heading'>
          Weekly Newsletters
        </Text>
)}
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 3,
      }}
      noItems={<p>no items to display</p>}
      data={sortedSlugs}
      mapping={extractProps}
      keyExtractor={identity}
      renderItem={p => <Card.Newsletter {...p} />}
    />
  )

  return <Layout.Basic header={<Nav />} {...{main}} />
}
