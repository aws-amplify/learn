import {graphql} from 'gatsby'
import {
  mapNodeToProps,
  extract,
  groupEdgesByMonth,
  createFilterContextValue,
  getFilterOptions,
  track,
} from '~/utilities'
import {Layout, Card, MappedList, Nav, Filter, Text, Button} from '~/components'
import {
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  ORANGE_PEEL_COLOR,
} from '~/constants'
import {filter as filterContext} from '~/contexts'
import {
  values,
  mapObjIndexed,
  map,
  length,
  filter,
  identity,
  head,
  keys,
} from 'ramda'
import {css} from '@emotion/core'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: ASC}
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
  const {href} = props.location
  track({name: 'internalPageView', href})
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
  const firstKey = head(keys(edgesByMonth))

  const main = (
    <filterContext.Consumer>
      {({meetsCriteria}) =>
        values(
          mapObjIndexed((group, key) => {
            return (
              length(filter(identity, map(meetsCriteria, group))) > 0 && (
                <MappedList
                  key={key}
                  cta={
                    key === firstKey && (
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
                        Add an Event
                      </Button.Basic>
                    )
                  }
                  heading={(
                    <Text h2 className='list-heading'>
                      {key}
                    </Text>
)}
                  columnCountByBreakpoint={{
                    [TABLET_BREAKPOINT]: 2,
                    [DESKTOP_BREAKPOINT]: 3,
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
