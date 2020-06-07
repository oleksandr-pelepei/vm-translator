const {PopCommandParser} = require('./pop-command-parser');
const {PopCommand} = require('../commands/pop-command');

describe('PopCommandParser', () => {
  let commandParser;
  let popCommandsFactory;

  beforeEach(() => {
    popCommandsFactory = {
      create() {}
    };
    commandParser = new PopCommandParser(popCommandsFactory);
  });

  it('should be defined', () => {
    expect(new PopCommandParser()).toBeDefined();
  });

  describe('Method match()', () => {
    it('should return true for pop commands strings', () => {
      expect(PopCommandParser.match('pop local 12')).toBeTruthy();
      expect(PopCommandParser.match('pop static 5')).toBeTruthy();
      expect(PopCommandParser.match('pop argument 5')).toBeTruthy();
    });
  });

  describe('Method parse()', () => {
    it('should parse command params and create a command via factory', () => {
      const createCommandSpy = spyOn(popCommandsFactory, 'create').and.returnValue(new PopCommand({}));

      const command = commandParser.parse('pop static 5');

      expect(command).toBeInstanceOf(PopCommand);
      expect(createCommandSpy).toHaveBeenCalledWith({
        i: 5,
        originalCommand: 'pop static 5',
        segment: 'static',
      })
    });
  });
});
