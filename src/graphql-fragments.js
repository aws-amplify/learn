import {graphql} from 'gatsby'

export const AvatarFragment = graphql`
  fragment Avatar on File {
    childImageSharp {
      fixed(width: 100, height: 100, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const ContributorFragment = graphql`
  fragment Contributor on MarkdownRemark {
    fields {
      key
      slug
    }
    frontmatter {
      name
      bio
      avatar {
        ...Avatar
      }
      github
      twitter
      website
    }
  }
`

export const PostOrEventFragment = graphql`
  fragment PostOrEvent on MarkdownRemark {
    fields {
      key
      slug
      date(formatString: "MMMM D")
    }
    frontmatter {
      href
      title
      description
      location
      city
      state
      avatar {
        ...Avatar
      }
      authors {
        ...Contributor
      }
      organizers {
        ...Contributor
      }
    }
  }
`
