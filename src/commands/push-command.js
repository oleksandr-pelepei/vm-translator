const {StackCommand} = require('./stack-command');

class PushCommand extends StackCommand {
  translate() {
    return `
      // ${this.originalCommand}
      ${this.segment.translate()}
      A=D
      D=M // *addr
      @SP
      M=D // *SP = *addr
      A=A+1 // SP++
    `;
  }
}

module.exports = {
  PushCommand
}
