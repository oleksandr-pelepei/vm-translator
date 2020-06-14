const {AbstractCommandParser} = require('./abstract-command-parser');
const {IfGotoCommand} = require('../commands');

class IfGotoParser extends AbstractCommandParser {
  static regexp = /^if-goto\s(\w+).*$/;

  parse(commandString) {
    const matches = IfGotoParser.regexp.exec(commandString);

    return new IfGotoCommand(matches[1]);
  }
}

module.exports = {
  IfGotoParser
}
