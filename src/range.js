class Range extends Array {
  constructor(length) {
    super(length);

    for (let i = 0; i < length; i++) {
      this[i] = i;
    }
  }
}

module.exports = {
  Range
}
