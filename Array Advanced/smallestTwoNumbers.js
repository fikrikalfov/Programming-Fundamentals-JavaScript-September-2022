function smallestTwoNumbers(inputArr) {
    let modArr = inputArr.sort((a, b) => a - b).slice(0, 2);
    console.log(modArr.join(' '));
}

