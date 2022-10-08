function rotateArray(inputArr) {
    let n = Number(inputArr.pop());
    let result = '';
    
    for (let i = 1; i <= n; i++) {
        inputArr.unshift(inputArr[inputArr.length - 1]);
        inputArr.pop();
    }

    for (let i = 0; i < inputArr.length; i++) {
        result += inputArr[i] + ' ';
    }

    console.log(result);

}

rotateArray(['1', '2', '3', '4', '2'])