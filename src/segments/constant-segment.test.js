const { ConstantSegment } = require('./constant-segment');
const { prettifyAssemblyCode } = require('../../tests/utils');

describe('ConstantSegment', () => {
  it('should be defined', () => {
    expect(new ConstantSegment({ i: 1 })).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which define D register to constant value', () => {
      const segment = new ConstantSegment({ i: 12 });
      const expectedCode = prettifyAssemblyCode(`
        @12
        D=A // save constant to D register
        @const 
        M=D // save value to const register
        D=A // save addr to D
      `);

      expect(prettifyAssemblyCode(segment.translate())).toBe(expectedCode);
    });
  });
});
