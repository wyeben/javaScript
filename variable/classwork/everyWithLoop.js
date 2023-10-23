function everyWithLoop(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i])) {
        return false;
      }
    }
    return true;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const allAreEven = everyWithLoop(numbers, (num) => num % 2 === 0);
  console.log(allAreEven);
  