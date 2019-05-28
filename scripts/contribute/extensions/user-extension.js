const axios = require('axios');
const {join: joinPaths} = require('path');
const {writeFileSync, mkdirSync} = require('fs');
const {
  identity,
  includes,
  mapObjIndexed,
  join,
  values,
  isEmpty,
  isNil,
  complement,
  filter,
  anyPass,
  either,
} = require('ramda');
const {contributorExists} = require('../../utilities');

module.exports = toolbox => {
  toolbox.user = {};

  const user = {};
  const finalizations = [identity];

  const prompt = async () => {
    const {gitHubId} = await toolbox.prompt.ask({
      type: 'input',
      name: 'gitHubId',
      message: 'Enter the associated GitHub ID.',
    });

    if (gitHubId) {
      try {
        const {
          error,
          data: {avatar_url, name, blog: href, bio},
        } = await axios.get(
          `https://api.github.com/users/${gitHubId}?client_id=xxxx&client_secret=yyyy`,
        );

        // const error = false;
        // const avatar_url =
        //   'https://avatars1.githubusercontent.com/u/4893548?s=460&v=4';
        // const name = 'Harry Solovay';
        // const href = 'https://twitter.com/hsolvz';
        // const bio =
        //   'Sometimes I think––if JavaScript was a person––we’d be friends';

        if (error) throw new Error(`No GitHub user with ID of "${gitHubId}"`);

        if (!contributorExists(gitHubId)) {
          toolbox.print.info('Adding new contributor');

          Object.assign(user, {
            github: `https://github.com/${gitHubId}`,
            name,
            bio,
            ...(includes('twitter.com', href)
              ? {
                  website: (await toolbox.prompt.ask({
                    type: 'input',
                    name: 'website',
                    message: `Enter a website––other than Twitter––associated with this GitHub ID. Leave blank to skip.`,
                  })).website,
                  twitter: href,
                }
              : {
                  website: href,
                  twitter: (await toolbox.prompt.ask({
                    type: 'input',
                    name: 'twitter',
                    message: `Enter the Twitter handle associated with this GitHub ID. Leave blank to skip.`,
                  })).twitter,
                }),
          });

          const contributorPath = joinPaths(
            __dirname,
            '../../../content/contributors',
            gitHubId,
          );

          const avatarPath = joinPaths(contributorPath, 'avatar.jpg');
          const markdownPath = joinPaths(contributorPath, 'index.md');

          try {
            const {data} = await axios.request({
              method: 'GET',
              url: avatar_url,
              responseType: 'arraybuffer',
            });

            const contents = join('\n', [
              '---\navatar: ./avatar.jpg',
              ...values(
                mapObjIndexed(
                  (value, key) => `${key}: ${value}`,
                  filter(complement(either(isEmpty, isNil)), user),
                ),
              ),
              '---',
            ]);

            console.log(contents);

            finalizations.push(() => {
              // create MD file
              mkdirSync(contributorPath);
              writeFileSync(markdownPath, contents, 'utf-8');
              writeFileSync(avatarPath, data);
            });
          } catch (e) {
            throw e;
          }
        }
      } catch (e) {
        throw e;
      }

      toolbox.user.id = gitHubId;
    } else {
      return prompt();
    }
  };

  toolbox.user.finalize = () => finalizations.forEach(fn => fn());
  toolbox.user.prompt = prompt;
};
