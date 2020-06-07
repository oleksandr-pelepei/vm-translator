const { AbstractSegment } = require('./abstract-segment');

class TempSegment extends AbstractSegment {
  translate() {
    return `
      @${5 + this.i}
      D=A // save addr to D register
    `;
  }
}

module.exports = {
  TempSegment
};
