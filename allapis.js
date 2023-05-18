fetch(('https://jsonplaceholder.typicode.com/todos/1'), {
    method : 'GET' ,
    headers :{
        application : application/json
    }
})
 .then(response => response.json())

 .then(json => console.log(json))

console.log(response)
getdata();
