class GotoCommand {
  constructor(label) {
    this.label = label;
  }

  translate() {
    return `
      // goto ${this.label}
      @${this.label}
      0;JMP
    `;
  }
}

module.exports = {
  GotoCommand
}
