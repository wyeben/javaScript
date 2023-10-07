function countBs(word){
    let count = 0;
  for(let i = 0 ; i < word.length ; i++){
    if(word[i] === 'B'){
    count++
   }
  }
   return count;
}

let word = "BenbBsonb"
let check = countBs(word)
console.log(check)