function biggestOf3Numbers(firstNum, secondNum, thirdNum) {
    let biggestNum = firstNum;
    if (biggestNum <= secondNum) {
        biggestNum = secondNum;
    }
    if (biggestNum <= thirdNum) {
        biggestNum = thirdNum;
    }

    console.log(biggestNum);
}