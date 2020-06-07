const {PointerSegment} = require('./pointer-segment');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('PointerSegment', () => {
  it('should be defined', () => {
    expect(new PointerSegment({i: 0})).toBeDefined();
  });

  describe('method translate()', () => {
    it('should set D register to THIS pointer when i is 0', () => {
      const segment = new PointerSegment({i: 0});
      const expectedCode = prettifyAssemblyCode(`
        @THIS
        D=A // save addr to D
      `);

      const resultCode = prettifyAssemblyCode(segment.translate());

      expect(resultCode).toBe(expectedCode);
    });

    it('should set D register to THAT pointer when i is 1', () => {
      const segment = new PointerSegment({i: 1});
      const expectedCode = prettifyAssemblyCode(`
        @THAT
        D=A // save addr to D
      `);

      const resultCode = prettifyAssemblyCode(segment.translate());

      expect(resultCode).toBe(expectedCode);
    });
  });
});
