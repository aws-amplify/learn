const {join} = require('path')
const {sync: globSync} = require('glob')
const {readFileSync} = require('fs')
const matter = require('gray-matter')

const validateContributor = frontmatter => {}
const validateEvent = frontmatter => {}
const validatePost = frontmatter => {}

const validationsByCategory = {
  contributors: validateContributor,
  events: validateEvent,
  posts: validatePost,
}

const validate = async path => {
  const contents = readFileSync(path, 'utf8')
  const frontmatter = matter(contents)
  const pathPieces = path.split('/')
  const category = pathPieces[pathPieces.length - 3]
  validationsByCategory[category](frontmatter)
}

const matcher = join(__dirname, '../content/**/*.md')
const matches = globSync(matcher)

matches.forEach(validate)
