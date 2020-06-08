const {ArithmeticCommand} = require('./arithmetic-command');

class OrCommand extends ArithmeticCommand {
  operation = 'or';

  getOperationCode() {
    return 'M=D|M // *x = *y ^ *x';
  }
}

module.exports = {
  OrCommand
}
