function tseamAccoun(inputArr) {
    let games = inputArr.shift();
    let gamesArr = games.split(' ');
    let index = 0;

    while (inputArr[index] !== 'Play!') {
        let newArr = inputArr[index].split(' ');
        index++;

        switch (newArr[0]) {
            case 'Install':
                if (gamesArr.includes(newArr[1])) {
                    break;
                } else {
                    gamesArr.push(newArr[1]);
                }
                break;
            case 'Uninstall':
                if (gamesArr.includes(newArr[1])) {
                    for (let x = 0; x < gamesArr.length; x++) {
                        if (gamesArr[x] === newArr[1]) {
                            gamesArr.splice(x, 1);
                            break;
                        }
                    }
                } else {
                    continue;
                }
                break;
            case 'Update':
                if (gamesArr.includes(newArr[1])) {
                    for (let x = 0; x < gamesArr.length; x++) {
                        if (gamesArr[x] === newArr[1]) {
                            gamesArr.splice(x, 1);
                            gamesArr.push(newArr[1]);
                            break;
                        }
                    }
                } else {
                    continue;
                }
                break;
            case 'Expansion':
                elementArr = newArr[1].split('');
                let gameCheck = '';
                for (let x = 0; x < elementArr.length; x++) {
                    if (elementArr[x] === '-') {
                        elementArr[x] = ':';
                        break;
                    } else {
                        gameCheck += elementArr[x];
                    }
                }

                if (gamesArr.includes(gameCheck)) {
                    let expansionGame = '';
                    for (let x = 0; x < elementArr.length; x++) {
                        expansionGame += elementArr[x];
                    }

                    for (let x = 0; x < gamesArr.length; x++) {
                        if (gamesArr[x] === gameCheck) {
                            gamesArr.splice(x + 1, 0, expansionGame);
                            break;
                        }
                    }
                }
                break;
            default:
                break;

        }
    }

    let finalList = '';

    for (let i = 0; i < gamesArr.length; i++) {
        finalList += gamesArr[i] + ' ';
    }

    console.log(finalList);
}

tseamAccoun(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!'])