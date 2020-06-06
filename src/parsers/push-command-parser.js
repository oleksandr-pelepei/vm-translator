const { AbstractCommandParse } = require('./abstract-command-parse');

class PushCommandParser extends AbstractCommandParse {
  static regexp = /^push\s(\w+)\s(\d+)$/;

  constructor(pushCommandFactory) {
    super();

    this.pushCommandFactory = pushCommandFactory;
  }

  /**
   * @return {PushCommand}
   */
  parse(commandString) {
    const matches = PushCommandParser.regexp.exec(commandString);

    return this.pushCommandFactory.create({
      segment: matches[1],
      i: parseInt(matches[2]),
      originalCommand: commandString
    });
  }
}

module.exports = {
  PushCommandParser
}
