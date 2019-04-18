const {
  templatePaths,
  listTemplatePathByCategory,
  pageTemplatePathByCategory,
} = require('./constants')

module.exports = async ({graphql, actions: {createPage}}) => {
  const {errors, data} = await graphql(`
    {
      posts: allMarkdownRemark(filter: {fields: {category: {eq: "posts"}}}) {
        edges {
          node {
            frontmatter {
              tags
              href
            }
            fields {
              slug
              date
            }
          }
        }
      }

      events: allMarkdownRemark(filter: {fields: {category: {eq: "events"}}}) {
        edges {
          node {
            frontmatter {
              tags
              href
            }
            fields {
              slug
              date
            }
          }
        }
      }

      contributors: allMarkdownRemark(
        filter: {fields: {category: {eq: "contributors"}}}
      ) {
        edges {
          node {
            fields {
              id
              slug
            }
          }
        }
      }

      newsletters: allMarkdownRemark(
        filter: {fields: {category: {eq: "newsletters"}}}
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
          }
        }
      }
    }
  `)

  if (errors) throw errors

  // landing page
  createPage({
    path: '/',
    component: templatePaths.landing,
    context: {
      currentDate: new Date().toJSON(),
    },
  })

  const entries = Object.entries(data)

  const existenceByTag = {}
  const existenceByDate = {}

  entries.forEach(([category, {edges}]) => {
    edges.forEach(({node}) => {
      const {fields, frontmatter = {}} = node
      const {slug, date} = fields
      const {tags, href} = frontmatter

      // get list of all tags
      tags &&
        tags.forEach(tag => {
          existenceByTag[tag] = true
        })

      // get list of all dates
      if (date) existenceByDate[date] = true

      // create post, event and contributor pages
      // (don't create for externals)
      category !== 'newsletters' &&
        !href &&
        createPage({
          path: slug,
          component: pageTemplatePathByCategory[category],
          context: fields,
        })
    })
  })

  // // create tag pages
  // Object.keys(existenceByTag).forEach(tag =>
  //   createPage({
  //     path: `tags/${tag}`,
  //     component: templatePaths.tag,
  //     context: {tag},
  //   }),
  // )

  const getSlug = stringifiedDate => {
    const date = new Date(stringifiedDate)
    const year = date.getFullYear()
    const week = date.getMonth() * 4 + Math.floor(date.getDate() / 7)
    return `newsletters/${year}/${week}`
  }

  // get dictionary of dates to be used in newsletter page queries
  // looks like this: `{[newsletterSlug]: [...postOrEventDates]}`
  const datesBySlug = Object.keys(existenceByDate).reduce(
    (accumulator, current) => {
      const slug = getSlug(current)
      return {
        ...accumulator,
        [slug]: [...(accumulator[slug] || []), current],
      }
    },
    {},
  )

  // create newsletter pages
  Object.entries(datesBySlug).forEach(([slug, dates]) =>
    createPage({
      path: slug,
      component: templatePaths.newsletter,
      context: {dates},
    }),
  )

  // create "list" pages
  entries.forEach(([category]) => {
    createPage({
      path: category,
      component: listTemplatePathByCategory[category],
    })
  })
}
