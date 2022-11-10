function houseParty(inputArr) {

    let finalGuestsArr = [];
    let inputArrLength = inputArr.length;

    for (let index = 0; index < inputArrLength; index++) {
        let currentGuest = inputArr[index].split(' ');
        let name = currentGuest[0];

        if (currentGuest[2] !== 'not') {
            if (finalGuestsArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                finalGuestsArr.push(name);
            }
        } else {
            if (finalGuestsArr.includes(name)) {
                let n = finalGuestsArr.indexOf(name);
                finalGuestsArr.splice(n, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(finalGuestsArr.join('\n'));
}

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])