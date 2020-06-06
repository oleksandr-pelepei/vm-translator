class PopCommand {
  constructor(opts) {
    const {segment, originalCommand} = opts;

    this.segment = segment;
    this.originalCommand = originalCommand;
  }

  translate() {
    return `
      // ${this.originalCommand}
      ${this.segment.translate()}
      @SP
      A=A+1 // SP--
      M=D // *SP = *addr
    `;
  }
}

module.exports = {
  PopCommand
}
