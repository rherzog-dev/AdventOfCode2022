let {crates} = require('./input.js');
const {movement} = require('./input.js');

const instructions = movement.split('\n');

function executeInstructions(instructions) {
    for (const instruction of instructions) {
        const instructionSplit = instruction.split(' ')
        const amount = parseInt(instructionSplit[1])
        const from = parseInt(instructionSplit[3])
        const to = parseInt(instructionSplit[5])

        moveCrates(amount, from, to)
    }
}

function moveCrates (amount, from, to) {

    crates = crates.splice(from + 1, amount)
}




