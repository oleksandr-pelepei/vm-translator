class ArithmeticCommand {
  operation = '';

  translate() {
    return `
      // ${this.operation}
      @SP
      M=M-1 // y
      A=M
      D=M // D = *y
      @SP
      A=M 
      A=A-1 // x
      ${this.getOperationCode()}
    `;
  }

  getOperationCode() {
    return '';
  }
}

module.exports = {
  ArithmeticCommand
}
