function spiralMatrix(row, column) {
    let resultArr = [];
    let x = 0;
    let y = 0;
    let step = 0;
    let target = column * row;

    for (let i = 0; i < row; i++) {
        let currentArr = [];
        let element = 0;
        for (let e = 0; e < column; e++) {
            currentArr.push(element);
        }
        resultArr.push(currentArr);
    }

    for (let i = 0; i < target;) {
        i++;

        while (y + step < column) {
            resultArr[x][y] = i;
            y++;
            i++;
        }

        y--;
        x++;

        while (x + step < row) {
            resultArr[x][y] = i;
            x++;
            i++;
        }

        x--;
        y--;

        while (y - step >= 0) {
            resultArr[x][y] = i;
            y--;
            i++;
        }

        y++;
        x--;
        step++;

        while (x - step >= 0) {
            resultArr[x][y] = i;
            x--;
            i++;
        }
         y++;
         x++;
         i--;
        
    }

    for (let i = 0; i < resultArr.length; i++) {
        let finalResult = '';
        for (let j = 0; j < resultArr[i].length; j++ ) {
            finalResult += resultArr[i][j] + ' ';
        }
        console.log(finalResult);
    }

}

spiralMatrix(5, 5)