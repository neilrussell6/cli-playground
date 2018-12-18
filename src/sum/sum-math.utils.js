const R = require('ramda')

// sumInts :: Int -> Int -> Int
const sumInts = (...args) => (
  R.reduce((acc, x) => acc + x, 0)(args)
)

module.exports.sumInts = sumInts
