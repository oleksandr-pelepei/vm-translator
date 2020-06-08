const {ArithmeticCommand} = require('./arithmetic-command');

class LtCommand extends ArithmeticCommand {
  static counter = 0;

  operation = 'lt';

  constructor() {
    super();

    LtCommand.counter++;
  }

  getOperationCode() {
    const pointerXCode = `
      @SP
      A=M 
      A=A-1 // x
    `;

    return `
      D=M-D // D = *x - *y
        
      @LT_ELSE_${LtCommand.counter}
      D=D;JGT // *x < *y
      
      ${pointerXCode}
      M=1 // *x = *x < *y = true
      
      @LT_END_${LtCommand.counter}
      0;JMP
      
      (LT_ELSE_${LtCommand.counter})
      ${pointerXCode}
      M=0 // *x = *x < *y = false
      
      (LT_END_${LtCommand.counter})
    `;
  }
}

module.exports = {
  LtCommand
}
