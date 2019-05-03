const {join} = require('path')
const {sync: globSync} = require('glob')
const {addMethod, string} = require('yup')

const matcher = join(__dirname, '../../../content/contributors/*')
const matched = globSync(matcher)
const ids = matched.reduce((accumulator, path) => {
  const id = path.split('/').pop()
  return {...accumulator, [id]: true}
}, {})

addMethod(string, 'isContributor', function() {
  return this.test(
    'contributor exists',
    'contributor does not exist',
    value => {
      const {createError} = this
      return ids[value] || createError('some error message')
    },
  )
})
