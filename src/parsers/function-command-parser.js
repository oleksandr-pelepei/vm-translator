const {AbstractCommandParser} = require('./abstract-command-parser');

class FunctionCommandParser extends AbstractCommandParser {
  static regexp = /^function\s([\w.]+)\s(\d+).*$/;

  constructor(functionCommandFactory) {
    super();

    this.functionCommandFactory = functionCommandFactory;
  }

  parse(commandString) {
    const matches = FunctionCommandParser.regexp.exec(commandString);

    return this.functionCommandFactory.create({
      funcName: matches[1],
      localCount: matches[2]
    });
  }
}

module.exports = {
  FunctionCommandParser
}
