const assert = require('assert');
const fs = require('fs');

const inputFilename = './day-03.txt';
const testIputFilename = './day-03-test.txt';

const itemIndex = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const sum = (arr) => arr.reduce((p, c) => p + c, 0);

const prepareInput = (filename) => {
  const input = fs
    .readFileSync(filename, 'utf8')
    .trim()
    .split('\n')
    .map((line) => {
      const list = line.split('');
      const middleIndex = Math.ceil(list.length / 2);
      return [list.splice(0, middleIndex), list.splice(-middleIndex)];
    });

  return input;
};

const calculatePartOne = (input) => {
  const items = input.map(([partOne, partTwo]) => partOne.find((el) => partTwo.includes(el)));
  const priorities = items.map((el) => itemIndex.indexOf(el));
  return sum(priorities);
};

const test = () => {
  const testInput = prepareInput(testIputFilename);

  assert.equal(calculatePartOne(testInput), 157);
};

const run = () => {
  const input = prepareInput(inputFilename);

  console.log('Part One:', 'What is the sum of the priorities of those item types?', calculatePartOne(input));
};

test();

run();
