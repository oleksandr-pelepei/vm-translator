const {EqCommand} = require('./eq-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('EqCommand', () => {
  it('should be defined', () => {
    expect(new EqCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which compares x == y', () => {
      const command = new EqCommand();
      const exactedCode = prettifyAssemblyCode(`
        M=M-D 
        M=!M // *x = *x == *y 
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
