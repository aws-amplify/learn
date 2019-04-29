const {
  compose,
  sort,
  tail,
  comparator,
  split,
  map,
  keys,
  invertObj,
  forEach,
  forEachObjIndexed,
  filter,
  curry,
} = require('ramda');
const {
  templatePaths,
  listTemplatePathByCategory,
  pageTemplatePathByCategory,
} = require('./constants');

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
  `);

  if (errors) throw errors;

  const getYearWeekTuple = date => [
    date.getFullYear(),
    date.getMonth() * 4 + Math.floor(date.getDate() / 7) + 1,
  ];

  const subtractWeeks = curry((numWeeks, date) => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() - 7 * numWeeks);
    return newDate;
  });

  const [currentDate, currentYear, currentWeek] = (() => {
    const d = new Date();
    return [d.toJSON(), ...getYearWeekTuple(d)];
  })();

  createPage({
    path: '/',
    component: templatePaths.landing,
    context: {currentDate},
  });

  const existenceByTag = {};
  // {[slug]: {events: {[date]: true}}}
  const dateExistenceByCategoryBySlug = {};

  const getSlug = date => {
    const [year, week] = getYearWeekTuple(date);
    return `newsletters/${year}/${week}`;
  };

  forEachObjIndexed(({edges}, category) => {
    forEach(({node}) => {
      const {fields, frontmatter = {}} = node;
      const {date: stringifiedDate, slug} = fields;
      const {tags, href} = frontmatter;

      // get list of all tags
      tags &&
        tags.forEach(tag => {
          existenceByTag[tag] = true;
        });

      // CLEAN THIS UP!
      if (stringifiedDate) {
        const date = new Date(stringifiedDate);

        if (category === 'events') {
          [1, 2, 3, 4].forEach(n => {
            const adjustedDate = subtractWeeks(n, date);
            const s = getSlug(adjustedDate);

            if (!dateExistenceByCategoryBySlug[s]) {
              dateExistenceByCategoryBySlug[s] = {
                events: {},
                posts: {},
                newsletters: {},
              };
            }

            dateExistenceByCategoryBySlug[s].events[stringifiedDate] = true;
          });
        } else {
          const s = getSlug(date);

          if (!dateExistenceByCategoryBySlug[s]) {
            dateExistenceByCategoryBySlug[s] = {
              events: {},
              posts: {},
              newsletters: {},
            };
          }

          dateExistenceByCategoryBySlug[s][category][stringifiedDate] = true;
        }
      }

      // create post, event and contributor pages
      // (don't create for externals)
      category === 'contributors' &&
        !href &&
        createPage({
          path: slug,
          component: pageTemplatePathByCategory[category],
          context: fields,
        });
    }, edges);
  }, data);

  const newsletterSlugs = filter(s => {
    const [year, week] = tail(split('/', s));
    return currentYear >= year && currentWeek >= week;
  }, keys(dateExistenceByCategoryBySlug));

  const getComparableValuesFromSlug = map(
    compose(
      map(parseInt),
      tail,
      split('/'),
    ),
  );

  const compareSlugs = comparator((a, b) => {
    const [[yearA, weekA], [yearB, weekB]] = getComparableValuesFromSlug([
      a,
      b,
    ]);
    return yearA === yearB ? weekA > weekB : yearA > yearB;
  });

  const sortedNewsletterSlugs = sort(compareSlugs, newsletterSlugs);
  const indexByNewsletterSlug = map(parseInt, invertObj(sortedNewsletterSlugs));

  createPage({
    path: 'newsletters',
    component: listTemplatePathByCategory.newsletters,
    context: {
      sortedSlugs: sortedNewsletterSlugs,
      indexBySlug: JSON.stringify(indexByNewsletterSlug),
      latestSlug: sortedNewsletterSlugs[0],
    },
  });

  // create newsletter pages
  forEachObjIndexed((datesByCategory, slug) => {
    const [year, week] = tail(split('/', slug));
    const i = indexByNewsletterSlug[slug];
    const next = sortedNewsletterSlugs[i - 1];
    const previous = sortedNewsletterSlugs[i + 1];

    year <= currentYear &&
      week <= currentWeek &&
      createPage({
        path: slug,
        component: templatePaths.newsletter,
        context: {
          current: `/${slug}`,
          next,
          previous,
          year,
          week,
          ...map(keys, datesByCategory),
        },
      });
  }, dateExistenceByCategoryBySlug);

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
};
