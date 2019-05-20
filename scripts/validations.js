#!/usr/bin/env node

const {
  forEach,
  split,
  reverse,
  any,
  isNil,
  isEmpty,
  anyPass,
  map,
  curry,
  length,
} = require('ramda');
const {join} = require('path');
const {sync: globSync} = require('glob');
const {readFileSync} = require('fs');
const matter = require('gray-matter');
const {of} = require('case');
const {contributorExists} = require('./utilities');

let errors = '';
const addError = curry((path, heading, message) => {
  errors += `
Validation error in ${path} –– ${heading}, ${message}`;
});

const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const contributorsKeyByCategory = {
  events: 'attendantIds',
  posts: 'authorIds',
};

// how do we want to validate the following:

// href
// country
// city

const validate = path => {
  const contents = readFileSync(path, 'utf8');
  const {data: frontmatter} = matter(contents);

  // eslint-disable-next-line
  const [x, name, category] = reverse(split('/', path));

  const addErrorAtPath = addError(path);
  const nameError = addErrorAtPath('path name');

  length(split(name)) > 1 &&
    of(name) !== 'kebab' &&
    nameError(`camelcase ${category} folders`);

  const validateExistenceAndLength = ({field, minLength, maxLength}) => {
    const error = addErrorAtPath(`'${field}' field`);
    const {[field]: v} = frontmatter;
    isNil(v) && error('missing');
    const l = length(v);
    (l < minLength || l > maxLength) &&
      error(`must be between ${minLength} and ${maxLength} characters`);
  };

  const validateFileExistence = ({field, pathToFile, filename}) =>
    !(() => {
      try {
        return !!require.resolve(join(pathToFile, filename));
      } catch (e) {
        return false;
      }
    })() &&
    addErrorAtPath(
      `'${field}' field`,
      `no file '${filename}' was found at ${pathToFile}`,
    );

  if (category === 'events' || category === 'contributors') {
    const {avatar} = frontmatter;
    avatar &&
      validateFileExistence({
        field: 'avatar',
        pathToFile: join(path, '..'),
        filename: avatar,
      });
  }

  if (category === 'posts') {
    const {banner} = frontmatter;
    banner &&
      validateFileExistence({
        field: 'banner',
        pathToFile: join(path, '..'),
        filename: banner,
      });
  }

  if (category === 'posts' || category === 'events') {
    const [year, month, day] = split('-', name);
    if (any(anyPass([isNaN, isNil, isEmpty]), [year, month, day]))
      nameError(
        'post and event folders must be prefixed with their YYYY-MM-DD',
      );

    const [parsedYear, parsedMonth, parsedDay] = map(parseInt, [
      year,
      month,
      day,
    ]);

    if (parsedYear < 2016) nameError(`Amplify didn't exist in ${year}`);
    if (
      category === 'posts' &&
      new Date(parsedYear, parsedMonth - 1, parsedDay) > new Date()
    )
      nameError(`post-dating posts isn't allowed`);
    if (parsedMonth < 1 || parsedMonth > 12) nameError('invalid month');
    if (parsedDay < 1 || parsedDay > monthLengths[parsedMonth - 1])
      nameError('invalid day');

    forEach(validateExistenceAndLength, [
      {
        field: 'title',
        minLength: 1,
        maxLength: 200,
      },
      ...[
        category === 'posts' && {
          field: 'description',
          minLength: 1,
          maxLength: 500,
        },
      ].filter(Boolean),
    ]);

    const contributorsKey = contributorsKeyByCategory[category];
    const {[contributorsKey]: contributors} = frontmatter;
    isNil(contributors) || isEmpty(contributors) || !Array.isArray(contributors)
      ? addErrorAtPath('contributors', 'must list at least one contributor')
      : forEach(
          idInQuestion =>
            !contributorExists(idInQuestion) &&
            addErrorAtPath(
              `invalid ${contributorsKey}`,
              `no such contributor with ID of '${idInQuestion}'`,
            ),
          contributors,
        );
  }

  if (category === 'contributors') {
    // avatar
    // github
    // twitter

    forEach(validateExistenceAndLength, [
      {
        field: 'name',
        minLength: 1,
        maxLength: 60,
      },
      {
        field: 'bio',
        minLength: 1,
        maxLength: 250,
      },
    ]);
  }
};

const matcher = join(__dirname, '../content/**/*.md');
const matches = globSync(matcher, {ignore: ['**/README.md', '**/misc/**']});

forEach(validate, matches);

if (!isEmpty(errors)) {
  console.error(errors);
  process.exit(1);
}
