function reverseArrayInPlace(input){
    let length1 = input.length;
    let index = Math.floor(length1 / 2);

    for(let i = 0; i < index; i++){
        let temp = input[i];
        input[i] = input[length1 - 1 - i];
        input[length1 - 1 - i] = temp;
    }
}
let num = [1,2,3,4,5];
reverseArrayInPlace(num);
console.log(num);