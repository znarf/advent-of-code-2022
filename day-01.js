const assert = require('assert');
const fs = require('fs');

const inputFilename = './day-01.txt';
const testIputFilename = './day-01-test.txt';

const sum = (arr) => arr.reduce((p, c) => p + c, 0);

const sortDesc = (arr) => arr.sort((a, b) => (a < b ? 1 : -1));

const prepareInput = (filename) => {
  const input = fs
    .readFileSync(filename, 'utf8')
    .trim()
    .split('\n\n')
    .map((e) => e.split('\n').map(Number))
    .map(sum);

  return input;
};

const getMaxFromInput = (input) => Math.max(...input);

const getTopThreeTotalFromInput = (input) => {
  sortDesc(input);
  return sum(input.slice(0, 3));
};

const test = () => {
  const testInput = prepareInput(testIputFilename);

  assert.equal(getMaxFromInput(testInput), 24000);

  assert.equal(getTopThreeTotalFromInput(testInput), 45000);
};

const run = () => {
  const input = prepareInput(inputFilename);

  console.log(
    'Part One:',
    'Find the Elf carrying the most Calories.',
    'How many total Calories is that Elf carrying?',
    getMaxFromInput(input),
  );

  console.log(
    'Part Two:',
    'Find the top three Elves carrying the most Calories.',
    'How many Calories are those Elves carrying in total?',
    getTopThreeTotalFromInput(input),
  );
};

test();

run();
