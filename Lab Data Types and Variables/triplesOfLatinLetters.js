function triplesOfLatinLetters(n) {
    let result = '';
    let firstNum = 'a'.charCodeAt();
    
    for (let firstLetter = firstNum; firstLetter < (firstNum + n); firstLetter++) {
        result += String.fromCharCode(firstLetter);
        for (let secondLetter = firstNum; secondLetter < (firstNum + n); secondLetter++) {
            result += String.fromCharCode(secondLetter);
            for (let thirdLetter = firstNum; thirdLetter < (firstNum + n); thirdLetter++) {
                result += String.fromCharCode(thirdLetter);
                console.log(result);
                result = '' + String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter);
            }
            result = '' + String.fromCharCode(firstLetter);
        }
        result = '';
    }
}

triplesOfLatinLetters(3)