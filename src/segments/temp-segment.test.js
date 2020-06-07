const {TempSegment} = require('./temp-segment');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('TempSegment', () => {
  it('should be defined', () => {
    expect(new TempSegment({i: 3})).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which define D register to a temp value', () => {
      const segment = new TempSegment({i: 3});
      const expectedCode = prettifyAssemblyCode(`
        @8
        D=A // save addr to D register
      `);

      expect(prettifyAssemblyCode(segment.translate())).toBe(expectedCode);
    });
  });
});
