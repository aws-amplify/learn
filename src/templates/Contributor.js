import {graphql} from 'gatsby'
import {Layout, Card, Nav} from '~/components'
import {mapNodeToProps} from '~/utilities'
import {css} from '@emotion/core'

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
  }
`

// events: allMarkdownRemark(
//   filter: {
//     fields: {category: {eq: "events"}}
//     frontmatter: {organizers: {frontmatter: {id: {in: $id}}}}
//   }
// ) {
//   edges {
//     node {
//       ...Event
//     }
//   }
// }

const styles = css`
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  padding: 0px 16px;
`

export default ({
  data: {
    contributor,
    // posts: {edges: posts},
    // events: {edges: events},
  },
}) => {
  const props = mapNodeToProps(contributor)
  const main = (
    <div css={styles}>
      <Card.Contributor {...props} disabled />
    </div>
  )

  return <Layout.Basic header={<Nav />} {...{main}} />
}
