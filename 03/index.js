const {input} = require('./input.js');
let priorities = {};

function buildPriorities () {
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < values.length; i++) {
        priorities[values[i]] = i + 1;
    }
}

buildPriorities();

console.log(priorities);

function convertInput (input) {
    return input.split('\n');
}


const rucksackList = convertInput(input);

function checkRucksack (rucksack) {
    let total = 0;

    for (const item of rucksack) {
        // get compartments
        const compartment1 = item.substring(0, item.length / 2);
        const compartment2 = item.substring(item.length / 2);
        // get same items in compartments
        const sharedItem = findSameItem(compartment1, compartment2);
        if (sharedItem) {
            total += priorities[sharedItem];
        }

    }
    console.log(total);
}

function findSameItem (compartmentA, compartmentB) {
    for (const item of compartmentA) {
        if (compartmentB.includes(item)) {
            return item;
        }
    }
}

function part2 (rucksackList) {
    let total = 0
    for (let i = 0; i < rucksackList.length; i += 3) {
        const same = getSame(rucksackList[i], rucksackList[i + 1], rucksackList[i + 2]);
        total += priorities[same]
    }
    console.log(total);
}

function getSame (itemA, itemB, itemC) {
    for (const a of itemA) {
        for (const b of itemB) {
            if (a === b) {
                for (const c of itemC) {
                    if (a === b && b === c) {
                        return a;
                    }
                }
            }
        }
    }
}

checkRucksack(rucksackList);
part2(rucksackList);
