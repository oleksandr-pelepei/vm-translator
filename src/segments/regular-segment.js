const { AbstractSegment } = require('./abstract-segment');

class RegularSegment extends AbstractSegment {
  segmentPointer;

  constructor(opts) {
    super(opts);
    const {segmentPointer} = opts;
    this.segmentPointer = segmentPointer;
  }

  translate() {
    return `
      // regular segment
      @${this.segmentPointer}
      D=M // save segement pointer
      @${this.i}  // i constant
      D=D+A // addr
    `;
  }
}

module.exports = {
  RegularSegment
}
