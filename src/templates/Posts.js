import {graphql} from 'gatsby'
import {Page, List, Card} from '~/components'
import {mapNodeToProps} from '~/utilities'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "posts"}}}
    ) {
      edges {
        node {
          frontmatter {
            href
            title
            description
            banner {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 309) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            ecosystems
            categories
            tags
            authors {
              frontmatter {
                name
                github
                twitter
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
    <List
      filters={['ecosystems', 'categories']}
      data={edges}
      mapping={mapNodeToProps}
      Template={Card.Post}
    />
  </Page>
)
