const NodeEnvironment = require('jest-environment-node').TestEnvironment;
const Aerospike = require('aerospike');
class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
    this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    await super.setup();
    this.global.__SHARED_MODULE__ = Aerospike;

  }

  async teardown() {
    this.global.__SHARED_MODULE__.releaseEventLoop()
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }

}

module.exports = CustomEnvironment;