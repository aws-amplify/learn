import {graphql} from 'gatsby'

export const pageQuery = graphql`
  query ContentByDates($dates: [Date!]!) {
    allMarkdownRemark(filter: {fields: {date: {in: $dates}}}) {
      edges {
        node {
          frontmatter {
            title
            description
            href
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
            authors {
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
            tags
            location
          }
          fields {
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`

export default ({data}) => {
  console.log(data)
  return <div>newsletter</div>
}
