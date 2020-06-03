const { ConstantSegment } = require('./constant-segment');
const { prettifyAssemblyCode } = require('../../tests/utils');

describe('ConstantSegment', () => {
  it('should be defined', () => {
    expect(new ConstantSegment()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which define D register to constant value', () => {
      const segment = new ConstantSegment(12);
      const expectedCode = prettifyAssemblyCode(`
        @12
        D=A // save constant to D register
      `);

      expect(prettifyAssemblyCode(segment.translate())).toBe(expectedCode);
    });
  });
});
