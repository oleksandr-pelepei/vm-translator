const {StackCommand} = require('./stack-command');

class PopCommand extends StackCommand {
  translate() {
    return `
      // ${this.originalCommand}
      ${this.segment.translate()}
      @addr
      M=D
      @SP
      M=M-1 // SP--
      A=M
      D=M // D = *SP
      @addr
      A=M
      M=D // *addr = *SP
    `;
  }
}

module.exports = {
  PopCommand
}
