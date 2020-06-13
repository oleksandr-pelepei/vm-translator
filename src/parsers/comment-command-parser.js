const {AbstractCommandParser} = require('./abstract-command-parser');

class CommentCommandParser extends AbstractCommandParser {
  static regexp = /^\/\/(.*)$/;

  constructor(commandFactory) {
    super();

    this.commandFactory = commandFactory;
  }

  parse(commandString) {
    const matches = CommentCommandParser.regexp.exec(commandString);

    return this.commandFactory.create(matches[1].trim());
  }
}

module.exports = {
  CommentCommandParser
}
