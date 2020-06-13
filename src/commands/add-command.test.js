const {AddCommand} = require('./add-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('AddCommand', () => {
  it('should be defined', () => {
    expect(new AddCommand()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which adds two last stack values', () => {
      const command = new AddCommand();
      const exactedCode = prettifyAssemblyCode(`
        // add
        @SP
        M=M-1 // SP--
        A=M
        D=M // D = *y
        A=A-1 // x = SP-2
        M=M+D // *x = *x + *y 
      `);

      const resultCode = prettifyAssemblyCode(command.translate());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
