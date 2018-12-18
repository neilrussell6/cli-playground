const yargs = require('yargs')

const { command: sumCommand } = require('./sum')

const run = () => yargs
  .usage('Command line tool')
  .version('0.1.0')
  .command(...sumCommand)
  .help()
  .alias('h', 'help')
  .argv

if (require.main === module) {
  run()
}
