const {
  curry,
  forEach,
  join,
  keys,
  forEachObjIndexed,
  mapObjIndexed,
  map,
  compose,
  split,
  sort,
  tail,
  comparator,
  invertObj,
} = require('ramda');
const {templatePaths} = require('./constants');

const getSlug = date => {
  const year = date.getFullYear();
  const week = date.getMonth() * 4 + Math.floor((date.getDate() - 1) / 7) + 1;
  return join('/', ['newsletters', year, week]);
};

const addWeeks = curry((numWeeks, date) => {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + 7 * numWeeks);
  return newDate;
});

const addDays = curry((numDays, date) => {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
});

const getDateRange = ([year, week]) => {
  const date = new Date(year);
  const startDate = addWeeks(week, date);
  const endDate = addDays(-1, addWeeks(1, startDate));
  return [startDate, endDate];
};

const getComparableValuesFromSlug = map(
  compose(
    map(parseInt),
    tail,
    split('/'),
  ),
);

module.exports = (createPage, {events, posts, newsletterInjections}) => {
  const contentBySlug = {};

  const place = curry((category, slug, id) => {
    if (!contentBySlug[slug])
      contentBySlug[slug] = {posts: {}, events: {}, newsletterInjections: {}};
    contentBySlug[slug][category][id] = true;
  });

  const lastMonday = new Date();
  const day = lastMonday.getDay();
  day > 0 && lastMonday.setDate(lastMonday.getDate() - day + 1);

  forEachObjIndexed(
    ({edges}, category) => {
      const placeCategory = place(category);

      forEach(({node}) => {
        const {id, fields} = node;
        const {date: stringifiedDate, injectInto} = fields;
        const date = stringifiedDate && new Date(stringifiedDate);

        switch (category) {
          case 'posts': {
            const slug = date && getSlug(date);
            date < lastMonday && placeCategory(slug, id);
            break;
          }

          case 'events': {
            forEach(
              i => {
                const adjustedDate = addWeeks(-1 * i, date);
                const slug = getSlug(adjustedDate);
                adjustedDate < lastMonday && placeCategory(slug, id);
              },
              [1, 2, 3, 4],
            );
            break;
          }

          case 'newsletterInjections': {
            placeCategory(injectInto, id);
            break;
          }

          default:
            break;
        }
      }, edges);
    },
    {events, posts, newsletterInjections},
  );

  const sortedSlugs = sort(
    comparator((a, b) => {
      const [[yearA, weekA], [yearB, weekB]] = getComparableValuesFromSlug([
        a,
        b,
      ]);

      return yearA === yearB ? weekA > weekB : yearA > yearB;
    }),
    keys(contentBySlug),
  );

  const indexBySlug = map(parseInt, invertObj(sortedSlugs));
  const dateRangeBySlug = mapObjIndexed((_, slug) => {
    const [year, week] = tail(split('/', slug));
    const [startDate, endDate] = getDateRange([year, week]);
    return {startDate, endDate, slug};
  }, indexBySlug);

  forEachObjIndexed((dictionary, slug) => {
    const [year, week] = tail(split('/', slug));
    const i = indexBySlug[slug];
    const next = sortedSlugs[i - 1];
    const previous = sortedSlugs[i + 1];
    const {startDate, endDate} = dateRangeBySlug[slug];
    const idsByCategory = map(keys, dictionary);

    const context = {
      current: `/${slug}`,
      ...idsByCategory,

      year,
      week,
      startDate,
      endDate,
      sortedSlugs,
      indexBySlug,
      next,
      previous,
    };

    createPage({
      path: slug,
      component: templatePaths.newsletter,
      context,
    });
  }, contentBySlug);

  createPage({
    path: 'newsletters',
    component: templatePaths.newsletters,
    context: {
      sortedSlugs,
      indexBySlug,
      latestSlug: sortedSlugs[0],
      dateRangeBySlug,
    },
  });
};
