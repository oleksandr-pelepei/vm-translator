class StackCommand {
  constructor(opts) {
    const {segment, originalCommand} = opts;

    this.segment = segment;
    this.originalCommand = originalCommand;
  }
}

module.exports = {
  StackCommand
}
