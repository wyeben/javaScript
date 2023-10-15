function greet(name){
    if (!name){
        return 'Hi dear'
    }
    else{
        return `Hello ${name}`
    }
}


console.log(greet('ben'))
console.log(greet())