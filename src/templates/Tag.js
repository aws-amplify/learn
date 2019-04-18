import {graphql} from 'gatsby'

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {tags: {in: [$tag]}}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default props => {
  console.log(props)
  return <div>{JSON.stringify(props)}</div>
}
