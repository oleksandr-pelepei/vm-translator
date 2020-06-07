const {PopCommand} = require('./pop-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('PopCommand', () => {
  it('should be defined', () => {
    expect(new PopCommand({})).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should translate command into the assembly code', () => {
      const expectedCode = prettifyAssemblyCode(`
        // pop local 7
        // D = addr
        @tmp
        M=D // *tmp = addr
        @SP
        A=A-1 // SP--
        D=M // D = *SP
        @tmp
        A=M // A = addr
        M=D // *addr = *SP
      `);
      const segment = {
        translate() {
          return '// D = addr';
        }
      };
      const originalCommand = 'pop local 7';
      const command = new PopCommand({
        segment,
        originalCommand
      });

      const codeResult = prettifyAssemblyCode(command.translate());

      expect(codeResult).toBe(expectedCode);
    });
  });
});
