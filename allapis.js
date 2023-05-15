async function getdata(){
 const response = await fetch(('https://jsonplaceholder.typicode.com/todos/1'), {
    method : 'GET' ,
    headers :{
        application : application/json;
    }
})
 .then(response => response.json())

 .then(json => console.log(json))

 return response.json();
}

getdata();
