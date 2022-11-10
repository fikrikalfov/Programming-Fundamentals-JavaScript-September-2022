function lastKNumbersSequence(n, k) {
    let modArr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let sum = 0;
        let arr = modArr.slice(start, end);
        for (let x = 0; x < arr.length; x++) {
            sum += arr[x];
        }
        modArr[i] = sum;
    }
    console.log(modArr.join(' '));
}

lastKNumbersSequence(10,3)