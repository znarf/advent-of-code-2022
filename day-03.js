const assert = require('assert');
const fs = require('fs');

const inputFilename = './day-03.txt';
const testIputFilename = './day-03-test.txt';

const itemIndex = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const sum = (arr) => arr.reduce((p, c) => p + c, 0);

function spliceIntoChunks(arr, chunkSize) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

const prepareInput = (filename) => fs.readFileSync(filename, 'utf8').trim().split('\n');

const calculatePartOne = (input) => {
  const refinedInput = input.map((line) => {
    const list = line.split('');
    const middleIndex = Math.ceil(list.length / 2);
    return [list.splice(0, middleIndex), list.splice(-middleIndex)];
  });
  const items = refinedInput.map(([partOne, partTwo]) => partOne.find((el) => partTwo.includes(el)));
  const priorities = items.map((el) => itemIndex.indexOf(el));
  return sum(priorities);
};

const calculatePartTwo = (input) => {
  const groupedInput = spliceIntoChunks(
    input.map((el) => el.split('')),
    3,
  );

  const items = groupedInput.map(([a, b, c]) => a.find((el) => b.includes(el) && c.includes(el)));

  const priorities = items.map((el) => itemIndex.indexOf(el));

  return sum(priorities);
};

const test = () => {
  const testInput = prepareInput(testIputFilename);

  assert.equal(calculatePartOne(testInput), 157);

  assert.equal(calculatePartTwo(testInput), 70);
};

const run = () => {
  const input = prepareInput(inputFilename);

  console.log('Part One:', 'What is the sum of the priorities of those item types?', calculatePartOne(input));

  console.log('Part Two:', 'What is the sum of the priorities of those item types?', calculatePartTwo(input));
};

test();

run();
