function addAndSubtract(inputArr) {
    let firstArrSum = 0;
    let secondArrSum = 0;
    let modArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        firstArrSum += inputArr[i];
        if (inputArr[i] % 2 === 0) {
            modArr.push(inputArr[i] + i);
            secondArrSum +=modArr[i];
        } else {
            modArr.push(inputArr[i] - i);
            secondArrSum += modArr[i];
        }
    }
    console.log(modArr);
    console.log(firstArrSum);
    console.log(secondArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])