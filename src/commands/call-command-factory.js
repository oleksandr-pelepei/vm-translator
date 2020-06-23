const {CallCommand} = require('./call-command');

class CallCommandFactory {
  constructor(pushCommandFactory) {
    this.pushCommandFactory = pushCommandFactory;
  }

  create(opts) {
    const {calee, argsCount} = opts;

    return new CallCommand({
      calee,
      argsCount,
      pushCommandFactory: this.pushCommandFactory
    });
  }
}

module.exports = {
  CallCommandFactory
}
