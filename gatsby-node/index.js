const {reduce, assoc} = require('ramda');
const {lifeCycleStages} = require('./constants');

module.exports = reduce(
  (exportsStage, moduleName) =>
    assoc(moduleName, require(`./${moduleName}`), exportsStage),
  {},
  lifeCycleStages,
);
