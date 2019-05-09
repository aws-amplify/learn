const {reduce, head, reverse, split, keys} = require('ramda');
const {sync: globSync} = require('glob');
const {join} = require('path');

const existenceByContributorId = reduce(
  (a, c) => ({
    ...a,
    [head(reverse(split('/', c)))]: true,
  }),
  {},
  globSync(join(__dirname, '../../content/contributors/*')),
);

const contributorExists = inQuestion => !!existenceByContributorId[inQuestion];
const contributorIds = keys(existenceByContributorId);

module.exports = {contributorExists, contributorIds};
