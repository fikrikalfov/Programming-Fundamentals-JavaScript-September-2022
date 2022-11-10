function bunnyKill(inputArr) {
    
    let damage = 0;
    let sum = 0;
    
    
    let coordinates = inputArr.pop().split(' ');
    let modArr = inputArr.map(el => el.split(' ').map(n => Number(n)));
    for (let i = 0; i < coordinates.length; i++) {
        let bombCoordinates = coordinates[i].split(',').map(el => Number(el));
        let row = bombCoordinates[0];
        let column = bombCoordinates[1];

        let bomb = modArr[row][column];

        if (bomb <= 0) {
            continue;
        }

        let startRow = Math.max(0, row - 1);
        let endRow = Math.min(row + 1, modArr.length - 1);

        for (let y = startRow; y <= endRow; y++) {
            let columnStart = Math.max(0, column - 1);
            let columntEnd = Math.min(column + 1, modArr[row]. length - 1);
            for (let x = columnStart; x <= columntEnd; x++) {
                modArr[y][x] -= bomb;
            }
        }

        damage++;
        sum += bomb;
    }
    let arrLength = modArr.length;
    for (let k = 0; k < arrLength; k++) {
        let currentElLength = modArr[k].length;
        for (let l = 0; l < currentElLength; l++) {
            if (modArr[k][l] > 0) {
                sum += modArr[k][l];
                damage++;
            }
        }

    }

    console.log(sum);
    console.log(damage);
}

bunnyKill([ '5 10 15 20',

            '10 10 10 10',

            '10 15 10 10',

            '10 10 10 10',

    '2,2 0,1'])