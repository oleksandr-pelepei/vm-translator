const {CommentCommand} = require('./comment-command');

describe('CommentCommand', () => {
  it('should be defined', () => {
    expect(new CommentCommand()).toBeDefined();
  });

  describe('Method translate', () => {
    it('should return comment string', () => {
      expect(new CommentCommand('comment').translate()).toBe('// comment');
    });
  });
});
