const {ArithmeticCommand} = require('./arithmetic-command');

class AddCommand extends ArithmeticCommand {
  operation = 'add';

  getOperationCode() {
    return 'M=M+D // *x = *x + *y';
  }
}

module.exports = {
  AddCommand
}
