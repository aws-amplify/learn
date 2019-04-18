import {graphql} from 'gatsby'
import {Page, List, Card} from '~/components'
import {mapNodeToProps} from '~/utilities'

// posts: allMarkdownRemark(
//   filter: {
//     fields: {category: {eq: "posts"}}
//     frontmatter: {authorIds: {in: [$id]}}
//   }
// ) {
//   edges {
//     node {
//       frontmatter {
//         title
//         description
//         banner {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         authorIds
//         tags
//       }
//       fields {
//         key
//         slug
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// }

// events: allMarkdownRemark(
//   filter: {
//     fields: {category: {eq: "events"}}
//     frontmatter: {authorIds: {in: [$id]}}
//   }
// ) {
//   edges {
//     node {
//       frontmatter {
//         title
//         description
//         banner {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         tags
//       }
//       fields {
//         key
//         slug
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// }

export const pageQuery = graphql`
  query PostByContributor($id: String!) {
    contributor: markdownRemark(fields: {id: {eq: $id}}) {
      frontmatter {
        name
        bio
        avatar {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        github
        twitter
        website
      }
      fields {
        key
        slug
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
  return (
    <Page>
      <Card.Contributor {...props} disabled />
      {/* make tabs component! */}
      {/* <List data={[...posts, ...events]} Template={Card.PostOrEvent} /> */}
    </Page>
  )
}
