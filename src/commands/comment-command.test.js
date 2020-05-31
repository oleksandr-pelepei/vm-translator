const {CommentCommand} = require('./comment-command');

describe('CommentCommand', () => {
  it('should be defined', () => {
    expect(new CommentCommand()).toBeDefined();
  });

  describe('Method match', () => {
    it('should return true for comment strings', () => {
      expect(CommentCommand.match('//')).toBeTruthy();
      expect(CommentCommand.match('//some comment')).toBeTruthy();
      expect(CommentCommand.match('// some comment')).toBeTruthy();
    });

    it('should return false for non-comment strings and comments in invalid format', () => {
      expect(CommentCommand.match('/')).toBeFalsy();
      expect(CommentCommand.match('/ /')).toBeFalsy();
      expect(CommentCommand.match('/ Some comment /')).toBeFalsy();
      expect(CommentCommand.match('/ //')).toBeFalsy();
      expect(CommentCommand.match('Some comment //')).toBeFalsy();
    });
  })

  describe('Method translate', () => {
    it('should return empty string', () => {
      expect(new CommentCommand().translate()).toBe('');
    });
  });
});
