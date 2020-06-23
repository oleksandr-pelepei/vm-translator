class ReturnCommand {
  END_FRAME = 'endFrame';
  RETURN_ADDR = 'returnAddr';

  setupTempVars() {
    return `
      // Setup temp vars
      @LCL
      D=M
      @${this.END_FRAME}
      M=D
      @5
      A=D-A
      D=M
      @${this.RETURN_ADDR}
      M=D
    `;
  }

  restoreCallerPointers() {
    return `
      // restores THAT of the caller
      @${this.END_FRAME}
      A=M-1
      D=M
      @THAT
      M=D
      // restores THIS of the caller
      @${this.END_FRAME}
      D=M
      @2
      A=D-A
      D=M
      @THIS
      M=D
      // restores ARG of the caller
      @${this.END_FRAME}
      D=M
      @3
      A=D-A
      D=M
      @ARG
      M=D
      // restores LCL of the caller
      @${this.END_FRAME}
      D=M
      @4
      A=D-A
      D=M
      @LCL
      M=D
    `;
  }

  translate() {
    return `
      // return 
      ${this.setupTempVars()}
      // repositions the return value for the caller
      @SP
      A=M
      A=A-1
      D=M
      @ARG
      A=M
      // set arg 0 to return
      M=D 
      // repositions SP of the caller
      @ARG
      D=M+1
      @SP
      // SP = ARG + 1 
      M=D
      ${this.restoreCallerPointers()}
      @${this.RETURN_ADDR}
      A=M
      0;JMP
    `;
  }
}

module.exports = {
  ReturnCommand
}
