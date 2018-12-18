const { assert } = require('chai')
const parametrize = require('js-parametrize')

const SUT = require('./sum-math.utils')

describe('sum-math utils', () => {
  describe('sumInts', () => {
    parametrize([
      [[1, 2], 3],
      [[1, 2, 3], 6],
      [[1, -20, 10, 3], -6],
    ], (args, expected) => {
      it('should provided ints', () => {
        // when ... we sum the provided args
        // then ... should return expected result
        assert.equal(SUT.sumInts(...args), expected)
      })
    })
  })
})
