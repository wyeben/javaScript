function range(start, end){
    let result = ''
    for(let i = start; i < end+1; i++){
        result += i

    }
    return result
}

let check = range(1,5)
console.log(check)