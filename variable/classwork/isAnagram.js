function isAnagram(word1, word2) {
    
    if (word1.length !== word2.length) {
        return false; 
    }

    
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    
    const charCount1 = {};
    const charCount2 = {};

    
    for (let char of word1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    
    for (let char of word2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true; 
}


let word1 = "anagram"
let word2 = "aganram"
let word3 = 'chair'
let word4 = 'cheer'

console.log(isAnagram(word1, word2));
console.log(isAnagram(word3, word4));
