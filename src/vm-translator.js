const os = require('os');

class VmTranslator {
  parsers = new Map();

  constructor(parsers = new Map()) {
    this.parsers = parsers;
  }

  translate(vmCode) {
    return vmCode
      .split(os.EOL)
      .map((command) => command.trim())
      .filter((command) => Boolean(command))
      .map((command) => this.translateCommand(command).trim())
      .join(os.EOL);
  }

  translateCommand(commandCode) {
    const Parser = Array.from(this.parsers.keys()).find((Parser) => {
      return Parser.match(commandCode);
    });
    const parserInstance = this.parsers.get(Parser);

    if (!parserInstance) {
      console.warn(`Could find a parser for command: ${commandCode}`);

      return '';
    }

    const command = parserInstance.parse(commandCode);

    return command.translate();
  }

  addBootstrapCode(code) {
    return `
      // Init SP
      @256
      D=A
      @SP
      M=D
      ${this.translate('call Sys.init 0')}
      ${code}
    `;
  }
}

module.exports = {
  VmTranslator: VmTranslator
}
