let {crates} = require('./input.js');
const {movement} = require('./input.js');

const instructions = movement.split('\n');

function executeInstructions(instructions, startCrates, part) {
    let finalStacks = startCrates
    for (const instruction of instructions) {
        const instructionSplit = instruction.split(' ');
        const amount = parseInt(instructionSplit[1]);
        const from = parseInt(instructionSplit[3]);
        const to = parseInt(instructionSplit[5]);

        if (part === 1) {
            finalStacks = moveCratesWithCrateMover9000(finalStacks, amount, from, to);
        }

        if (part === 2) {
            finalStacks = moveCratesWithCrateMover9001(finalStacks, amount, from, to);
        }
    }
    return finalStacks
}

function moveCratesWithCrateMover9000(crateStacks, amount, from, to) {
    for (let i = 0; i < amount; i++) {
        const crate = crateStacks[from - 1].shift();
        crateStacks[to - 1].unshift(crate);
    }
    return crateStacks
}

function moveCratesWithCrateMover9001(crateStacks, amount, from, to) {
    const movedCrates = crateStacks[from - 1].slice(0, amount)
    crateStacks[from - 1].splice(0, amount)
    crateStacks[to - 1].splice(0, 0, ...movedCrates)
    return crateStacks
}

function getTopCrates(crateStacks) {
    let result = ''
    for (const crateStack of crateStacks) {
        result += crateStack[0]
    }
    return result
}

const result = executeInstructions(instructions, crates, 2)

console.log(result);
console.log(getTopCrates(result));
