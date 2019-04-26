import {graphql} from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        banner {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
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
      }
      html
    }
  }
`;

export default ({data}) => {
  const {fields, frontmatter, html} = data.markdownRemark;
  const {title, description, banner, authors, tags, level} = frontmatter;
  const {fluid} = banner.childImageSharp;
  const {date} = fields;

  return (
    <div>
      Title:
      {title}
      <br />
      Description:
      {description}
      <br />
      authors:
      {authors.join(', ')}
      <br />
      <Img {...{fluid}} />
      Date:
      {date}
      <br />
      Tags:
      {tags.join(', ')}
      <br />
      Level:
      {level}
      <br />
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};
