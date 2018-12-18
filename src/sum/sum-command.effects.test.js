const sinon = require('sinon')

const SUT = require('./sum-command.effects')

describe('sum-command effects', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('sumAndLog', () => {
    it('should sum the provided input and printInt the result', () => {
      const logStub = sandbox.stub()
      const loggerMock = { log: logStub }

      // when ... we sum and log the following
      const data = {
        _: ['sum', 20, 33],
        abc: 'ABC',
        $0: 'src/index.js',
      }
      SUT.sumAndLog(loggerMock)(data)

      // then ... should correctly sum inputs and printInt the result
      sinon.assert.calledWith(logStub, 53)
    })
  })
})
