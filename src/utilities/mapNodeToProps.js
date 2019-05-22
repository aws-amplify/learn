import {map, filter, complement, F, toPairs, fromPairs} from 'ramda';

// edit exclusionkey to be prop of options param
const mapNodeToProps = (data, exclusionKey) => {
  const root = data.node || data;

  const {fields = {}, frontmatter = {}, excerpt = null} = root;
  const {slug: to = null, authors = null} = fields;
  const {banner = null, avatar = null, organizers = null} = frontmatter;

  const images = map(e => e && e.childImageSharp, {banner, avatar});
  const contributors = map(e => e && e.length && map(mapNodeToProps, e), {
    organizers,
    authors,
  });

  return fromPairs(
    filter(
      complement(exclusionKey ? ([k]) => k === exclusionKey : F),
      toPairs({
        ...fields,
        ...frontmatter,
        ...images,
        ...contributors,

        to,
        excerpt,
      }),
    ),
  );
};

export default mapNodeToProps;
