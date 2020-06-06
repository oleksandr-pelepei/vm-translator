const {StackCommand} = require('./stack-command');
const {SegmentStub} = require('../../tests/stub/segment-stub');

describe('StackCommand', () => {
  const commandString = 'pop local 12';
  const segment = new SegmentStub();
  let command;

  beforeEach(() => {
    command = new StackCommand({
      originalCommand: commandString,
      segment
    });
  });

  it('should be defined', () => {
    expect(command).toBeDefined();
  });

  it('should contain properties from options', () => {
    expect(command.originalCommand).toBe(commandString);
    expect(command.segment).toBe(segment);
  });
});
