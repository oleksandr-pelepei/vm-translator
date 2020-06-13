const {NotCommand} = require('./not-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('NotCommand', () => {
  it('should be defined', () => {
    expect(new NotCommand()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which computes not x', () => {
      const command = new NotCommand();
      const exactedCode = prettifyAssemblyCode(`
        // not
        @SP
        A=M
        A=A-1
        M=!M
      `);

      const resultCode = prettifyAssemblyCode(command.translate());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
