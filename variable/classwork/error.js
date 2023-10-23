try{
    throw 'hello'
}catch(error){
    console.log('In catch')
    throw 'catch fire'
}finally{
    console.log('hello again')
}