function lowerOrUpper(letter) {
    let digit = letter.charCodeAt();
    if (digit >= 'a'.charCodeAt() && digit <= 'z'.charCodeAt()) {
        console.log('lower-case');
    } else if(digit >= 'A'.charCodeAt() && digit <= 'Z'.charCodeAt()) {
        console.log('upper-case');
    }
}

lowerOrUpper('J')