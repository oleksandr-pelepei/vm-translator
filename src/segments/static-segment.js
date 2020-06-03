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
        D=M 
    `;
  }
}

module.exports = {
  StaticSegment
}
