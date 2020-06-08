const {ArithmeticCommandFactory} = require('./arithmetic-command-factory');
const {AddCommand} = require('./add-command');
const {SubCommand} = require('./sub-command');
const {NegCommand} = require('./neg-command');
const {EqCommand} = require('./eq-command');
const {GtCommand} = require('./gt-command');
const {LtCommand} = require('./lt-command');
const {AndCommand} = require('./and-command');
const {OrCommand} = require('./or-command');
const {NotCommand} = require('./not-command');


describe('ArithmeticCommandFactory', () => {
  let factory;

  beforeEach(() => {
    factory = new ArithmeticCommandFactory()
  });

  it('should be defined', () => {
    expect(factory).toBeDefined();
  });

  describe('Method create()', () => {
    it('should return an AddCommand for "add" key', () => {
      expect(factory.create('add')).toBeInstanceOf(AddCommand);
    });

    it('should return an SubCommand for "sub" key', () => {
      expect(factory.create('sub')).toBeInstanceOf(SubCommand);
    });

    it('should return an NegCommand for "neg" key', () => {
      expect(factory.create('neg')).toBeInstanceOf(NegCommand);
    });

    it('should return an EqCommand for "eq" key', () => {
      expect(factory.create('eq')).toBeInstanceOf(EqCommand);
    });

    it('should return an GtCommand for "gt" key', () => {
      expect(factory.create('gt')).toBeInstanceOf(GtCommand);
    });

    it('should return an LtCommand for "lt" key', () => {
      expect(factory.create('lt')).toBeInstanceOf(LtCommand);
    });

    it('should return an AndCommand for "and" key', () => {
      expect(factory.create('and')).toBeInstanceOf(AndCommand);
    });

    it('should return an OrCommand for "or" key', () => {
      expect(factory.create('or')).toBeInstanceOf(OrCommand);
    });

    it('should return an NotCommand for "not" key', () => {
      expect(factory.create('not')).toBeInstanceOf(NotCommand);
    });
  });
});
