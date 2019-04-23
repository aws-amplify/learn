import {graphql} from 'gatsby'

export const pageQuery = graphql`
  query ContentByDates(
    $events: [Date!]!
    $posts: [Date!]!
    $newsletters: [Date!]!
  ) {
    events: allMarkdownRemark(
      filter: {fields: {category: {eq: "events"}, date: {in: $events}}}
    ) {
      edges {
        node {
          ...Post
        }
      }
    }

    posts: allMarkdownRemark(
      filter: {fields: {category: {eq: "posts"}, date: {in: $posts}}}
    ) {
      edges {
        node {
          ...Post
        }
      }
    }

    newsletters: allMarkdownRemark(
      filter: {
        fields: {category: {eq: "newsletters"}, date: {in: $newsletters}}
      }
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`

export default ({data}) => {
  console.log(data)
  return <div>newsletter</div>
}
