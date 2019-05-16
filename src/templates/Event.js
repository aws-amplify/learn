import {graphql} from 'gatsby';
import {track, extract} from '~/utilities';
// import Img from 'gatsby-image';
import {Text, Meta, Layout, Nav, Card} from '~/components';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      ...Event
      frontmatter {
        avatar {
          ...AvatarSmall
        }
      }
    }
  }
`;

export default props => {
  track.internalPageView(props);

  const {html, fields, frontmatter} = extract.fromPath(
    ['data', 'markdownRemark'],
    props,
  );

  const {date} = fields;
  const {title, description, city, country, href} = frontmatter;

  const main = (
    <div>
      <div>
        <Text h2>{title}</Text>
        <Text h4>{description}</Text>
        <Text h4>{date}</Text>
        <Text h4>{`${city}, ${country}`}</Text>
        {/* eslint-disable-next-line */}
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  );

  return (
    <>
      <Meta pageName='Chat' />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
