function sorting(inputArr) {
    let modArr = inputArr.sort((a, b) => a-b);
    let finalArr = [];
    let arrLength = modArr.length;

    for (let index = 0; index < arrLength / 2; index++) {
        let firstElement = inputArr.pop();
        let secondElement = inputArr.shift();

        finalArr.push(firstElement);
        finalArr.push(secondElement);
    }

    console.log(finalArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])