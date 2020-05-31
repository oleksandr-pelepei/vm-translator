const {AbstractCommand} = require('./abstract-command');

describe('AbstractCommand', () => {
  it('it should be defined', () => {
    expect(new (class extends AbstractCommand {})).toBeDefined();
  });

  describe('Method match', () => {
    it('should check if string matches the command regexp', () => {
      const Command = class extends AbstractCommand {
        static regexp = /^command regexp$/
      };

      expect(Command.match('command regexp')).toBe(true);
      expect(Command.match('not command regexp')).toBe(false);
    });
  });
});
