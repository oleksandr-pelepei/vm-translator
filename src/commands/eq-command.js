const {ArithmeticCommand} = require('./arithmetic-command');

class EqCommand extends ArithmeticCommand {
  static counter = 0;

  constructor() {
    super();

    EqCommand.counter++;
  }

  operation = 'eq';

  getOperationCode() {
    const pointerXCode = `
      @SP
      A=M 
      A=A-1 // x
    `;

    return `
      D=M-D // D = *x - *y
        
      @EQ_ELSE_${EqCommand.counter}
      D=D;JNE // *x == *y
      
      ${pointerXCode}
      M=-1 // *x = *x == *y = true
      
      @EQ_END_${EqCommand.counter}
      0;JMP
      
      (EQ_ELSE_${EqCommand.counter})
      ${pointerXCode}
      M=0 // *x = *x == *y = false
      
      (EQ_END_${EqCommand.counter})
    `;
  }
}

module.exports = {
  EqCommand
}
