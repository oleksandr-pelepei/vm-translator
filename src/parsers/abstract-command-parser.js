class AbstractCommandParser {
  /**
   * @abstract
   *
   * @return RegExp
   */
  static get regexp() {}

  static match(stringCommand) {
    return this.regexp.test(stringCommand);
  }
}

module.exports = {
  AbstractCommandParser: AbstractCommandParser
}
