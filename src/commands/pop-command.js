const {StackCommand} = require('./stack-command');

class PopCommand extends StackCommand {
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
