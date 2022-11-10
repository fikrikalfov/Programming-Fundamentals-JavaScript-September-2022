function bumbNumbers(inputArr, bumb) {
    let bumbNum = bumb[0];
    let power = bumb[1];

    for (let x = 0; x < inputArr.length; x++) {

    if (inputArr[x] === bumbNum) {
        inputArr.splice((x - power), (power * 2 + 1));
        x = 0;
    }
    }

    let sum = 0;
    let arrLength = inputArr.length;

    for (i = 0; i < arrLength; i++) {
        sum += inputArr[i];
    }

    console.log(sum);

}