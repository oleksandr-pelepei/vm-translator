const {ArithmeticCommand} = require('./arithmetic-command');
const {prettifyAssemblyCode} = require('../../tests/utils');


describe('ArithmeticCommand', () => {
  it('should be defined', () => {
    expect(new ArithmeticCommand()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should generate stack operations assembly code and delegate generation of ' +
      'arithmetic operation code via strategy pattern', () => {
      const command = new (class extends ArithmeticCommand {
        operation = 'original operation code';

        getOperationCode() {
          return '// Arithmetic operation';
        }
      });
      const exactedCode = prettifyAssemblyCode(`
        // original operation code
        @SP
        M=M-1 // y
        A=M
        D=M // D = *y
        @SP
        A=M 
        A=A-1 // x
        // Arithmetic operation
      `);

      const resultCode = prettifyAssemblyCode(command.translate());

      expect(resultCode).toBe(exactedCode);

    });
  });
});
