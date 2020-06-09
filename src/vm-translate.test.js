const {VmTranslator} = require('./vm-translator');
const {prettifyAssemblyCode} = require('../tests/utils');

describe('VmParser', () => {
  it('should be defined', () => {
    expect(new VmTranslator()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should translate vm code to assembly code, using provided command parsers', () => {
      const MockPushParser = class {
        static match(command) {
          return command === 'push const 12';
        }

        parse() {
          return {
            translate() {
              return '// push const 12';
            }
          }
        }
      }
      const MockPopParser = class {
        static match(command) {
          return command === 'pop static 2';
        }

        parse() {
          return {
            translate() {
              return '// pop static 2';
            }
          }
        }
      }
      const MockAddParser = class {
        static match(command) {
          return command === 'add';
        }

        parse() {
          return {
            translate() {
              return '// add';
            }
          };
        }
      }
      const mockParsers = new Map([
        [MockPushParser, new MockPushParser()],
        [MockPopParser, new MockPopParser()],
        [MockAddParser, new MockAddParser()],
      ]);
      const vmTranslator = new VmTranslator(mockParsers);
      const vmCode = `
        push const 12
        pop static 2
        add
      `;
      const expectedCode = prettifyAssemblyCode(`
        // push const 12
        // pop static 2
        // add
      `);

      const resultCode = prettifyAssemblyCode(vmTranslator.translate(vmCode));

      expect(resultCode).toBe(expectedCode);
    });
  });
});
