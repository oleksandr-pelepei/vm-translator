const {ArithmeticCommand} = require('./arithmetic-command');

class NegCommand extends ArithmeticCommand {
  operation = 'neg';

  getOperationCode() {
    return 'M=-D // *x = -*y'
  }
}

module.exports = {
  NegCommand
}
