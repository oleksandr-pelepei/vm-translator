const {StackCommand} = require('./stack-command');

class PushCommand extends StackCommand {
  translate() {
    return `
      // ${this.originalCommand}
      ${this.segment.translate()}
      A=D
      D=M // *addr
      @SP
      A=M
      M=D // *SP = *addr
      @SP
      M=M+1 // SP++
    `;
  }
}

module.exports = {
  PushCommand
}
