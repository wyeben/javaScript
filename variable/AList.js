function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }

  
  function listToArray(list) {
    let arr = [];
    let current = list;
    while (current !== null) {
      arr.push(current.value);
      current = current.rest;
    }
    return arr;
  }

  
  function prepend(element, list) {
    return { value: element, rest: list };
  }

  
  function nth(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nth(list.rest, n - 1);

  }


let array = [1, 2, 3];
let list = arrayToList(array);
console.log(list);

let newArray = listToArray(list);
console.log(newArray);

let newList = prepend(1, list);
console.log(newList);

console.log(nth(list, 1)); 
console.log(nth(list, 5));

  