const {input} = require('./input')


function getElfGroups (input) {
    const result = [];
    const arr = input.split('\n\n');
    // console.log(arr.length);
    for (const a of arr) {
        result.push(a.split('\n'));
    }
    // console.log(result);
    return result;
}

function sumCalories (singleGroup) {
    let sum = 0;
    for (const calorie of singleGroup) {
        sum += parseInt(calorie);
    }
    return sum;
}

function getMaxCalorieElf (listWithAllSumCalories) {
    let elfIndex = 0;
    let maxValue = 0;
    for (let i = 0; i < listWithAllSumCalories.length; i++) {
        const el = listWithAllSumCalories[i];
        if (el > maxValue) {
            maxValue = el;
            elfIndex = i;
        }
    }
    return [elfIndex + 1, maxValue];
}

function getTopThreeElfsCalories (listWithAllSumCalories) {
    const sortedList = listWithAllSumCalories.sort((a, b) => b - a);
    console.log(sortedList);
    return sortedList[0] + sortedList[1] + sortedList[2]
}

const elfGroups = getElfGroups(input);

// console.log(sumCalories(elfGroups[0]));

const calorieSumList = [];
for (const singleGroup of elfGroups) {
    calorieSumList.push(sumCalories(singleGroup));
}

// console.log(calorieSumList);
// console.log(getMaxCalorieElf(calorieSumList));
console.log(getTopThreeElfsCalories(calorieSumList))

