const path = require('path');
const fs = require('fs');
const os = require('os');
const glob = require('glob');
const {VmTranslator} = require('./vm-translator');
const {
  PushCommandFactory,
  PopCommandFactory,
  ArithmeticCommandFactory,
  CommentCommandFactory,
  CallCommandFactory,
  FunctionCommandFactory
} = require('./commands');
const {
  PushCommandParser,
  PopCommandParser,
  ArithmeticCommandParser,
  CommentCommandParser,
  IfGotoParser,
  LabelParser,
  GotoParser,
  CallCommandParser,
  FunctionCommandParser,
  ReturnCommandParser
} = require('./parsers');
const {SegmentsFactory} = require('./segments');
const {prettifyAssemblyCode} = require('../tests/utils');

class Main {
  vmFileRegExp = /\.vm$/;

  constructor() {
    const segmentsFactory = this.segmentsFactory = new SegmentsFactory({context: ''});

    const pushCommandFactory = new PushCommandFactory(segmentsFactory);
    const popCommandFactory = new PopCommandFactory(segmentsFactory);
    const arithmeticCommandFactory = new ArithmeticCommandFactory();
    const commentCommandFactory = new CommentCommandFactory();
    const callCommandFactory = new CallCommandFactory(pushCommandFactory);
    const functionCommandFactory = new FunctionCommandFactory(pushCommandFactory);

    const pushCommandParser = new PushCommandParser(pushCommandFactory);
    const popCommandParser = new PopCommandParser(popCommandFactory);
    const arithmeticCommandParser = new ArithmeticCommandParser(arithmeticCommandFactory);
    const commentCommandParser = new CommentCommandParser(commentCommandFactory);
    const ifGotoParser = new IfGotoParser();
    const gotoParser = new GotoParser();
    const labelParser = new LabelParser();
    const callCommandParser = new CallCommandParser(callCommandFactory);
    const functionCommandParser = new FunctionCommandParser(functionCommandFactory);
    const returnCommandParser = new ReturnCommandParser(functionCommandFactory);

    const parsers = new Map([
      [PushCommandParser, pushCommandParser],
      [PopCommandParser, popCommandParser],
      [ArithmeticCommandParser, arithmeticCommandParser],
      [CommentCommandParser, commentCommandParser],
      [IfGotoParser, ifGotoParser],
      [GotoParser, gotoParser],
      [LabelParser, labelParser],
      [CallCommandParser, callCommandParser],
      [FunctionCommandParser, functionCommandParser],
      [ReturnCommandParser, returnCommandParser],
    ]);

    this.translator = new VmTranslator(parsers);
  }

  async run() {
    const args = process.argv.slice(2);
    const fullFileName = args[0];
    const fileName = fullFileName.trim().replace(/\.vm/, '');

    let assemblyCode = '';
    let destPath;

    if (this.vmFileRegExp.test(fullFileName)) {
      const scriptPath = path.resolve(process.cwd(), fullFileName);

      assemblyCode = this.translateFile(scriptPath);

      destPath = path.resolve(`./${fileName}.asm`);
    } else {
      const files = glob.sync(process.cwd() + `/${fileName}/**/*.vm`);

      for (const file of files) {
        assemblyCode += this.translateFile(file) + os.EOL;
      }

      destPath = path.resolve(`./${fileName}/${fileName}.asm`);
    }

    fs.writeFileSync(destPath, this.translator.addBootstrapCode(assemblyCode));
  }

  translateFile(scriptPath) {
    const fileNameRegexp = /([^\/]+)$/;
    const matches = fileNameRegexp.exec(scriptPath);
    const fullFileName = matches[1];
    const fileName = fullFileName.trim().replace(/\.vm/, '');

    if (!fs.existsSync(scriptPath)) {
      console.error('File or directory does not exist.');

      return;
    }

    this.segmentsFactory.context = fileName;

    const script = fs.readFileSync(scriptPath, {
      encoding: 'utf8'
    });

    return prettifyAssemblyCode(this.translator.translate(script));
  }
}

module.exports = {
  Main
}
