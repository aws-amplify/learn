// const axios = require('axios');
const {join: joinPaths} = require('path');
const {writeFileSync, mkdirSync} = require('fs');
const {
  join,
  values,
  mapObjIndexed,
  filter,
  complement,
  either,
  isEmpty,
  split,
  map,
  isNil,
} = require('ramda');
const ogs = require('open-graph-scraper');
const {kebab} = require('case');
const {generate} = require('shortid');
const axios = require('axios');

const categoryBySelection = {
  event: 'events',
  post: 'posts',
  'newsletter snippet': 'newsletter-snippets',
};

module.exports = toolbox =>
  Object.assign(toolbox, {
    contribution: {
      prompt: async () => {
        const {id: userId} = toolbox.user;

        const {category: categorySelection} = await toolbox.prompt.ask({
          type: 'select',
          name: 'category',
          message: 'Enter the contribution type.',
          choices: ['event', 'post', 'newsletter snippet'],
        });

        const {date} = await toolbox.prompt.ask({
          type: 'input',
          name: 'date',
          message: `Enter the ${categorySelection} date in the following format: YYYY-MM-DD`,
        });

        if (categorySelection === 'newsletter snippet') {
          const contributionPath = joinPaths(
            __dirname,
            '../../../content/newsletters',
            `${join('-', [date, generate()])}.md`,
          );
          writeFileSync(contributionPath, '', 'utf-8');
          toolbox.print.success(
            `Generated MD file for you to edit, push & PR: ${contributionPath}`,
          );
        } else {
          const {href} = await toolbox.prompt.ask({
            type: 'input',
            name: 'href',
            message: `What is the URL of your ${categorySelection}? Leave blank if not an external post.`,
          });

          const {data, error} = await new Promise((resolve, reject) => {
            ogs(
              {url: href, followAllRedirects: true, maxRedirects: 10},
              (e, r) => {
                r && resolve(r);
                e && reject(e);
              },
            );
          });

          if (error) throw error;

          const {
            ogTitle,
            ogDescription,
            ogImage,
            twitterTitle,
            twitterDescription,
            twitterImage,
          } = data;

          const title = ogTitle || twitterTitle;
          const description = ogDescription || twitterDescription;
          const bannerUrls = ogImage || twitterImage;
          const bannerUrl = Array.isArray(bannerUrls)
            ? bannerUrls[0].url
            : bannerUrls.url;

          const {data: bannerBuff} = await axios.request({
            method: 'GET',
            url: bannerUrl,
            responseType: 'arraybuffer',
          });

          const contributionPath = joinPaths(
            __dirname,
            '../../../content',
            categoryBySelection[categorySelection],
            join('-', [date, kebab(title)]),
          );

          const bannerPath = joinPaths(contributionPath, 'banner.jpg');
          const markdownPath = joinPaths(contributionPath, 'index.md');

          const uniqueFields = {};

          switch (categorySelection) {
            case 'event': {
              uniqueFields.attendantIds = `
  - ${userId}            
`;
              const {country, city} = await toolbox.prompt.ask([
                {
                  type: 'input',
                  name: 'country',
                  message: `Enter the name of the country in which the event will take place.`,
                },
                {
                  type: 'input',
                  name: 'city',
                  message: `Enter the name of the city in which the event will take place.`,
                },
              ]);

              const contents = join('\n', [
                '---\nbanner: ./banner.jpg',
                ...values(
                  mapObjIndexed(
                    (value, key) => `${key}: ${value}`,
                    filter(complement(either(isEmpty, isNil)), {
                      title,
                      description,
                      country,
                      city,
                    }),
                  ),
                ),
                '---',
              ]);

              mkdirSync(contributionPath);
              writeFileSync(markdownPath, contents, 'utf-8');
              toolbox.print.success(
                `Generated MD file for you to edit, push & PR: ${markdownPath}`,
              );

              break;
            }

            case 'post': {
              uniqueFields.authorIds = `
  - ${userId}
`;

              const {platforms, categories} = map(
                e =>
                  join(
                    '',
                    map(
                      v => `
  - ${v}`,
                      split(',', e),
                    ),
                  ),
                await toolbox.prompt.ask([
                  {
                    type: 'input',
                    name: 'platforms',
                    message: `What platforms are relevant to this post? (please input as comma-separated values)`,
                  },
                  {
                    type: 'input',
                    name: 'categories',
                    message: `What categories are relevant to this post? (please input as comma-separated values)`,
                  },
                ]),
              );

              const contents = join('\n', [
                '---\nbanner: ./banner.jpg',
                ...values(
                  mapObjIndexed(
                    (value, key) => `${key}: ${value}`,
                    filter(complement(either(isEmpty, isNil)), {
                      title,
                      description,
                      platforms,
                      categories,
                    }),
                  ),
                ),
                '---',
              ]);

              mkdirSync(contributionPath);
              writeFileSync(markdownPath, contents, 'utf-8');
              toolbox.print.success(
                `Generated MD file for you to edit, push & PR: ${markdownPath}`,
              );

              break;
            }

            default: {
              throw new Error(
                `Strange––you shouldn't be seeing this message. Can you please file an issue with the fields that you entered.`,
              );
            }
          }

          writeFileSync(bannerPath, bannerBuff);
        }
      },
    },
  });
