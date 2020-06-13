const {ArithmeticCommand} = require('./arithmetic-command');

class GtCommand extends ArithmeticCommand {
  static counter = 0;

  operation = 'gt';

  constructor() {
    super();

    GtCommand.counter++;
  }

  getOperationCode() {
    const pointerXCode = `
      @SP
      A=M 
      A=A-1 // x
    `;

    return `
      D=M-D // D = *x - *y
        
      @GT_ELSE_${GtCommand.counter}
      D=D;JLE // *x > *y
      
      ${pointerXCode}
      M=-1 // *x = *x > *y = true
      
      @GT_END_${GtCommand.counter}
      0;JMP
      
      (GT_ELSE_${GtCommand.counter})
      ${pointerXCode}
      M=0 // *x = *x > *y = false
      
      (GT_END_${GtCommand.counter})
    `;
  }
}

module.exports = {
  GtCommand
}
