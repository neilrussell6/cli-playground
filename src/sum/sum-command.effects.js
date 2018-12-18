const R = require('ramda')

const MathUtils = require('./sum-math.utils')
const CommandUtils = require('./sum-command.utils')

// sumAndLog :: Logger -> Obj -> Effect Logger.log
const sumAndLog = logger => R.compose(
  logger.log,
  R.apply(MathUtils.sumInts),
  CommandUtils.extractRequired,
)

module.exports.sumAndLog = sumAndLog
