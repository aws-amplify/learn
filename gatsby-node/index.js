const {lifeCycleStages} = require('./constants')

module.exports = lifeCycleStages.reduce(
  (exportsStage, moduleName) => ({
    ...exportsStage,
    [moduleName]: require(`./${moduleName}`),
  }),
  {},
)
