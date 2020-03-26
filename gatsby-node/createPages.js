const {forEach, forEachObjIndexed} = require('ramda');
const {
  templatePaths,
  listTemplatePathByCategory,
  pageTemplatePathByCategory,
} = require('./constants');
const generateNewsletter = require('./generateNewsletter');

module.exports = async ({graphql, actions: {createPage}}) => {
  const {errors, data} = await graphql(`
    {
      posts: allMarkdownRemark(filter: {fields: {category: {eq: "posts"}}}) {
        edges {
          node {
            id
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
            id
            frontmatter {
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
            id
            fields {
              id
              slug
            }
          }
        }
      }

      newsletterInjections: allMarkdownRemark(
        filter: {fields: {category: {eq: "newsletter-injections"}}}
      ) {
        edges {
          node {
            id
            fields {
              injectInto
            }
          }
        }
      }
    }
  `);

  if (errors) throw errors;

  const currentDate = new Date().toJSON();

  createPage({
    path: '/',
    component: templatePaths.landing,
    context: {currentDate},
  });

  const {contributors, posts, events, newsletterInjections} = data;

  forEachObjIndexed(
    ({edges}, category) => {
      forEach(({node}) => {
        const {fields} = node;
        const {slug} = fields;

        createPage({
          path: slug,
          component: pageTemplatePathByCategory[category],
          context: fields,
        });
      }, edges);
    },
    {contributors, events},
  );

  createPage({
    path: 'contributors',
    component: listTemplatePathByCategory.contributors,
  });

  createPage({
    path: 'events',
    component: listTemplatePathByCategory.events,
    context: {currentDate},
  });

  createPage({
    path: 'posts',
    component: listTemplatePathByCategory.posts,
  });

  createPage({
    path: 'resources',
    component: listTemplatePathByCategory.resources,
  });

  generateNewsletter(createPage, {
    posts,
    events,
    newsletterInjections,
  });
};
