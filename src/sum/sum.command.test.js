const sinon = require('sinon')
const chai = require('chai')
const { spawnSync } = require('child_process')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const { assert } = chai

describe('sum command', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('sum', () => {
    it('should print summary as expected', async () => {
      const result = await spawnSync('node', ['src/index.js', 'sum', 1, 2])
      assert.equal(result.stdout.toString(), 'result is : 3\n')
    })

    it('should print errors if invalid input is provided', async () => {
      const result = await spawnSync('node', ['src/index.js', 'sum'])
      assert.match(result.stderr.toString(), /provide both x and y/gm)
    })
  })
})
