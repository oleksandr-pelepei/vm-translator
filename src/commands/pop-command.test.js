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
        // segment memory access code
        @SP
        A=A+1 // SP--
        M=D // *SP = *addr
      `);
      const segment = {
        translate() {
          return '// segment memory access code';
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
