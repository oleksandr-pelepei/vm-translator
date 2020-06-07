const {StackCommand} = require('./stack-command');

class PopCommand extends StackCommand {
  translate() {
    return `
      // ${this.originalCommand}
      ${this.segment.translate()}
      @tmp
      M=D // *tmp = addr
      @SP
      A=A-1 // SP--
      D=M // D = *SP
      @tmp
      A=M // A = addr
      M=D // *addr = *SP
    `;
  }
}

module.exports = {
  PopCommand
}
