import {graphql} from 'gatsby'
import {Page, List, Card} from '~/components'
import {mapNodeToProps} from '~/utilities'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "events"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            state
            city
            location
            href
            avatar {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            organizers {
              frontmatter {
                name
                avatar {
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => (
  <Page>
    <List data={edges} mapping={mapNodeToProps} Template={Card.Event} />
  </Page>
)
