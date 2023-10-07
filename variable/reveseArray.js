function reverseArray(input){
    let result = [];
    for(let i = input.length-1; i >= 0; i--){
        result.push(input[i]);
    }
    return result;
}
let arr = [1,2,3,4,5]
let check = reverseArray(arr)
console.log(check);