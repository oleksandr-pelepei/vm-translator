const {AbstractCommandParser} = require('./abstract-command-parser');

class ArithmeticCommandParser extends AbstractCommandParser {
  static regexp = /^(add|sub|neg|eq|gt|lt|and|or|not)\s?.*$/;

  constructor(commandFactory) {
    super();

    this.commandFactory = commandFactory;
  }

  parse(commandString) {
    const matches = ArithmeticCommandParser.regexp.exec(commandString);

    return this.commandFactory.create(matches[1]);
  }
}

module.exports = {
  ArithmeticCommandParser
}
