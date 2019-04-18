const {join} = require('path')
const {generate} = require('shortid')

module.exports = ({node, getNode, actions: {createNodeField}}) => {
  const addFields = fields =>
    Object.entries(fields).forEach(([name, value]) =>
      createNodeField({node, name, value}),
    )

  if (node.internal.type === 'MarkdownRemark' /* && !node.slug */) {
    const {sourceInstanceName, relativePath} = getNode(node.parent)

    switch (sourceInstanceName) {
      case 'contributors': {
        const [id] = relativePath.split('/')
        const slug = `contributors/${id}`
        addFields({id, slug})
        break
      }

      case 'posts':
      case 'events':
      case 'newsletters': {
        const pieces = relativePath.split(/-|\//)
        const piecesWithoutLast = pieces.slice(0, pieces.length - 1)
        const [year, month, day, ...titlePieces] = piecesWithoutLast
        const datePath = [year, month, day].join('/')
        const titlePath = titlePieces ? titlePieces.join('-') : ''
        const slug = join(sourceInstanceName, datePath, titlePath)
        const date = new Date(year, month - 1, day).toJSON()
        addFields({date, slug})
        break
      }

      case 'misc': {
        const [id] = relativePath.split('/')
        addFields({id})
        break
      }

      default: {
        break
      }
    }

    const key = generate() // for React reconciler re-use
    const category = sourceInstanceName
    addFields({key, category})
  }
}
