const {ArithmeticCommandParser} = require('./arithmetic-command-parser');
const {AddCommand} = require('../commands');

describe('ArithmeticCommandParser', () => {
  let commandParser;
  let arithmeticCommandFactory;

  beforeEach(() => {
    arithmeticCommandFactory = {
      create() {}
    };
    commandParser = new ArithmeticCommandParser(arithmeticCommandFactory);
  });

  it('should be defined', () => {
    expect(commandParser).toBeDefined()
  });

  describe('Method match()', () => {
    it('should return true for arithmetic commands strings', () => {
      expect(ArithmeticCommandParser.match('and')).toBeTruthy();
      expect(ArithmeticCommandParser.match('sub')).toBeTruthy();
      expect(ArithmeticCommandParser.match('eq')).toBeTruthy();
    });
  });

  describe('Method parse()', () => {
    it('should parse command params and create a command via factory', () => {
      const expectedCommand = new AddCommand();
      const createCommandSpy = spyOn(arithmeticCommandFactory, 'create').and.returnValue(expectedCommand);

      const command = commandParser.parse('add');

      expect(command).toBe(expectedCommand);
      expect(createCommandSpy).toHaveBeenCalledWith('add')
    });
  });
});
