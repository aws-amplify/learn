const {join} = require('path');
const {map} = require('ramda');

const TITLE =
  'Amplify Community –– a place to share projects, events, articles and other resources';
const SHORT_NAME = 'Amplify Community';
const SITE_URL = 'https://amplify.aws/community/';
const DESCRIPTION =
  'A place to share projects, events, articles and other resources';

const GITHUB = 'https://github.com/aws-amplify';
const TWITTER = 'https://twitter.com/AWSAmplify';
const YOUTUBE = 'https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg';

const BACKGROUND_COLOR = '#f29d38';
const THEME_COLOR = '#f1d148';
const ICON_PATH = join(__dirname, 'src/assets/images/icon.png');

const siteMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  siteUrl: SITE_URL,
  social: {
    github: GITHUB,
    twitter: TWITTER,
    youtube: YOUTUBE,
  },
};

const moduleResolution = {
  resolve: 'gatsby-plugin-module-resolver',
  options: {
    root: '.',
    aliases: {
      '~': './src',
    },
  },
};

const sourceNames = [
  'contributors',
  'posts',
  'events',
  'newsletter-injections',
  'misc',
];
const dataSources = map(
  name => ({
    resolve: 'gatsby-source-filesystem',
    options: {
      name,
      path: join(__dirname, `content/${name}`),
      ignore: ['**/README.md'],
    },
  }),
  sourceNames,
);

const mapping = {
  'MarkdownRemark.fields.authors': 'MarkdownRemark.fields.id',
  'MarkdownRemark.fields.attendants': 'MarkdownRemark.fields.id',
  'MarkdownRemark.frontmatter.posts.post': 'MarkdownRemark.fields.id',
};

const markdownTransformer = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      'gatsby-remark-images',
      'gatsby-remark-responsive-iframe',
      'gatsby-plugin-twitter',
      'gatsby-remark-embed-video',
      'gatsby-remark-embed-gist',
      'gatsby-remark-prismjs',
      'gatsby-remark-copy-linked-files',
      'gatsby-remark-smartypants',
    ],
  },
};

// prettier-ignore
const imageTransformers = [
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
]

const emotion = {
  resolve: 'gatsby-plugin-emotion',
  // options: {
  //   labelFormat: '[dirname]-[filename]-[local]',
  // },
};

const manifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: TITLE,
    short_name: SHORT_NAME,
    start_url: '/community/',
    display: 'minimal-ui',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icon: ICON_PATH,
  },
};

// const favicon = {
//   resolve: `gatsby-plugin-favicon`,
//   options: {
//     logo: ICON_PATH,
//     appName: 'Amplify Community',
//     dir: 'auto',
//     lang: 'en-US',
//     background: '#fff',
//     theme_color: '#fff',
//     display: 'standalone',
//     orientation: 'any',
//     start_url: '/',
//     version: '1.0',
//     icons: {
//       android: true,
//       appleIcon: true,
//       appleStartup: true,
//       coast: false,
//       favicons: true,
//       firefox: true,
//     },
//   },
// };

const misc = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-offline',
  'gatsby-plugin-webpack-bundle-analyzer',
];

module.exports = {
  siteMetadata,
  pathPrefix: '/community',
  mapping,
  plugins: [
    moduleResolution,
    ...dataSources,
    markdownTransformer,
    ...imageTransformers,
    emotion,
    manifest,
    ...misc,
    // favicon,
  ],
};
