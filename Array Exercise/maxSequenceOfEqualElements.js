function maxSequenceOfEqualElements(inputArr) {
    let order = '';
    let sequance = [];
        sequance.push(inputArr[0]);
    let maxSequance = [];

    for (let i = 0; i < (inputArr.length - 1); i++) {
        

        if (inputArr[i] === inputArr[i + 1]) {
            sequance.push(inputArr[i + 1]);
        } else {
            if (maxSequance.length < sequance.length) {
                maxSequance = sequance;
            }
            sequance = [];
            sequance.push(inputArr[i + 1]);
        }

    }

    for (let i = 0; i < maxSequance.length; i++) {
        order += maxSequance[i] + ' ';
    }

    console.log(order);

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])