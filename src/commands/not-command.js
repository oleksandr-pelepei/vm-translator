class NotCommand {
  operation = 'not';

  constructor() {
    NotCommand.count++;
  }

  translate() {
    return `
      // ${this.operation}
      @SP
      A=M
      A=A-1
      M=!M
    `;
  }
}

module.exports = {
  NotCommand
}
