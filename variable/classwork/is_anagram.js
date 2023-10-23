function is_anagram(s,t){
    let char = 0;
    for(let i = 0; i <= s.lenght; i++){
        char = s[i]
        for(let y = 0; y < t.lenght; y++){
            if(char[i] == t[y]){
                return true
            }else if (char[i] != t[y]){
                return false
            }
        }
    }
}
let words = "anagram"
let words2 = "aganram"
let word3 = 'chair'
let word4 = 'cheer'
console.log(is_anagram(words, words2))
console.log(is_anagram(word3, word4))