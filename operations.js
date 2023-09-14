function findingBadData(numbers) {
    if (numbers.length === 0) { return ("Array is empty!") }
        let badArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
            if (number < 0) {
                badArray.push(number);
            }
        }
        let totalBadArray = badArray.length;
        return totalBadArray;
}
const numbers = [10, -5, -10, -9];
const number2 = findingBadData(numbers);
console.log(number2);