require('../methods/isContributor')
const {object, string, array} = require('yup')
const level = require('./level')

/*

title: First Post
description: the very first post in this blog
thumbnail: ./thumbnail.png
authors:
  - harry-solovay
tags:
  - tutorial
level: intermediate

*/

// make sure thumbnail exists
// validate that the thumbnail is correct type
// check that author IDs exist
// tags

module.exports = object().shape({
  title: string()
    .required()
    .min(1)
    .max(75),
  description: string()
    .required()
    .min(1)
    .max(250),
  thumbnail: string().required(),
  authors: array()
    .required()
    .min(1)
    .of(string().isContributor()),
  tags: array()
    .required()
    .min(1),
  level,
})
