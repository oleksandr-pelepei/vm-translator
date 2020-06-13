class CommentCommand {
  constructor(text) {
    this.text = text;
  }

  translate() {
    return `// ${this.text}`;
  }
}

module.exports = {
  CommentCommand
};
