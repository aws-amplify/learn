/* eslint-disable */
import {reduce, head, reverse, split} from 'ramda';
import {join} from 'path';
import {sync as globSync} from 'glob';

const contributorIds = reduce(
  (a, c) => {
    const id = head(reverse(split('/', c)));
    return id === 'README.md' ? a : [...a, id];
  },
  [],
  globSync(join(__dirname, '../../content/contributors/*')),
);

describe('visits', () => {
  ['/', '/events', '/posts', '/contributors', '/newsletters'].forEach(p =>
    it(`visited ${p}`, async () => {
      cy.visit(p);
    }),
  );

  // contributorIds.forEach(cId => {
  //   const slug = join('contributors', cId);
  //   it(`visited ${slug}`, async () => {
  //     cy.visit(slug, {timeout: 30000});
  //   });
  // });
});
