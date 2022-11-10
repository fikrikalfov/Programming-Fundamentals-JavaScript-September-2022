function processOddNumbers(inputArr) {
    let modArr = inputArr.filter((num, i)  => i % 2 ===1).map(x => x * 2).reverse();
    console.log(modArr.join(' '));
}
processOddNumbers([10, 15, 20, 25])