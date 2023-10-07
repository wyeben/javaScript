function countChar(word, count){
    let countCha = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === count){
            countCha++
        }
    }
    return countCha
}

let word = 'worry'
let char = 'r'
let check = countChar(word, char)
console.log(check)