const {join} = require('path');
const {generate} = require('shortid');
const {forEachObjIndexed, split} = require('ramda');

const splitAtSlashes = split('/');
const splitAtDelimiters = split(/-|\//);

module.exports = ({node, getNode, actions: {createNodeField}}) => {
  const addFields = forEachObjIndexed((value, name) =>
    createNodeField({node, name, value}),
  );

  if (node.internal.type === 'MarkdownRemark' /* && !node.slug */) {
    const {sourceInstanceName, relativePath} = getNode(node.parent);

    switch (sourceInstanceName) {
      case 'contributors': {
        const [id] = splitAtSlashes(relativePath);
        const slug = `contributors/${id}`;
        addFields({id, slug});
        break;
      }

      case 'posts': {
        const [id] = splitAtSlashes(relativePath);
        const {authorIds: authors} = node.frontmatter;
        addFields({id, authors});
      }

      case 'events': {
        const {attendantIds: attendants} = node.frontmatter;
        addFields({attendants});
      }

      case 'posts':
      case 'events': {
        const pieces = splitAtDelimiters(relativePath);
        const piecesWithoutLast = pieces.slice(0, pieces.length - 1);
        const [year, month, day, ...titlePieces] = piecesWithoutLast;
        const datePath = [year, month, day].join('/');
        const titlePath = titlePieces ? titlePieces.join('-') : '';
        const slug = join(sourceInstanceName, datePath, titlePath);
        const date = new Date(year, month - 1, day).toJSON();
        addFields({date, slug});
        break;
      }

      case 'newsletter-injections': {
        const [year, week] = splitAtDelimiters(relativePath);
        addFields({injectInto: ['newsletters', year, week].join('/')});
        break;
      }

      case 'misc': {
        const [id] = splitAtSlashes(relativePath);
        addFields({id});
        break;
      }

      default: {
        break;
      }
    }

    const key = generate(); // for re-use by reconciler
    const category = sourceInstanceName;
    addFields({key, category});
  }
};
