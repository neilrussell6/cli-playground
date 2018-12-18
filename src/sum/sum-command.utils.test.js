const { assert } = require('chai')
const parametrize = require('js-parametrize')

const { ERROR_REQUIRED } = require('./sum.constants')
const SUT = require('./sum-command.utils')

describe('sum-command utils', () => {
  describe('extractRequired', () => {
    parametrize([
      [['sum', 1, 2], [1, 2]],
      [['sum', 11, 22, 33], [11, 22]],
    ], (positionals, expected) => {
      it('should extract input required for sum command as expected', () => {
        // when ... we extract the input required for sum command
        // then ... should return the second and third positionals
        const data = {
          _: positionals,
          abc: 'ABC',
          $0: 'src/index.js',
        }
        assert.deepEqual(SUT.extractRequired(data), expected)
      })
    })
  })

  describe('getValidationErrors', () => {
    parametrize([
      [[1, 2], []],
      [[1, 2, 3], []],
      [[123], [ERROR_REQUIRED]],
    ], (requiredInput, expected) => {
      it('should return expected validation errors for provided input', () => {
        // when ... we get validation errors for the provided input
        // then ... should return expected array of messages
        assert.deepEqual(SUT.getValidationErrors(requiredInput), expected)
      })
    })
  })
})
