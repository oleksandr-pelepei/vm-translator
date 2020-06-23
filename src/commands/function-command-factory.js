const {FunctionCommand} = require('./function-command');

class FunctionCommandFactory {
  constructor(pushCommandFactory) {
    this.pushCommandFactory = pushCommandFactory;
  }

  create(opts) {
    const {funcName, localCount} = opts;

    return new FunctionCommand({
      funcName,
      localCount,
      pushCommandFactory: this.pushCommandFactory
    });
  }
}

module.exports = {
  FunctionCommandFactory
}
