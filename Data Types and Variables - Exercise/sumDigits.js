function sumDigits(n) {
    let stringFromDigit = n.toString();
    let sum = 0;

    for (let i = 0; i < stringFromDigit.length; i++) {
        let currentDigit = Number(stringFromDigit[i]);
        sum += currentDigit;
    }
    console.log(sum);
}
sumDigits(65)