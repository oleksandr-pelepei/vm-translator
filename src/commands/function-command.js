const os = require('os');
const {Range} = require('../range');

class FunctionCommand {
  constructor(opts) {
    const {pushCommandFactory, funcName, localCount} = opts;

    this.funcName = funcName;
    this.localCount = Number(localCount);
    this.pushCommandFactory = pushCommandFactory;
  }

  funcLabel() {
    return `(${this.funcName})`;
  }

  pushLocalVars() {
    const code = (new Range(this.localCount)).map((_, i) => {
      const pushLclZero = this.pushCommandFactory.create({
        i: 0,
        segment: 'constant',
        originalCommand: `push const 0`
      });

      return pushLclZero.translate();
    }).join(os.EOL);

    return code;
  }

  translate() {
    return `
      // function ${this.funcName} ${this.localCount}
      ${this.funcLabel()}
      ${this.pushLocalVars()}
    `;
  }
}

module.exports = {
  FunctionCommand
}
