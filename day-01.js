const assert = require('assert');
const fs = require('fs');

const inputFilename = './day-01.txt';
const testIputFilename = './day-01-test.txt';

const prepareInput = (filename) => {
  return fs
    .readFileSync(filename, 'utf8')
    .trim()
    .split('\n\n')
    .map((e) => e.split('\n').map(Number));
};

const getMaxFromInput = (array) => {
  const totals = array.map((e) => e.reduce((a, b) => a + b, 0));
  return Math.max(...totals);
};

const test = () => {
  const testInput = prepareInput(testIputFilename);
  assert.equal(getMaxFromInput(testInput), 24000);
};

const run = () => {
  const input = prepareInput(inputFilename);
  console.log(getMaxFromInput(input));
};

test();

run();
