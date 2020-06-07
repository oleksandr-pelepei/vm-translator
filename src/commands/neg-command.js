const {ArithmeticCommand} = require('./arithmetic-command');

class NegCommand extends ArithmeticCommand {
  getOperationCode() {
    return 'M=-D // *x = -*y'
  }
}

module.exports = {
  NegCommand
}
