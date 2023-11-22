function getData("https://reqres.in/api/users/1", (data) => {
    console.log("Response1 ->", data)
    getData("https://reqres.in/api/users/2", (data2) => {
        console.log("Response2 ->", data2)
        getData("https://reqres.in/api/users/3", (data3) => {
            console.log("Response3 ->", data3)
        }, error)
    }, error)
}, error)