function firstAndLastKNumbers(inputArr) {
    let k = inputArr.shift();
    console.log(inputArr.slice(0, k).join(' '));
    console.log(inputArr.slice((inputArr.length - k), inputArr.length).join(' '));
}

firstAndLastKNumbers([2,

    7, 8, 9])