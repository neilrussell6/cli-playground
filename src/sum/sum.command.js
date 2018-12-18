const R = require('ramda')
const yargs = require('yargs')

const CommandEffects = require('./sum-command.effects')
const CommandUtils = require('./sum-command.utils')
const LoggerEffects = require('../common/logger/logger.effects')

const commandYargs = () => yargs
  .usage('sum [x] [y]')
  .positional('x', {
    required: true,
    description: 'first variable to sum',
    type: 'number',
  })
  .positional('y', {
    required: true,
    description: 'first variable to sum',
    type: 'number',
  })
  .check(R.compose(
    R.ifElse(
      R.compose(R.lt(0), R.length),
      (errors) => { throw new Error(R.head(errors)) },
      R.T,
    ),
    CommandUtils.getValidationErrors,
    CommandUtils.extractRequired,
  ))
  .help()
  .alias('h', 'help')

module.exports = [
  'sum',
  'sum commands',
  commandYargs,
  CommandEffects.sumAndLog(LoggerEffects),
]
