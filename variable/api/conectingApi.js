import './index.html'

function getData(url, success, error){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send()
    xhr.onload = function(){
        if(xhr.status === 200){
            success(JSON.parse(xhr.response))
        }else{
            error(xhr.response)
        }
    }
}

function success(data){
    console.log("Success");
    console.log(data);
}

function error(err){
    console.log(`An error occured - ${err}`);
}

getData("https://reqres.in/api/users/2", success, error)
