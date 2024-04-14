// fetch('resource').then(response => response.json()).catch()

fetch("https://www.jsonplaceholder.com", {
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json'
        // application/json or text/xml
    },
 
})

fetch('resouce')
// promise fulfiled
.then(
    // process the data
)
// and
.catch(
    // catch any errors
)

// https://www.koderhq.com/tutorial/vue/http-fetch/