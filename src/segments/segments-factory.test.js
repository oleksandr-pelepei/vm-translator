const {SegmentsFactory} = require('./segments-factory');
const {StaticSegment} = require('./static-segment');
const {ConstantSegment} = require('./constant-segment');
const {RegularSegment} = require('./regular-segment');

describe('SegmentsFactory', () => {
  const context = 'Context';

  let segmentsFactory;

  beforeEach(() => {
    segmentsFactory = new SegmentsFactory({
      context
    });
  });

  it('should be defined', () => {
    expect(segmentsFactory).toBeDefined();
  });

  describe('Method create()', () => {
    it('should return a ConstantSegment for "constant" key', () => {
      const i = 11;
      const segment = segmentsFactory.create({
        segment: 'constant',
        i
      });

      expect(segment).toBeInstanceOf(ConstantSegment);
      expect(segment.i).toBe(i);
    });

    it('should return a StaticSegment for "static" key', () => {
      const i = 5;
      const segment = segmentsFactory.create({
        segment: 'static',
        i
      });

      expect(segment).toBeInstanceOf(StaticSegment);
      expect(segment.i).toBe(i);
      expect(segment.className).toBe(context);
    });

    it('should return a RegularSegment for another segments keys', () => {
      const i = 4;
      const segment = segmentsFactory.create({
        segment: 'local',
        i
      });

      expect(segment).toBeInstanceOf(RegularSegment);
      expect(segment.i).toBe(i);
      expect(segment.segmentPointer).toBe('LCL');
    });
  });
});
