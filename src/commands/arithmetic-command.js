class ArithmeticCommand {
  operation = '';

  translate() {
    return `
      // ${this.operation}
      @SP
      M=M-1 // SP--
      A=M
      D=M // D = *y
      A=A-1 // x = SP-2
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
