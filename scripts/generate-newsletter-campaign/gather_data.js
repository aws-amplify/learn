const path = require('path');
const fs = require('fs');
const R = require('ramda');
const {parse} = require('parse5');

module.exports = () => {
  const newsletter_years_path = path.join(
    __dirname,
    '../../public/newsletters',
  );

  const get_largest_number = s =>
    Math.max(...R.filter(R.complement(R.equals(NaN)), R.map(parseInt, s)));

  const newsletter_years_dirs = fs.readdirSync(newsletter_years_path);
  const newsletter_year = get_largest_number(newsletter_years_dirs);
  const newsletter_year_path = path.join(
    newsletter_years_path,
    String(newsletter_year),
  );
  const newsletter_year_dirs = fs.readdirSync(newsletter_year_path);
  const newsletter_week = get_largest_number(newsletter_year_dirs);
  const newsletter_path = path.join(
    newsletter_year_path,
    String(newsletter_week),
    'index.html',
  );
  const newsletter_contents = fs.readFileSync(newsletter_path, 'utf-8');
  const parsed = parse(newsletter_contents, {scriptingEnabled: false});

  const safe_escapable_traverse = (node, callback) => {
    const queue = [node];
    while (queue.length !== 0) {
      const current = queue.pop();

      if (R.is(Object, current)) {
        for (const i in current) {
          if (Object.prototype.hasOwnProperty.call(current, i)) {
            const result = callback(current[i]);
            if (result) return result;
            if (i !== 'parentNode') queue.unshift(current[i]);
          }
        }
      }
    }
  };

  let date_range;
  const roots = {
    events: null,
    posts: null,
  };

  safe_escapable_traverse(parsed, node => {
    if (node.attrs) {
      for (const attr of node.attrs) {
        if (attr.name === 'data-date-range') date_range = attr.value;
        if (attr.name === 'data-visitor-cue') roots[attr.value] = node;
        if (date_range && roots.events && roots.posts) return;
      }
    }
  });

  const data = {
    events: [],
    posts: [],
  };

  R.mapObjIndexed((root, category) => {
    safe_escapable_traverse(root, node => {
      if (node.attrs) {
        for (const attr of node.attrs) {
          if (attr.name === 'data-visitor-target') {
            const entry = Object.assign(
              {},
              ...node.attrs.map(({name, value}) => ({[name]: value})),
            );
            delete entry.class;
            delete entry['data-visitor-target'];
            data[category].push(entry);
          }
        }
      }
    });
  }, roots);

  return {
    ...data,
    date_range,
    year: newsletter_year,
    week: newsletter_week,
  };
};
