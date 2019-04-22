import {graphql} from 'gatsby'
import {Layout, Card} from '~/components'
import {mapNodeToProps} from '~/utilities'

export const pageQuery = graphql`
  query PostByContributor($id: String!) {
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

export default ({
  data: {
    contributor,
    // posts: {edges: posts},
    // events: {edges: events},
  },
}) => {
  const props = mapNodeToProps(contributor)
  return <Layout.Basic main={<Card.Contributor {...props} disabled />} />
}
