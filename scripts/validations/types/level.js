const {mixed} = require('yup')

module.exports = mixed().oneOf(['beginner', 'intermediate', 'advanced'])
