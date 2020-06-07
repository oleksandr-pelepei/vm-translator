const { StaticSegment } = require('./static-segment');
const { prettifyAssemblyCode } = require('../../tests/utils');

describe('StaticSegment', () => {
  it('should be defined', () => {
    expect(new StaticSegment({ i: 12 })).toBeDefined();
  });

  describe('method translate()', () => {
    it('should generate assembly code wich saves value in D register from ClassName.i RAM label', () => {
      const segment = new StaticSegment({ i: 3, className: 'Some' });
      const expectedCode = prettifyAssemblyCode(`
        @Some.3
        D=A // save addr of static value to D register
      `);

      expect(prettifyAssemblyCode(segment.translate())).toBe(expectedCode);
    });
  });
});
