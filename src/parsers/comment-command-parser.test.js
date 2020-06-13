const {CommentCommandParser} = require('./comment-command-parser');
const {CommentCommand} = require('../commands');

describe('CommentCommandParser', () => {
  let commandParser;
  let commentCommandFactory;

  beforeEach(() => {
    commentCommandFactory = {
      create() {}
    };
    commandParser = new CommentCommandParser(commentCommandFactory);
  });

  it('should be defined', () => {
    expect(commandParser).toBeDefined()
  });

  describe('Method match()', () => {
    it('should return true for arithmetic commands strings', () => {
      expect(CommentCommandParser.match('//')).toBeTruthy();
      expect(CommentCommandParser.match('//  ')).toBeTruthy();
      expect(CommentCommandParser.match('// sdd sd ')).toBeTruthy();
    });
  });

  describe('Method parse()', () => {
    it('should parse command params and create a command via factory', () => {
      const expectedCommand = new CommentCommand();
      const createCommandSpy = spyOn(commentCommandFactory, 'create').and.returnValue(expectedCommand);

      const command = commandParser.parse('// some comment');

      expect(command).toBe(expectedCommand);
      expect(createCommandSpy).toHaveBeenCalledWith('some comment')
    });
  });
});
