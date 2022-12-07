let {crates} = require('./input.js');
const {movement} = require('./input.js');

const instructions = movement.split('\n');

function executeInstructions (instructions, startCrates) {
    let finalStacks = startCrates
    for (const instruction of instructions) {
        const instructionSplit = instruction.split(' ');
        const amount = parseInt(instructionSplit[1]);
        const from = parseInt(instructionSplit[3]);
        const to = parseInt(instructionSplit[5]);

        finalStacks = moveCrates(finalStacks, amount, from, to);
    }
    return finalStacks
}

function moveCrates (crateStacks, amount, from, to) {
    for (let i = 0; i < amount; i++) {
        const crate = crateStacks[from - 1].pop();
        crateStacks[to - 1].unshift(crate);
    }
    return crateStacks
}

function getTopCrates(crateStacks) {
    let result = ''
    for(const crateStack of crateStacks) {
        result += crateStack[0]
    }
    return result
}

const result = executeInstructions(instructions, crates)


console.log(result);
console.log(getTopCrates(result));

const testCrates = [
  ['D', 'N', 'Z'],
  ['C', 'M'],
  ['P']
]

const testInstuctions = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const ti = testInstuctions.split('\n')


console.log(executeInstructions(ti, testCrates));
