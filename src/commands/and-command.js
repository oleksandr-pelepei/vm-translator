const {ArithmeticCommand} = require('./arithmetic-command');

class AndCommand extends ArithmeticCommand {
  operation = 'and';

  getOperationCode() {
    return 'M=D&M // *x = *y & *x';
  }
}

module.exports = {
  AndCommand
}
