#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const R = require('ramda');
const {parse, serialize} = require('parse5');

const newsletter_years_path = path.join(__dirname, '../public/newsletters');
const destination_path = path.join(__dirname, '../email-contents.html');

const newsletter_years_dirs = fs.readdirSync(newsletter_years_path);
const newsletter_year = Math.max(
  ...R.filter(
    R.complement(R.equals(NaN)),
    R.map(parseInt, newsletter_years_dirs),
  ),
);
const newsletter_year_path = path.join(
  newsletter_years_path,
  String(newsletter_year),
);
const newsletter_year_dirs = fs.readdirSync(newsletter_year_path);
// const newsletter_week = Math.max(
//   ...R.filter(
//     R.complement(R.equals(NaN)),
//     R.map(parseInt, newsletter_year_dirs),
//   ),
// );
const newsletter_week = 24;
const newsletter_path = path.join(
  newsletter_year_path,
  String(newsletter_week),
  'index.html',
);
const newsletter_contents = fs.readFileSync(newsletter_path, 'utf-8');
const parsed = parse(newsletter_contents, {scriptingEnabled: false});

const html = {
  events: null,
  posts: null,
};

const queue = [parsed];
while (queue.length !== 0) {
  const current = queue.pop();

  if (R.is(Object, current)) {
    for (const i in current) {
      if (Object.prototype.hasOwnProperty.call(current, i)) {
        if (i === 'attrs') {
          for (const attr of current[i]) {
            if (attr.name && attr.name === 'visitor-cue') {
              html[attr.value] = current;
            }
          }
        }

        if (i !== 'parentNode') queue.unshift(current[i]);
      }
    }
  }
}

const get_event_items = parent => {
  for (const child of parent.childNodes) {
    if (child.nodeName === 'div' && child.attrs) {
      for (const child_attr of child.attrs) {
        if (
          child_attr.name === 'class' &&
          typeof child_attr.value &&
          child_attr.value.includes('items')
        ) {
          return R.filter(e => e.nodeName === 'a', child.childNodes);
        }
      }
    }
  }
};

const get_post_items = parent => {
  return parent.childNodes
    .filter(
      e =>
        e.nodeName === 'div' &&
        e.attrs.some(f => f.name === 'class' && f.value.includes('items')),
    )[0]
    .childNodes.filter(e => e.nodeName === 'div');
};

const extract_href = node => {
  for (const attr of node.attrs) {
    if (attr.name === 'href') return attr.value;
  }
  return null;
};

const extract_avatar_url = avatar_div => {
  return path.join(
    'https://amplify.aws',
    avatar_div.childNodes[0].childNodes[1].childNodes[0].childNodes[0].attrs
      .find(a => a.name === 'srcset')
      .value.split('\n')
      .map(e => e.trim().split(' '))[3][0],
  );
};

const extract_event_details = node => {
  const href = extract_href(node);

  const [avatar_div, {childNodes: text_container_children}] = node.childNodes;
  const avatar_url = extract_avatar_url(avatar_div);

  return {
    href,
    avatar_url,
    ...text_container_children.reduce((acc, current) => {
      if (current.nodeName === 'h3') {
        return {
          ...acc,
          title: current.childNodes[0].value,
        };
      }

      if (current.nodeName === 'div') {
        const {childNodes} = current;
        return {
          ...acc,
          date: childNodes[0].childNodes[0].value,
          location: childNodes[2].childNodes[0].value,
        };
      }

      return acc;
    }, {}),
  };
};

// const extract_post_details = node => {
//   // const href = extract_href(node);
//   // const {childNodes} = node;
//   // const {0: avatar_div, 2: {childNodes: body}} = childNodes;
//   // const avatar_url = extract_avatar_url(avatar_div);
//   console.log(node);
//   console.log('\n\n');
// };

const {events, posts} = html;

// get_post_items(posts).forEach(e => console.log('\n\n', serialize(e)));

const event_items = get_event_items(events);
event_items.forEach(e => console.log(extract_event_details(e)));

// const post_items = get_post_items(posts);
// post_items.forEach(e => extract_event_details(e));

// const postsHTML = serialize(posts);
// fs.writeFileSync(destination_path, eventsHTML, 'utf-8');
