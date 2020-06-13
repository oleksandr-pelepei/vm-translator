#!/usr/bin/env node
const {Main} = require('../src/main');

(async () => {
  const main = new Main();

  try {
    await main.run();
  } catch (e) {
    console.error(e);
  }
})()
