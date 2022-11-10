function jansNotation(inputArr) {

    let arrLength = inputArr.length;
    let operatorsArr = ['+', '-', '*', '/'];

    for (let i = 0; i < arrLength; i++) {

        if (operatorsArr.includes(inputArr[i])) {

            if (i - 2 < 0) {
                break;
            }

            let operator = inputArr[i];

            switch (operator) {
                case '+':

                    inputArr.splice(i - 2, 3, (inputArr[i - 2] + inputArr[i - 1]));
                    i = 0;
                    break;
                case '-':
                    inputArr.splice(i - 2, 3, (inputArr[i - 2] - inputArr[i - 1]));
                    i = 0;
                    break;
                case '*':
                    inputArr.splice(i - 2, 3, (inputArr[i - 2] * inputArr[i - 1]));
                    i = 0;
                    break;
                case '/':
                    inputArr.splice(i - 2, 3, (inputArr[i - 2] / inputArr[i - 1]));
                    i = 0;
                    break;
                default:
                    break;
            }
        }
    }

    if (inputArr.length === 1 && !operatorsArr.includes(inputArr[0])) {
        console.log(inputArr.join());
    } else  if (inputArr.length >= 2) {
            let operatorCount = 0;
            let digitCount = 0;
            for (let index = 0; index < inputArr.length; index++) {
                if (operatorsArr.includes(inputArr[index])) {
                    operatorCount++;
                } else {
                    digitCount++;
                }
            }

            if (operatorCount >= digitCount) {
                console.log('Error: not enough operands!')
            } else {
                console.log('Error: too many operands!');
            }
        }
}

jansNotation([31,
    2,
    '+',
    11,
    '/']
   
   
   
   )