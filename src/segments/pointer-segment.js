const {AbstractSegment} = require('./abstract-segment');
const {SegmentPointer} = require('./segment-pointer');

class PointerSegment extends AbstractSegment {
  translate() {
    const pointer = this.i === 0 ? SegmentPointer.get('this') : SegmentPointer.get('that');

    return `
      @${pointer}
      D=A // save addr to D
    `;
  }
}

module.exports = {
  PointerSegment
}
