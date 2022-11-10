function listofProducts(inputArr) {
    let modArr = inputArr.sort();

    for (let i = 0; i < modArr.length; i++) {
        console.log(`${i + 1}.${modArr[i]}`);
    }
}