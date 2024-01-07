// Problem 1: Let’s play a mind game
// This function takes a positive number.
// By multiplying that number by 3, then adding 10,
// then dividing by 2, then subtracting 5,
// Then return the output
function mindGame(number) {
    if (number >= 0 && typeof (number) === 'number') {
        let sum = ((((number * 3) + 10) / 2) - 5);
        return sum;
    }
    else {
        let validation = 'Provide a valid number';
        return validation;
    }
}

// Problem 2: Finding even or odd
// This function takes a string.
// If the length of the string is even then it returns even,
// If the length of thr string is odd then it returns odd.
function evenOdd(inputString) {
    if (typeof (inputString) === 'string') {
        if (inputString.length % 2 === 0) {
            let evenOrOdd = 'even';
            return evenOrOdd;
        }
        else if (inputString.length % 2 === 1) {
            let evenOrOdd = 'odd';
            return evenOrOdd;
        }
    }
    else {
        let validation = 'Please provide a string';
        return validation;
    }
}
// Problem 3: Is Less or Greater than seven
// This function takes a number. Substracting the number by 7
// If the number is less then 7, then it returns the substraction
// owtherwise, it returns the the double or the number.
function isLGSeven(number) {
    if (typeof (number) == 'number') {
        const substruction = number - 7;
        if (substruction < 7) {
            return substruction;
        }
        else if (substruction >= 7) {
            let doubleOfTheNum = number * 2;
            return doubleOfTheNum;
        }
    }
    else {
        let validation = 'Provide a number';
        return validation;
    }
}
// Problem 4: Finding Bad data
// This function takes an aray.
// It returns the quantity of negative numbers.
function findingBadData(arrayOfNumber) {
    if (Array.isArray(arrayOfNumber) === true) {
        let numOfBadData = 0;
        for (let i = 0; i < arrayOfNumber.length; i++) {
            let element = arrayOfNumber[i];
            let badData = element < 0;
            let goodData = element >= 0;
            if (badData) {
                numOfBadData++;
            }
        }
        return numOfBadData;
    }
    else {
        let validation = 'Please provid an Array of number';
        return validation;
    }
}
// Problem 5: Convert your gems into diamond
// This function takes three numbers that declar the amount of gem of each friend
// the numbers multiplied by its gem-power to convert into diamond, Then it totals the diamond number
// if total diamond is greather than 1000 * 2 ,
// then it returns remaining diamond by subtracting 2000 with total diamond. otherwise, it returns the total number.
function gemsToDiamond(gemNumOfF1, gemNumOfF2, gemNumOfF3) {
    if (typeof (gemNumOfF1) == 'number' && typeof (gemNumOfF2) == 'number' && typeof (gemNumOfF3) == 'number') {
        let f1GemPower = 21;
        let f2GemPower = 32;
        let f3GemPower = 43;
        let f1Diamond = gemNumOfF1 * f1GemPower;
        let f2Diamond = gemNumOfF2 * f2GemPower;
        let f3Diamond = gemNumOfF3 * f3GemPower;
        let totalDiamond = f1Diamond + f2Diamond + f3Diamond;
        if (totalDiamond >= (1000 * 2)) {
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
        }
        else {
            return totalDiamond;
        }
    }
    else {
        let validation = 'Please provid valid numbers';
        return validation;
    }
}