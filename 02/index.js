const { input02 } = require('./input.js')


const rules = {};

const points = {
    'w': 6,
    'd': 3,
    'l': 0
};

function convertInput (input) {
    return input.split('\n');
}

/**
 * A...Rock
 * B...Paper
 * C...Scissors
 * X...Rock (1pt)
 * Y...Paper (2pts)
 * Z...Scissors (3pts)
 * win...6pts
 * draw...3pts
 * lose...0pts
 * @param round
 * @returns {number}
 */
function evaluateRoundPartOne(round) {

    if (round === 'A X') return 3 + 1
    if (round === 'A Y') return 6 + 2
    if (round === 'A Z') return 0 + 3

    if (round === 'B X') return 0 + 1
    if (round === 'B Y') return 3 + 2
    if (round === 'B Z') return 6 + 3

    if (round === 'C X') return 6 + 1
    if (round === 'C Y') return 0 + 2
    if (round === 'C Z') return 3 + 3
}

/**
 * A...Rock
 * B...Paper
 * C...Scissors
 * Rock...(1pt)
 * Paper...(2pts)
 * Scissors...(3pts)
 * X...need to lose
 * Y...need a draw
 * Z...need to win
 * win...6pts
 * draw...3pts
 * lose...0pts
 * @param round
 * @returns {number}
 */
function evaluateRoundPartTwo(round) {

    if (round === 'A X') return 0 + 3
    if (round === 'A Y') return 3 + 1
    if (round === 'A Z') return 6 + 2

    if (round === 'B X') return 0 + 1
    if (round === 'B Y') return 3 + 2
    if (round === 'B Z') return 6 + 3

    if (round === 'C X') return 0 + 2
    if (round === 'C Y') return 3 + 3
    if (round === 'C Z') return 6 + 1
}

function evaluateStrategyGuidePartOne(rounds) {
    let totalScore = 0
    for (const round of rounds) {
        totalScore += evaluateRoundPartOne(round)
    }
    return totalScore
}

function evaluateStrategyGuidePartTwo(rounds) {
    let totalScore = 0
    for (const round of rounds) {
        totalScore += evaluateRoundPartTwo(round)
    }
    return totalScore
}

const rounds = convertInput(input02);
console.log(rounds.length);vJrwpWtwJgWrh
console.log(rounds[0]);
console.log(evaluateStrategyGuidePartOne(rounds))
console.log(evaluateStrategyGuidePartTwo(rounds))

