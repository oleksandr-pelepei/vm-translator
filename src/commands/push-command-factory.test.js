const {PushCommand} = require('./push-command');
const {PushCommandFactory} = require('./push-command-factory');
const {StaticSegment} = require('../segments/static-segment');

describe('PushCommandFactory', () => {
  let segmentFactory;
  let pushCommandFactory;

  beforeEach(() => {
    segmentFactory = {
      create() {}
    }
    pushCommandFactory = new PushCommandFactory(segmentFactory);
  });

  it('should be defined', () => {
    expect(pushCommandFactory).toBeDefined();
  });

  describe('Method create()', () => {
    it('should create a push command', () => {
      const segment = new StaticSegment({});
      const createSegmentSpy = spyOn(segmentFactory, 'create').and.returnValue(segment);
      const opts = {
        i: 1,
        segment: 'const',
        originalCommand: 'push const 1'
      };

      const command = pushCommandFactory.create(opts);

      expect(command).toBeInstanceOf(PushCommand);
      expect(createSegmentSpy).toHaveBeenCalledWith({
        segment: opts.segment,
        i: opts.i
      });
      expect(command.originalCommand).toBe(opts.originalCommand);
      expect(command.segment).toBe(segment);
    });
  });
});
