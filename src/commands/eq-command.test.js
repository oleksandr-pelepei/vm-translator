const {EqCommand} = require('./eq-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('EqCommand', () => {
  it('should be defined', () => {
    expect(new EqCommand()).toBeDefined();
  });

  describe('Method getOperationCode()', () => {
    it('should return assembly code which compares x == y', () => {
      const command = new EqCommand();
      const counter = EqCommand.counter;
      const exactedCode = prettifyAssemblyCode(`
        D=M-D // D = *x - *y
        
        @EQ_ELSE_${counter}
        D=D;JNE // *x == *y
        
        @SP
        A=M 
        A=A-1 // x
        M=-1 // *x = *x == *y = true
        
        @EQ_END_${counter}
        0;JMP
        
        (EQ_ELSE_${counter})
        @SP
        A=M 
        A=A-1 // x
        M=0 // *x = *x == *y = false
        
        (EQ_END_${counter})
      `);

      const resultCode = prettifyAssemblyCode(command.getOperationCode());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
