function arrayModification(inputArr) {
    let modArr = inputArr.shift().split(' ').map(Number);

    function add(element) {  // add element
        modArr.push(element);
    }

    function remove(element) {  // remove all numbers same as element
        modArr = modArr.filter(x => x !== element);
    }

    function removeAt(index) {  // remove element wit index index
        modArr.splice(index, 1);
    }

    function insert(index, num) {
        modArr.splice(index, 0, num);
    }

    for (let i = 0; i < inputArr.length; i++) {
        let [action, firstNum, secondNum] = inputArr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (action) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum)
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(secondNum, firstNum);
                break;
            default:
                break;

        }
    }

    console.log(modArr.join(' '));


}

arrayModification(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])