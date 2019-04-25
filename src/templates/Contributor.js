import {graphql} from 'gatsby'
import {MappedList, Layout, Card, Nav, Text} from '~/components'
import {mapNodeToProps, extract} from '~/utilities'
import {css} from '@emotion/core'
import {TABLET_BREAKPOINT, DESKTOP_BREAKPOINT} from '~/constants'

export const pageQuery = graphql`
  query($id: String!) {
    contributor: markdownRemark(fields: {id: {eq: $id}}) {
      ...Contributor
      frontmatter {
        avatar {
          ...AvatarLarge
        }
      }
    }

    posts: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "posts"}}
        frontmatter: {authorIds: {in: [$id]}}
      }
    ) {
      edges {
        node {
          ...Post
          fields {
            authors {
              frontmatter {
                avatar {
                  ...AvatarMedium
                }
              }
            }
          }
        }
      }
    }

    events: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "events"}}
        frontmatter: {attendantIds: {in: [$id]}}
      }
    ) {
      edges {
        node {
          ...Event
          frontmatter {
            avatar {
              ...AvatarMedium
            }
          }
        }
      }
    }
  }
`

const styles = css`
  width: 100%;
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 16px;
`

export default ({
  data: {
    contributor,
    posts: {edges: posts},
    events: {edges: events},
  },
}) => {
  console.log(posts, events)
  const props = mapNodeToProps(contributor)
  const main = (
    <>
      <div css={styles}>
        <Card.Contributor {...props} disabled />
      </div>

      {!!events.length && (
        <MappedList
          heading={<Text h2 className='list-heading'>Events</Text>}
          data={events}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Event {...p} />}
          columnCountByBreakpoint={{
            [DESKTOP_BREAKPOINT]: 3,
          }}
        />
      )}

      {!!posts.length && (
        <MappedList
          heading={<Text h2 className='list-heading'>Posts</Text>}
          data={posts}
          mapping={mapNodeToProps}
          keyExtractor={extract.keyFromNode}
          renderItem={p => <Card.Post {...p} />}
          columnCountByBreakpoint={{
            [DESKTOP_BREAKPOINT]: 2,
          }}
        />
      )}
    </>
  )

  return <Layout.Basic header={<Nav />} {...{main}} />
}
