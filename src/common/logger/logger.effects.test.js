const sinon = require('sinon')

const SUT = require('./logger.effects')

describe('logger effects', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('log', () => {
    it('should print out the provided int as expected', () => {
      const logStub = sandbox.stub(console, 'log')

      // when ... we print the following int
      SUT.log(23)

      // then ... should log as expected
      sinon.assert.calledWith(logStub, 'result is : 23')

      logStub.restore()
    })
  })
})
