function distinctArray(inputArr) {
    let modArr = [];
    let arrayLength = inputArr.length;

    for (let index = 0; index < arrayLength; index++) {
        if (!modArr.includes(inputArr[index])) {
            modArr.push(inputArr[index]);
        }
    }

    console.log(modArr.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])