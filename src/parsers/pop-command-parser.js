const {AbstractCommandParser} = require('./abstract-command-parser');

class PopCommandParser extends AbstractCommandParser {
  static regexp = /^pop\s(\w+)\s(\d+).*$/;

  constructor(popCommandFactory) {
    super();

    this.popCommandFactory = popCommandFactory;
  }

  /**
   * @return {PushCommand}
   */
  parse(commandString) {
    const matches = PopCommandParser.regexp.exec(commandString);

    return this.popCommandFactory.create({
      segment: matches[1],
      i: parseInt(matches[2]),
      originalCommand: commandString
    });
  }
}

module.exports = {
  PopCommandParser
}
