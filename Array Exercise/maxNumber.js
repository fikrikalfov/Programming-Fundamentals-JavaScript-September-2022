function maxNumber(inputArr) {
    let topIntegers = '';
    let isMax = true;

    for (let i = 0; i < inputArr.length; i++) {
        for (let x = (i + 1); x < inputArr.length; x++) {
            if (inputArr[i] > inputArr[x]) {
                isMax = true;
            } else {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            topIntegers += inputArr[i] + ' ';
        }
        isMax = true;
    }

    console.log(topIntegers);

}

maxNumber([14, 24, 3, 19, 15, 17])