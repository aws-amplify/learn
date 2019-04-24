const {join} = require('path')

const TITLE = 'Amplify –– an easy-to-use toolchain for building on AWS'
const SHORT_NAME = 'AWS Amplify'
const SITE_URL = 'aws-amplify.com'
const DESCRIPTION =
  'Documentation, news, and community updates relating to AWS Amplify'

const GITHUB = 'https://github.com/aws-amplify'
const TWITTER = 'https://twitter.com/AWSAmplify'
const YOUTUBE = 'https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg'

const BACKGROUND_COLOR = '#f29d38'
const THEME_COLOR = '#f1d148'
const ICON_PATH = join(__dirname, 'src/assets/images/icon.png')

const siteMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  siteUrl: SITE_URL,
  social: {
    github: GITHUB,
    twitter: TWITTER,
    youtube: YOUTUBE,
  },
}

const sourceNames = ['contributors', 'posts', 'events', 'newsletters', 'misc']
const sources = sourceNames.map(name => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    name,
    path: join(__dirname, `content/${name}`),
  },
}))

const mapping = {
  'MarkdownRemark.fields.authors': 'MarkdownRemark.fields.id',
  'MarkdownRemark.fields.attendants': 'MarkdownRemark.fields.id',
}

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
}

// prettier-ignore
const imageTransformers = [
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
]

const emotion = {
  resolve: 'gatsby-plugin-emotion',
  options: {
    labelFormat: '[dirname]-[filename]-[local]',
  },
}

const manifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: TITLE,
    short_name: SHORT_NAME,
    start_url: '/',
    display: 'minimal-ui',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icon: ICON_PATH,
  },
}

const misc = ['gatsby-plugin-offline']

module.exports = {
  siteMetadata,
  mapping,
  plugins: [
    ...sources,
    markdownTransformer,
    ...imageTransformers,
    emotion,
    manifest,
    ...misc,
  ],
}
