function sumOfOddNumbers(i) {
    let counter = 0;
    let  x = 1;
    let sum = 0;
    while (counter < i) {
        if (x % 2 !== 0) {
            counter++;
            sum += x;
            console.log(x);
        }
        x++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3)