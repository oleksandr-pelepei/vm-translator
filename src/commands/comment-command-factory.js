const {CommentCommand} = require('./comment-command');

class CommentCommandFactory {
  create(text) {
    return new CommentCommand(text);
  }
}

module.exports = {
  CommentCommandFactory
}
