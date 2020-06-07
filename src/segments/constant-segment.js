const { AbstractSegment } = require('./abstract-segment');

class ConstantSegment extends AbstractSegment {
  translate() {
    return `
      @${this.i}
      D=A // save constant to D register
      @const
      M=D // save value to const register
      D=A // save addr to D
    `;
  }
}

module.exports = {
  ConstantSegment
};
