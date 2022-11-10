function train(inputArr) {
    let wagonArr = inputArr.shift().split(' ').map(Number);
    let maxCount = Number(inputArr.shift());
    let arrLength = inputArr.length;

    function add(num) {
        wagonArr.push(num);
    }

    for (let index = 0; index < arrLength; index++) {
        let currentElement = inputArr[index].split(' ');

        if (currentElement[0] === 'Add') {
            let newWagon = Number(currentElement[1]);
            add(newWagon);

        } else {
            let wagonArraylength = wagonArr.length;
            for (let p = 0; p < wagonArraylength; p++) {
                let passangersInCurrentWagon = wagonArr[p];
                if (passangersInCurrentWagon + Number(currentElement[0]) <= maxCount) {
                    wagonArr[p] += Number(currentElement[0]);
                    break;
                }
            }

        }

    }

    console.log(wagonArr.join(' '));



}

train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75']);