function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  

    if (typeof a === 'object' && a !== null && 
    typeof b === 'object' && b !== null) {

      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  

      if (keysA.length !== keysB.length) {
        return false;
      }
  

      for (let key of keysA) {
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      }
  

      return true;
    }

    return false;
  }
  

  let objA = { a: 1, b: { c: 2 } };
let objB = { a: 1, b: { c: 2 } };
let objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB));
console.log(deepEqual(objA, objC));
console.log(deepEqual(5, 5));
console.log(deepEqual(5, '5'));
console.log(deepEqual(null, null));
console.log(deepEqual(null, undefined));
