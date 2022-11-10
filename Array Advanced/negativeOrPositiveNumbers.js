function negativeOrPositiveNumbers(inputArr) {
    let modArr = [];

    inputArr = inputArr.map(Number);

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < 0) {
            modArr.unshift(inputArr[i]);
        } else {
            modArr.push(inputArr[i]);
        }
    }

    console.log(modArr.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])