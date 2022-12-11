let {input} = require('./input.js');

const testInputs = [
    'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
    'bvwbjplbgvbhsrlpgdmjqwftvncz',
    'nppdvjthqldpwncqszvftbrmjlhg',
    'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
    'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
]

function getFirstmarker(input) {
    let uniqueLetters = ""
    let startIndex = 0

    while (uniqueLetters.length < 4 || startIndex === input.length) {

        for (let i = startIndex; i < startIndex + 4; i++) {
            const letter = input[i]

            if (uniqueLetters.includes(letter)) {
                startIndex++
                uniqueLetters = ""
                break;
            } else {
                uniqueLetters += letter
            }
        }
    }

    return startIndex + 4
}

for (const testInput of testInputs) {
    console.log(getFirstmarker(testInput))
}
