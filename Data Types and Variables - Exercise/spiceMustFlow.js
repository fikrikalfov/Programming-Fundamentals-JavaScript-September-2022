function spiceMustFlow(amount) {
    let totalAmount = 0;
    let daysCounter = 0;

    if (amount >= 100) {

    while (amount >= 100) {
        daysCounter++;
        totalAmount += amount - 26;
        amount -= 10;
    }
    totalAmount -= 26;
    console.log(daysCounter);
    console.log(totalAmount);
}
}

spiceMustFlow(450)