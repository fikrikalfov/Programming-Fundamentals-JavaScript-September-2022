function sortAnArrayBy2Criteri(inputArr) {
    inputArr.sort((a, b) => {
       return a.length - b.length || a.localeCompare(b);
    }
    );
    
    inputArr.forEach(element => {
        console.log(element);
    });

}