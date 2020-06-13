class NegCommand {
  operation = 'neg';

  translate() {
    return `
      // ${this.operation}
      @SP
      A=M
      A=A-1
      M=-M // *y = -*y
    `;
  }
}

module.exports = {
  NegCommand
}
