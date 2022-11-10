function airPollution(matrix, commands) {
    matrix = matrix.map(row => row.split(' ').map(el => Number(el)));

    let isAirClean = true;

    function breezeCase(arr, input) {   // drop value by 15 of all elements in cuurent row
        let arrLength = arr[input].length;

        for (let element = 0; element < arrLength; element++) {
            arr[input][element] -= 15;
            if (arr[input][element] < 0) {
                arr[input][element] = 0;
            }
        }
    }

    function galeCase(arr, input) {   // drop value by 20 of all elements i current column
        let arrLength = arr.length;
        for (let element = 0; element < arrLength; element++) {
            arr[element][input] -= 20;
            if (arr[element][input] < 0) {
                arr[element][input] = 0;
            }
        }
    }

    for (let c = 0; c < commands.length; c++) {
        let currentElement = commands[c].split(' ');
        let command = currentElement[0];
        let digit = Number(currentElement[1]);

        switch (command) {
            case 'breeze':
                breezeCase(matrix, digit);
                break;
            case 'gale':
                galeCase(matrix, digit);
                break;
            case 'smog':
                matrix = matrix.map(elem => elem.map(x => x + digit));
                break;
            default:
                break;
        }
    }

    let matrixLength = matrix.length;
    let finalResult = [];

    for (let row = 0; row < matrixLength; row++) {
        let rowLength = matrix[row].length;
        let currentStr = '';
        for (let column = 0; column < rowLength; column++) {
            if (matrix[row][column] >= 50) {
                currentStr = `[${row}-${column}]`;
                isAirClean = false;
                finalResult.push(currentStr);
            }
        }
        
    }

    if (isAirClean) {
        console.log("No polluted areas");
    } else {
        console.log(`Polluted areas: ${finalResult.join(', ')}`);
    }
}

airPollution(['5 7 2 14 4',

    '21 14 2 5 3',

    '3 16 7 42 12',

    '2 20 8 39 14',

    '7 34 1 10 24'],

    ['breeze 1', 'gale 2', 'smog 35'])