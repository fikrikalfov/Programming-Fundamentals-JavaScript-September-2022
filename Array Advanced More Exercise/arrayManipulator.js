function arrayManipulator(arrOfInt, arrOfStr) {

    strArrLength = arrOfStr.length;
    let isFinish = false;

    for (let index = 0; index < strArrLength; index++) {
        let currentCommand = arrOfStr[index].split(' ');
        let command = currentCommand.shift();

        switch (command) {
            case 'add':
                arrOfInt.splice(currentCommand[0], 0, Number(currentCommand[1]));
                break;
            case 'addMany':
                let ind = currentCommand.shift();
                for (let i = 0; i < currentCommand.length; i++) {
                    arrOfInt.splice(ind, 0, Number(currentCommand[i]));
                    ind++;
                }
                break;
            case 'contains':
                let specialElement = Number(currentCommand[0]);
                if (arrOfInt.includes(specialElement)) {
                    for (let l = 0; l < arrOfInt.length; l++) {
                        if (arrOfInt[l] === specialElement) {
                            console.log(l);
                            break;
                        }
                    }
                } else {
                    console.log('-1');
                }
                break;
            case 'remove':
                arrOfInt.splice(currentCommand[0], 1);
                break;
            case 'shift':
                let position = currentCommand[0];
                for (let i = 0; i < position; i++);
                let currentEl = arrOfInt.shift();
                arrOfInt.push(currentEl);
                break;
            case 'sumPairs':
                let modArr = [];
                for (let j = 0; j < arrOfInt.length; j += 2) {
                    let sumOfEl = arrOfInt[j] + arrOfInt[j + 1];
                    modArr.push(sumOfEl);
                }
                arrOfInt = modArr;
                break;
            case 'print':
                console.log(arrOfInt);
                isFinish = true;
                break;
            default:
                break;
        }

        if (isFinish) {
            break;
        }
    }

    

}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"])