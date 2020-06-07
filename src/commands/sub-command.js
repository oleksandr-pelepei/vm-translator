const {ArithmeticCommand} = require('./arithmetic-command');

class SubCommand extends ArithmeticCommand {
  operation = 'sub';

  getOperationCode() {
    return 'M=M-D // *x = *x - *y';
  }
}

module.exports = {
  SubCommand
}
