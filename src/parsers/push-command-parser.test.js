const {PushCommandParser} = require('./push-command-parser');
const {PushCommand} = require('../commands');

describe('PushCommandParser', () => {
  let commandParser;
  let pushCommandsFactory;

  beforeEach(() => {
    pushCommandsFactory = {
      create() {}
    };
    commandParser = new PushCommandParser(pushCommandsFactory);
  });

  it('should be defined', () => {
    expect(commandParser).toBeDefined()
  });

  describe('Method match()', () => {
    it('should return true for push commands strings', () => {
      expect(PushCommandParser.match('push constant 2')).toBeTruthy();
      expect(PushCommandParser.match('push local 12')).toBeTruthy();
      expect(PushCommandParser.match('push static 5')).toBeTruthy();
    });
  });

  describe('Method parse()', () => {
    it('should parse command params and create a command via factory', () => {
      const createCommandSpy = spyOn(pushCommandsFactory, 'create').and.returnValue(new PushCommand());

      const command = commandParser.parse('push local 12');

      expect(command).toBeInstanceOf(PushCommand);
      expect(createCommandSpy).toHaveBeenCalledWith({
        i: 12,
        originalCommand: 'push local 12',
        segment: 'local',
      })
    });
  });
});
