const {AbstractCommandParser} = require('./abstract-command-parser');
const {LabelCommand} = require('../commands');

class LabelParser extends AbstractCommandParser {
  static regexp = /^label\s(\w+).*$/;

  parse(commandString) {
    const matches = LabelParser.regexp.exec(commandString);

    return new LabelCommand(matches[1]);
  }
}

module.exports = {
  LabelParser
}
