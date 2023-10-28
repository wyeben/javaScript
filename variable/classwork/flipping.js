function flipNumber(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Invalid input. Please provide a positive number.";
    }

    
    const numberString = number.toString();

    const flippedString = numberString.split('').reverse().join('');

    
    const flippedNumber = parseInt(flippedString, 10);

    return flippedNumber;
}


const originalNumber = 12345;
const flipped = flipNumber(originalNumber);
console.log(`Original: ${originalNumber}, Flipped: ${flipped}`);
