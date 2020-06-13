const {PopCommand} = require('./pop-command');

class PopCommandFactory {
  constructor(segmentFactory) {
    this.segmentsFactory = segmentFactory;
  }

  create(opts) {
    const {i, segment: segmentString, originalCommand} = opts;
    const segment = this.segmentsFactory.create({
      segment: segmentString,
      i
    });

    return new PopCommand({
      originalCommand,
      segment
    });
  }
}

module.exports = {
  PopCommandFactory
}
