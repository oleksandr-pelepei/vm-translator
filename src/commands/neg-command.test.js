const {NegCommand} = require('./neg-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('NegCommand', () => {
  it('should be defined', () => {
    expect(new NegCommand()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which negates y value', () => {
      const command = new NegCommand();
      const exactedCode = prettifyAssemblyCode(`
        // neg
        @SP
        A=M
        A=A-1
        M=-M // *y = -*y
      `);

      const resultCode = prettifyAssemblyCode(command.translate());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
