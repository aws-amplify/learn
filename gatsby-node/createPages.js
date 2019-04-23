const {
  templatePaths,
  listTemplatePathByCategory,
  pageTemplatePathByCategory,
} = require('./constants')
const {map, keys} = require('ramda')

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
  // {[slug]: {events: {[date]: true}}}
  const dateExistenceByCategoryBySlug = {}

  const getSlug = (stringifiedDate, weeksToSubtract) => {
    const date = new Date(stringifiedDate)
    if (weeksToSubtract) date.setDate(date.getDate() - 7 * weeksToSubtract)
    const year = date.getFullYear()
    const week = date.getMonth() * 4 + Math.floor(date.getDate() / 7)
    return `newsletters/${year}/${week}`
  }

  entries.forEach(([category, {edges}]) => {
    edges.forEach(({node}) => {
      const {fields, frontmatter = {}} = node
      const {date, slug} = fields
      const {tags, href} = frontmatter

      // get list of all tags
      tags &&
        tags.forEach(tag => {
          existenceByTag[tag] = true
        })

      // CLEAN THIS UP!
      if (date) {
        if (category === 'events') {
          ;[1, 2, 3, 4].forEach(n => {
            const s = getSlug(date, n)
            if (!dateExistenceByCategoryBySlug[s]) {
              dateExistenceByCategoryBySlug[s] = {
                events: {},
                posts: {},
                newsletters: {},
              }
            }
            dateExistenceByCategoryBySlug[s].events[date] = true
          })
        } else {
          const s = getSlug(date)
          if (!dateExistenceByCategoryBySlug[s]) {
            dateExistenceByCategoryBySlug[s] = {
              events: {},
              posts: {},
              newsletters: {},
            }
          }
          dateExistenceByCategoryBySlug[s][category][date] = true
        }
      }

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

  // create newsletter pages
  Object.entries(dateExistenceByCategoryBySlug).forEach(
    ([slug, datesByCategory]) => {
      const context = map(keys, datesByCategory)
      createPage({
        path: slug,
        component: templatePaths.newsletter,
        context,
      })
    },
  )

  // create "list" pages
  entries.forEach(([category]) => {
    createPage({
      path: category,
      component: listTemplatePathByCategory[category],
    })
  })
}
