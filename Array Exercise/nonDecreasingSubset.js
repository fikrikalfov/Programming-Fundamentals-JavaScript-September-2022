function nonDecreasingSubset(inputArr) {
    let biggestElement = inputArr[0];
    let result = inputArr[0] + ' ';

    for (let i = 1; i < inputArr.length; i++) {
        if (biggestElement <= inputArr[i]) {
            biggestElement = inputArr[i];
            result += biggestElement + ' ';
        } else {
            continue;
        }
    }
    console.log(result);
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])