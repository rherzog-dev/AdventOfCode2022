const {input} = require('./input.js');

const pairList = input.split('\n');

function countOverlap (pairList) {
    let overlapTotal = 0;
    let partialOverlapTotal = 0;
    for (const pairs of pairList) {
        const first = pairs.split(',')[0];
        const second = pairs.split(',')[1];
        if (hasCompleteOverlap(first, second)) {
            overlapTotal++;
        }
        if (hasPartialOverlap(first, second)) {
            partialOverlapTotal++
        }
    }
    return [overlapTotal, partialOverlapTotal];
}

function hasCompleteOverlap (sectionA, sectionB) {
    const startA = parseInt(sectionA.split('-')[0]);
    const endA = parseInt(sectionA.split('-')[1]);
    const startB = parseInt(sectionB.split('-')[0]);
    const endB = parseInt(sectionB.split('-')[1]);

    return (startA <= startB && endA >= endB) || (startB <= startA && endB >= endA);
}

function hasPartialOverlap(sectionA, sectionB) {
    const startA = parseInt(sectionA.split('-')[0]);
    const endA = parseInt(sectionA.split('-')[1]);
    const startB = parseInt(sectionB.split('-')[0]);
    const endB = parseInt(sectionB.split('-')[1]);

    return (endA >= startB && endA <= endB) || (endB >= startA && endB <= endA);
}

const result = countOverlap(pairList)

// part 1
console.log(result[0]);

// part 2
console.log(result[1]);




