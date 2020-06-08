const {ArithmeticCommand} = require('./arithmetic-command');

class NotCommand extends ArithmeticCommand {
  operation = 'not';

  getOperationCode() {
    return 'M=!M // *x = !*x';
  }
}

module.exports = {
  NotCommand
}
