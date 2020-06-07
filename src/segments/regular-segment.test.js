const {RegularSegment} = require('./regular-segment');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('RegularSegment', () => {
  it('should be defined', () => {
    expect(new RegularSegment({i: 1})).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which saves to D register value of the segment pointer', () => {
      const segment = new RegularSegment({
        i: 15,
        segmentPointer: 'LCL'
      });
      const expectedCode = prettifyAssemblyCode(`
        // regular segment
        @LCL 
        D=M // save segement pointer
        @15  // i constant
        D=D+A // addr
      `);

      expect(prettifyAssemblyCode(segment.translate())).toBe(expectedCode);
    });
  });
});
