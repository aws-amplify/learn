import {graphql} from 'gatsby'

export const AvatarSmallFragment = graphql`
  fragment AvatarSmall on File {
    childImageSharp {
      fixed(width: 45, height: 45, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const AvatarMediumFragment = graphql`
  fragment AvatarMedium on File {
    childImageSharp {
      fixed(width: 60, height: 60, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const AvatarLargeFragment = graphql`
  fragment AvatarLarge on File {
    childImageSharp {
      fixed(width: 75, height: 75, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const BannerThumbnailFragment = graphql`
  fragment BannerThumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 309) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const BannerFragment = graphql`
  fragment Banner on File {
    childImageSharp {
      fluid(maxWidth: 1600, maxHeight: 989) {
        ...GatsbyImageSharpFluid
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
      github
      twitter
      website
    }
  }
`

export const SharedBetweenPostsAndEventsFragment = graphql`
  fragment SharedBetweenPostsAndEvents on MarkdownRemark {
    fields {
      key
      slug
      date(formatString: "MMMM D")
    }
    frontmatter {
      href
      title
      description
      tags
    }
  }
`

// add banner
export const PostFragment = graphql`
  fragment Post on MarkdownRemark {
    ...SharedBetweenPostsAndEvents
    frontmatter {
      authors {
        ...Contributor
      }
    }
  }
`

export const EventFragment = graphql`
  fragment Event on MarkdownRemark {
    ...SharedBetweenPostsAndEvents
    frontmatter {
      location
      city
      state
      organizers {
        ...Contributor
      }
    }
  }
`
