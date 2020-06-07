const {ConstantSegment} = require('./constant-segment');
const {StaticSegment} = require('./static-segment');
const {PointerSegment} = require('./pointer-segment');
const {RegularSegment} = require('./regular-segment');
const {SegmentPointer} = require('./segment-pointer');

class SegmentsFactory {
  context;

  constructor(opts) {
    const {context} = opts;

    this.context = context;
  }

  create(opts) {
    const {segment, i} = opts;

    switch (segment) {
      case 'constant':
        return new ConstantSegment({i});
      case 'pointer':
        return new PointerSegment({i});
      case 'static':
        return new StaticSegment({i, className: this.context});
      default:
        return new RegularSegment({
          i,
          segmentPointer: SegmentPointer.get(segment)
        });
    }
  }
}

module.exports = {
  SegmentsFactory
}
