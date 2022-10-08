function arrayRotation(inputArr, n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let currentElement = inputArr.shift();
        inputArr[inputArr.length] = currentElement;
    }

    for (let i = 0; i < inputArr.length; i++) {
        result += inputArr[i] + ' ';
    }

    console.log(result);
}

arrayRotation([51, 47, 32, 61, 21], 3)