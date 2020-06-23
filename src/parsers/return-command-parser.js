const {AbstractCommandParser} = require('./abstract-command-parser');
const {ReturnCommand} = require('../commands');

class ReturnCommandParser extends AbstractCommandParser {
  static regexp = /^return.*$/;

  parse() {
    return new ReturnCommand();
  }
}

module.exports = {
  ReturnCommandParser
}
