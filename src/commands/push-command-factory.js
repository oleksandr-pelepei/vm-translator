const {PushCommand} = require('./push-command');

class PushCommandFactory {
  constructor(segmentFactory) {
    this.segmentsFactory = segmentFactory;
  }

  create(opts) {
    const {i, segment: segmentString, originalCommand} = opts;
    const segment = this.segmentsFactory.create({
      segment: segmentString,
      i
    });

    return new PushCommand({
      originalCommand,
      segment
    });
  }
}

module.exports = {
  PushCommandFactory
}
