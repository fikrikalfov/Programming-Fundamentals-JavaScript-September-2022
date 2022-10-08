function condenseArrayToNumber(inputArr) {

    if (inputArr.length > 1) {
        for (let x = inputArr.length; x >= 1; x--) {
            for (let i = 0; i <= (inputArr.length - 2); i++) {
                let sumOfElements = inputArr[i] + inputArr[i + 1];
                inputArr[i] = sumOfElements;
                if ((i + 1) === (inputArr.length - 1)) {
                    inputArr.pop();
                }
            }
        }
        console.log(inputArr[0]);
    } else {
        console.log(`${inputArr[0]}`);
    }
}

condenseArrayToNumber([5,0,4,1,2])