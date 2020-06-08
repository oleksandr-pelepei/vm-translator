const {OrCommand} = require('./or-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('OrCommand', () => {
  it('should be defined', () => {
    expect(new OrCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which computes x ^ y', () => {
      const command = new OrCommand();
      const exactedCode = prettifyAssemblyCode(`
        M=D|M // *x = *y ^ *x
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
