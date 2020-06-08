const {NotCommand} = require('./not-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('NotCommand', () => {
  it('should be defined', () => {
    expect(new NotCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which computes not x', () => {
      const command = new NotCommand();
      const exactedCode = prettifyAssemblyCode(`
        M=!M // *x = !*x
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
