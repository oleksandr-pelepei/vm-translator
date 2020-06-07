const {ArithmeticCommand} = require('./arithmetic-command');

class EqCommand extends ArithmeticCommand {
  getOperationCode() {
    return `
      M=M-D 
      M=!M // *x = *x == *y 
    `;
  }
}

module.exports = {
  EqCommand
}
