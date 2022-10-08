function printNElement(inputArr) {
    let n = Number(inputArr[inputArr.length - 1]);
    let elements = '';

    for (let i = 0; i < (inputArr.length - 1); i+= n) {
        elements += inputArr[i] + ' ';
    }

    console.log(elements);
}

printNElement(['5', '20', '31', '4', '20', '2'])