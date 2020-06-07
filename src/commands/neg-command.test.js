const {NegCommand} = require('./neg-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('NegCommand', () => {
  it('should be defined', () => {
    expect(new NegCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which negates y value', () => {
      const command = new NegCommand();
      const exactedCode = prettifyAssemblyCode(`
        M=-D // *x = -*y 
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
