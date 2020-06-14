const {AbstractCommandParser} = require('./abstract-command-parser');
const {GotoCommand} = require('../commands');

class GotoParser extends AbstractCommandParser {
  static regexp = /^goto\s(\w+).*$/;

  parse(commandString) {
    const matches = GotoParser.regexp.exec(commandString);

    return new GotoCommand(matches[1]);
  }
}

module.exports = {
  GotoParser
}
