const {LtCommand} = require('./lt-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('LtCommand', () => {
  it('should be defined', () => {
    expect(new LtCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which compares x < y', () => {
      const command = new LtCommand();
      const counter = LtCommand.counter;
      const exactedCode = prettifyAssemblyCode(`
        D=M-D // D = *x - *y
        
        @LT_ELSE_${counter}
        D=D;JGE // *x < *y
        
        @SP
        A=M 
        A=A-1 // x
        M=-1 // *x = *x < *y = true
        
        @LT_END_${counter}
        0;JMP
        
        (LT_ELSE_${counter})
        @SP
        A=M 
        A=A-1 // x
        M=0 // *x = *x < *y = false
        
        (LT_END_${counter})
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
