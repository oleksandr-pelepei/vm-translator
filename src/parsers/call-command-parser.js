const {AbstractCommandParser} = require('./abstract-command-parser');

class CallCommandParser extends AbstractCommandParser {
  static regexp = /^call\s([\w.]+)\s(\d+).*$/;

  constructor(callCommandFactory) {
    super();

    this.callCommandFactory = callCommandFactory;
  }

  parse(commandString) {
    const matches = CallCommandParser.regexp.exec(commandString);

    return this.callCommandFactory.create({
      calee: matches[1],
      argsCount: matches[2]
    });
  }
}

module.exports = {
  CallCommandParser
}
