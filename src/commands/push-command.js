class PushCommand {
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
      M=D // *SP = *addr
      A=A+1 // *SP++
    `;
  }
}

module.exports = {
  PushCommand
}
