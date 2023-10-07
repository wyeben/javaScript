function range(start,end,step){
    let result = ''
    if(step > 0){
        for(let i = start; i <= end; i += step){
            result += i
        }
    }else{
        for(let j = start; j >= end; j += step){
            result += j
        
        }
    }
    
    return result
}

console.log(range(10,2,-2))