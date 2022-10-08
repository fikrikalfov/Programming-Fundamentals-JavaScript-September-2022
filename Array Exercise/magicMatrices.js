function magicMatrices(inputArr) {
    let isMagic = true;
    let sumOfallRow = 0;
    let sumRow = 0;
    let sumColumn = 0
    let firstRow = inputArr[0];
    for (let i = 0; i < firstRow.length; i++) {  // Sum of elements in first row
        sumRow += firstRow[i];
    }

    for (let i = 0; i < inputArr.length; i++) {  // Sum of all elements in matrix
        let curentRow = inputArr[i];

        for (let x = 0; x < curentRow.length; x++) {
            sumOfallRow += curentRow[x];
        }
    }

    if (sumOfallRow / inputArr.length === sumRow) {  // Sum ot all first elements
        for (let i = 0; i < inputArr.length; i++) {
            let currentRow = inputArr[i];
            for (let x = 0; x < 1; x++) {
                sumColumn += currentRow[x];
            }
        }
        if ((sumOfallRow / inputArr.length === sumColumn) && (sumOfallRow / inputArr.length === sumRow) && sumColumn === sumRow) {
            console.log(isMagic);
        } else {
            isMagic = false;
            console.log(isMagic);
        }

    } else {
        isMagic = false;
        console.log(isMagic);
        
    }

}

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])