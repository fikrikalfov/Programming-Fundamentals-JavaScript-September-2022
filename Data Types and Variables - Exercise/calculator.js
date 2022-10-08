function calculator(firstNum, operator, secondNum) {
    let result
    switch (operator) {
        case '+' :
            result = firstNum + secondNum;
            console.log(result.toFixed(2));
            break;
        case '-' :
            result = firstNum - secondNum;
            console.log(result.toFixed(2));
            break;
        case '*' :
            result = firstNum * secondNum;
            console.log(result.toFixed(2));
            break;
        case '/' :
            result = firstNum / secondNum;
            console.log(result.toFixed(2));
            break;
        default:
            break;
    }
}