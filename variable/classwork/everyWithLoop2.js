function everyWithSome(array, predicate) {
    return !array.some((element) => !predicate(element));
  }

const numbers = [1, 2, 3, 4, 5];
const allAreEven = everyWithSome(numbers, (num) => num % 2 === 0);
console.log(allAreEven);