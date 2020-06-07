const { PushCommand } = require('./push-command');
const { prettifyAssemblyCode } = require('../../tests/utils');

describe('PushCommand', () => {
  it('should be defined', () => {
    expect(new PushCommand({})).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should translate into assembly code', () => {
      const segment = {
        translate() {
          return '// D = addr';
        }
      };
      const originalCommand = 'push constant 12';
      const command = new PushCommand({
        segment,
        originalCommand
      });

      const expectedCode = prettifyAssemblyCode(`
        // push constant 12
        // D = addr
        A=D
        D=M // *addr
        @SP
        M=D // *SP = *addr
        A=A+1 // SP++
      `);

      expect(prettifyAssemblyCode(command.translate())).toBe(expectedCode);
    });
  });
});
