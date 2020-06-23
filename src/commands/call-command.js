const os = require('os');
const {GotoCommand} = require('./goto-command');
const {LabelCommand} = require('./label-command');
const {Range} = require('../range');

class CallCommand {
  static counter = 0;

  constructor(opts) {
    const {calee, argsCount, pushCommandFactory} = opts;

    this.calee = calee;
    this.argsCount = Number(argsCount);
    this.pushCommandFactory = pushCommandFactory;

    CallCommand.counter++;
  }

  translate() {
    return `
      // call ${this.calee}
      ${this.pushReturnLabelOntoStack()}
      ${this.saveCallerSegmentPointers()}
      ${this.repositionArg()}
      ${this.repositionLcl()}
      ${this.goToFunction()}
      ${this.returnLabel()}
    `;
  }

  getReturnLabel() {
    const callCounter = CallCommand.counter;

    return `${this.calee}$ret.${callCounter}`;
  }

  pushReturnLabelOntoStack() {
    return `
      // push return label onto the stack
      @${this.getReturnLabel()}
      D=A
      ${this.pushDOntoTheStack()}
    `
  }

  saveCallerSegmentPointers() {
    return `
      // save caller segment pointers
      ${this.saveSegmentPointer('LCL')}
      ${this.saveSegmentPointer('ARG')}
      ${this.saveSegmentPointer('THIS')}
      ${this.saveSegmentPointer('THAT')}
    `;
  }

  repositionArg() {
    return `
      // repositions ARG
      @SP
      D=M
      @${5 + this.argsCount}
      D=D-A
      @ARG
      M=D
    `;
  }

  repositionLcl() {
    return `
      // repositions LCL
      @SP
      D=M
      @LCL
      M=D
    `;
  }

  goToFunction() {
    return (new GotoCommand(this.calee)).translate();
  }

  returnLabel() {
    return (new LabelCommand(this.getReturnLabel())).translate();
  }

  pushDOntoTheStack() {
    return `
      @SP
      A=M
      M=D
      @SP
      M=M+1 // SP++
    `;
  }

  saveSegmentPointer(segmentPointer) {
    return `
      // save ${segmentPointer} segment pointer
      @${segmentPointer}
      D=M
      ${this.pushDOntoTheStack()}
    `;
  }
}

module.exports = {
  CallCommand
}
