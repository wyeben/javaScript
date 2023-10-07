function sum(num){
    let numbers = 0
    
    for(let i = 0; i < num.length; i++){
        numbers += num[i]
    }
    return numbers
}

console.log(sum([1,2,3,4,5,10]))