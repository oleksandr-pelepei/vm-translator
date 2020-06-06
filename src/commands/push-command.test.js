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
          return '// segment memory access code';
        }
      };
      const originalCommand = 'push constant 12';
      const command = new PushCommand({
        segment,
        originalCommand
      });

      const expectedCode = prettifyAssemblyCode(`
        // push constant 12
        // segment memory access code
        @SP
        M=D // *SP = *addr
        A=A+1 // *SP++`
      );

      expect(prettifyAssemblyCode(command.translate())).toBe(expectedCode);
    });
  });
});
