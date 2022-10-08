function mergeArrays(firstArr, secondArr) {
    let modArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            modArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            modArr[i] = firstArr[i] + secondArr[i];
        }
    }
    console.log(modArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])