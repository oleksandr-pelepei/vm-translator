const {GtCommand} = require('./gt-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('GtCommand', () => {
  it('should be defined', () => {
    expect(new GtCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which compares x > y', () => {
      const command = new GtCommand();
      const counter = GtCommand.counter;
      const exactedCode = prettifyAssemblyCode(`
        D=M-D // D = *x - *y
        
        @GT_ELSE_${counter}
        D=D;JLE // *x > *y
        
        @SP
        A=M 
        A=A-1 // x
        M=-1 // *x = *x > *y = true
        
        @GT_END_${counter}
        0;JMP
        
        (GT_ELSE_${counter})
        @SP
        A=M 
        A=A-1 // x
        M=0 // *x = *x > *y = false
        
        (GT_END_${counter})
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
