function addAndRemove(inputArr) {
    let result = '';
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentElement = inputArr[i];
        currentElement === 'add' ? newArr.push(i + 1) : newArr.pop();
    }

    for (let i = 0; i < newArr.length; i++) {
        result += newArr[i] + ' ';
    }
    console.log(result);
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])