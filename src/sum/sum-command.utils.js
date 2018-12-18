const R = require('ramda')

const { ERROR_REQUIRED } = require('./sum.constants')

// extractRequired :: Obj -> [Int, Int]
const extractRequired = R.compose(
  R.values,
  R.slice(1, 3),
  R.prop('_'),
)

module.exports.extractRequired = extractRequired

// getValidationErrors :: [Int] -> [String]
const getValidationErrors = requiredInput => (
  requiredInput.length < 2
    ? [ERROR_REQUIRED]
    : []
)

module.exports.getValidationErrors = getValidationErrors
