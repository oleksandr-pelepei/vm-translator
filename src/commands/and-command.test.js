const {AndCommand} = require('./and-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('AndCommand', () => {
  it('should be defined', () => {
    expect(new AndCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which computes x & y', () => {
      const command = new AndCommand();
      const exactedCode = prettifyAssemblyCode(`
        M=D&M // *x = *y & *x
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
