class LabelCommand {
  constructor(name) {
    this.name = name;
  }

  translate() {
    return `
      // label ${this.name}
      (${this.name})
    `;
  }
}

module.exports = {
  LabelCommand
}
