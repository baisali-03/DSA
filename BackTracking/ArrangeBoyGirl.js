// The problem is to arrange a group of students, comprising both boys and girls, 
// in a row such that two girls cannot sit next to each other. 
// We will find all possible valid seating arrangements using backtracking.

function findSeatingArrangements(numBoys, numGirls) {
    const arrangements = [];
    const seats = Array(numBoys + numGirls);
    for (let i = 0; i < numBoys; i++) {
        seats[i] = 'B'; // B represents boys
    }
    for (let i = numBoys; i < numBoys + numGirls; i++) {
        seats[i] = 'G'; // G represents girls
    }
    backtrack(arrangements, seats, 0);
    return arrangements;
}

function backtrack(arrangements, seats, index) {
    if (index === seats.length) {
        arrangements.push(seats.join(''));
        return;
    }

    for (let i = index; i < seats.length; i++) {
        if (isValid(seats, index, i)) {
            swap(seats, index, i);
            backtrack(arrangements, seats, index + 1);
            swap(seats, index, i); // backtrack by restoring the original state
        }
    }
}

function isValid(seats, index, i) {
    if (seats[index] === 'G') {
        if (i + 1 < seats.length && seats[i + 1] === 'G') {
            return false;
        }
        if (i - 1 >= 0 && seats[i - 1] === 'G') {
            return false;
        }
    }

    if (seats[i] === 'G') {
        if (index + 1 < seats.length && seats[index + 1] === 'G') {
            return false;
        }
        if (index - 1 >= 0 && seats[index - 1] === 'G') {
            return false;
        }
    }

    return true;
}

function swap(seats, i, j) {
    const temp = seats[i];
    seats[i] = seats[j];
    seats[j] = temp;
}

const numBoys = 2;
const numGirls = 2;
const arrangements = findSeatingArrangements(numBoys, numGirls);
for (const arrangement of arrangements) {
    console.log(arrangement);
}