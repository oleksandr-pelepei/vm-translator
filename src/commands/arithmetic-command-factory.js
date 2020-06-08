const {AddCommand} = require('./add-command');
const {SubCommand} = require('./sub-command');
const {NegCommand} = require('./neg-command');
const {EqCommand} = require('./eq-command');
const {GtCommand} = require('./gt-command');
const {LtCommand} = require('./lt-command');
const {AndCommand} = require('./and-command');
const {OrCommand} = require('./or-command');
const {NotCommand} = require('./not-command');

class ArithmeticCommandFactory {
  create(commandKey) {
    switch (commandKey) {
      case 'add':
        return new AddCommand();
      case 'sub':
        return new SubCommand();
      case 'neg':
        return new NegCommand();
      case 'eq':
        return new EqCommand();
      case 'gt':
        return new GtCommand();
      case 'lt':
        return new LtCommand();
      case 'and':
        return new AndCommand();
      case 'or':
        return new OrCommand();
      case 'not':
        return new NotCommand();
    }
  }
}

module.exports = {ArithmeticCommandFactory};
