const {map} = require('ramda');
const {join, resolve} = require('path');

const lifeCycleStages = ['createPages', 'onCreateNode'];

const relativeToCurrentDir = path => resolve(join(__dirname, path));
const relativeToSrcDir = path => relativeToCurrentDir(join('../src', path));
const relativeToTemplatesDir = path =>
  relativeToSrcDir(join('templates', path));

const templateFilenames = {
  landing: 'Landing.js',
  contributors: 'Contributors.js',
  posts: 'Posts.js',
  events: 'Events.js',
  newsletters: 'Newsletters.js',
  contributor: 'Contributor.js',
  post: 'Post.js',
  event: 'Event.js',
  newsletter: 'Newsletter.js',
};

const templatePaths = map(
  filename => relativeToTemplatesDir(filename),
  templateFilenames,
);

const {
  contributors,
  posts,
  events,
  newsletters,
  contributor,
  post,
  event,
  newsletter,
} = templatePaths;

const listTemplatePathByCategory = {contributors, posts, events, newsletters};
const pageTemplatePathByCategory = {
  contributors: contributor,
  posts: post,
  events: event,
  newsletters: newsletter,
};

module.exports = {
  lifeCycleStages,
  templatePaths,
  listTemplatePathByCategory,
  pageTemplatePathByCategory,
};
