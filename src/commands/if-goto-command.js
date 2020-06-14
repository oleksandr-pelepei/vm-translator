class IfGotoCommand {
  constructor(label) {
    this.label = label;
  }

  translate() {
    return `
      // if-goto ${this.label}
      @SP
      M=M-1
      A=M
      D=M
      @${this.label}
      D=D;JNE
    `;
  }
}

module.exports = {
  IfGotoCommand
}
