function addDigit(num){
    while(num >= 10){
        let sum = 0
        while(num > 0){
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num

}

let input = 38;
let output = addDigit(input)
console.log(output)