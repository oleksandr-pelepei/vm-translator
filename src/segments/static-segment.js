const { AbstractSegment } = require('./abstract-segment');

class StaticSegment extends AbstractSegment {
  className;

  constructor(opts) {
    super(opts);
    const { className } = opts;

    this.className = className;
  }

  translate() {
    return `
        @${this.className}.${this.i}
        D=A // save addr of static value to D register
    `;
  }
}

module.exports = {
  StaticSegment
}
