function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        for (let x = 0; x < secondArr.length; x++) {
            if (firstArr[i] === secondArr[x]) {
                console.log(firstArr[i]);
            }
        } 
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])