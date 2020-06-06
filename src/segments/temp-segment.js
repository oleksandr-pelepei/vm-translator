const { AbstractSegment } = require('./abstract-segment');

class TempSegment extends AbstractSegment {
  translate() {
    return `
      @${5 + this.i}
      D=M // save temp value to D register
    `;
  }
}

module.exports = {
  TempSegment
};
