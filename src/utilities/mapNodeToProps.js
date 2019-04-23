import {map} from 'ramda'

const mapNodeToProps = data => {
  const root = data.node || data

  const {fields = {}, frontmatter = {}, excerpt = null} = root
  const {slug: to = null} = fields
  const {
    banner = null,
    avatar = null,
    organizers = null,
    authors = null,
  } = frontmatter

  const images = map(e => e && e.childImageSharp, {banner, avatar})
  const contributors = map(e => e && e.length && e.map(mapNodeToProps), {
    organizers,
    authors,
  })

  return {
    ...fields,
    ...frontmatter,
    ...images,
    ...contributors,

    to,
    excerpt,
  }
}

export default mapNodeToProps
