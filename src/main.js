const {VmTranslator} = require('./vm-translator');
const path = require('path');
const fs = require('fs');
const {
  PushCommandFactory,
  PopCommandFactory,
  ArithmeticCommandFactory,
  CommentCommandFactory
} = require('./commands');
const {
  PushCommandParser,
  PopCommandParser,
  ArithmeticCommandParser,
  CommentCommandParser
} = require('./parsers');
const {SegmentsFactory} = require('./segments');
const {prettifyAssemblyCode} = require('../tests/utils');

class Main {
  async run() {
    const args = process.argv.slice(2);
    const fullFileName = args[0];
    const scriptPath = path.resolve(fullFileName);
    const fileName = fullFileName.trim().replace(/\.vm/, '');
    const destPath = path.resolve(`./${fileName}.asm`);

    const segmentsFactory = new SegmentsFactory({context: fileName});

    const pushCommandFactory = new PushCommandFactory(segmentsFactory);
    const popCommandFactory = new PopCommandFactory(segmentsFactory);
    const arithmeticCommandFactory = new ArithmeticCommandFactory();
    const commentCommandFactory = new CommentCommandFactory();

    const pushCommandParser = new PushCommandParser(pushCommandFactory);
    const popCommandParser = new PopCommandParser(popCommandFactory);
    const arithmeticCommandParser = new ArithmeticCommandParser(arithmeticCommandFactory);
    const commentCommandParser = new CommentCommandParser(commentCommandFactory);

    const parsers = new Map([
      [PushCommandParser, pushCommandParser],
      [PopCommandParser, popCommandParser],
      [ArithmeticCommandParser, arithmeticCommandParser],
      [CommentCommandParser, commentCommandParser],
    ]);

    const translator = new VmTranslator(parsers);

    const script = fs.readFileSync(scriptPath, {
      encoding: 'utf8'
    });
    const assemblyCode = prettifyAssemblyCode(translator.translate(script));

    fs.writeFileSync(destPath, assemblyCode);
  }
}

module.exports = {
  Main
}
