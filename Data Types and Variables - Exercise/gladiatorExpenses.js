function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            sum += helmetPrice + swordPrice + shieldPrice;
            counter++;
            if (counter === 2) {
                sum += armorPrice;
                counter = 0;
            }
        } else if (i % 2 === 0) {
            sum += helmetPrice;
        } else if (i % 3 === 0) {
            sum += swordPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}