function searchforANumber(inputArr, actionArr) {

    let elementsToTake = actionArr[0];
    let elementsToDelete = actionArr[1];
    let specialNum = actionArr[2];

    let modArr = inputArr.slice(0, elementsToTake);
    modArr.splice(0, elementsToDelete);

    let counter = 0;

    for (let element of modArr) {
        if (element === specialNum) {
            counter++;
        }
    }

    console.log(`Number ${specialNum} occurs ${counter} times.`);
}

searchforANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])