const assert = require('assert');
const fs = require('fs');

const inputFilename = './day-02.txt';
const testIputFilename = './day-02-test.txt';

const sum = (arr) => arr.reduce((p, c) => p + c, 0);

const prepareInput = (filename) => {
  const input = fs
    .readFileSync(filename, 'utf8')
    .trim()
    .split('\n')
    .map((e) => e.split(' '));

  return input;
};

const scoreRound = ([player1Input, player2Input]) => {
  let score = 0;

  if (player2Input === 'X') {
    score += 1;
  }
  if (player2Input === 'Y') {
    score += 2;
  }
  if (player2Input === 'Z') {
    score += 3;
  }

  if (
    (player1Input === 'A' && player2Input === 'X') ||
    (player1Input === 'B' && player2Input === 'Y') ||
    (player1Input === 'C' && player2Input === 'Z')
  ) {
    score += 3;
  }

  if (
    (player1Input === 'A' && player2Input === 'Y') ||
    (player1Input === 'B' && player2Input === 'Z') ||
    (player1Input === 'C' && player2Input === 'X')
  ) {
    score += 6;
  }

  return score;
};

const partTwoMapping = {
  A: {
    X: 'Z',
    Y: 'X',
    Z: 'Y',
  },
  B: {
    X: 'X',
    Y: 'Y',
    Z: 'Z',
  },
  C: {
    X: 'Y',
    Y: 'Z',
    Z: 'X',
  },
};

const scoreRoundPartTwo = ([player1Input, roundOutcome]) => {
  const player2Input = partTwoMapping[player1Input][roundOutcome];

  return scoreRound([player1Input, player2Input]);
};

const test = () => {
  const testInput = prepareInput(testIputFilename);

  assert.equal(sum(testInput.map(scoreRound)), 15);

  assert.equal(sum(testInput.map(scoreRoundPartTwo)), 12);
};

const run = () => {
  const input = prepareInput(inputFilename);

  console.log(
    'Part One:',
    'What would your total score be if everything goes exactly according to your strategy guide?',
    sum(input.map(scoreRound)),
  );

  console.log(
    'Part Two:',
    'What would your total score be if everything goes exactly according to your strategy guide?',
    sum(input.map(scoreRoundPartTwo)),
  );
};

test();

run();
