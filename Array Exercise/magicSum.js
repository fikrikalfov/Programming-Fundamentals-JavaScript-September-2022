function magicSum(inputArr, n) {
    let sum = 0;

    for (let i = 0; i < (inputArr.length - 1); i++) {
        for (let x = (i + 1); x < inputArr.length; x++) {
            sum = inputArr[i] + inputArr[x];
            if (sum === n) {
                console.log(`${inputArr[i]} ${inputArr[x]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],

    8)