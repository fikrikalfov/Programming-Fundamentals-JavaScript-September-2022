function equalNeighbors(inputArr) {
    let counter = 0;
    let arrLength = inputArr.length;

    for (let i = 0; i < arrLength; i++) {
        let elementLength = inputArr[i].length;

        for (let x = 0; x < elementLength; x++) {
            let currentElement = inputArr[i][x];

            if (inputArr[i][x + 1] === currentElement) {
                counter++;
            }

            if (i === arrLength - 1) {
                continue;
            }

            if (inputArr[i + 1][x] === currentElement) {
                counter++;
            }

            
        }
    }

    console.log(counter);
}

equalNeighbors([['2', '2', '5', '7', '4'],

                ['4', '0', '5', '3', '4'],

                ['2', '5', '5', '4', '2']])