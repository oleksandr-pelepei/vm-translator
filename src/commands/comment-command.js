const {AbstractCommand} = require('./abstract-command');

class CommentCommand extends AbstractCommand {
  static regexp = /^\/\/.*$/;

  translate() {
    return '';
  }
}

module.exports = {
  CommentCommand
};
