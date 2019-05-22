import {graphql} from 'gatsby';
import {Nav, Layout, Card, MappedList, Text, Meta} from '~/components';
import {extract, mapNodeToProps, track} from '~/utilities';
import {TABLET_BREAKPOINT, DESKTOP_BREAKPOINT} from '~/constants';

// add alphabetical sorting
export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fields: {category: {eq: "contributors"}}}) {
      edges {
        node {
          ...Contributor
          frontmatter {
            avatar {
              ...AvatarMedium
            }
          }
        }
      }
    }
  }
`;

export default props => {
  track.internalPageView(props);
  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props);
  const main = (
    <MappedList
      heading={<Text h2 className='list-heading' children='Our Community' />}
      data={edges}
      mapping={mapNodeToProps}
      keyExtractor={extract.keyFromNode}
      renderItem={p => <Card.Contributor {...p} />}
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 2,
        [DESKTOP_BREAKPOINT]: 4,
      }}
      additionalProps={{className: 'three-dee actionable'}}
    />
  );

  return (
    <>
      <Meta pageName='Contributors' />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
