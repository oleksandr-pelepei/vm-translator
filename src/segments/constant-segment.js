const { AbstractSegment } = require('./abstract-segment');

class ConstantSegment extends AbstractSegment {
  translate() {
    return `
      @${this.i}
      D=A // save constant to D register
    `;
  }
}

module.exports = {
  ConstantSegment
};
