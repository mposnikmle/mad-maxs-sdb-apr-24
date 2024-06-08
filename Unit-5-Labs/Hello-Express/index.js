const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.get('/', (request, response) => {
    response.send("<h1>Hello, home</h1>")
})

app.get('/about', (request, response) => {
    response.send('Hello from About!');
});

app.get('/contact', (request, response) => {
    response.send('Hello from Contact!');
});

app.get('/help', (request, response) => {
    response.send('Hello from Help!');
});

app.get('/:page', (request, response) => {
    console.log(request.params);
    response.send(`<h1>Hello from <b>${request.params.page}</b>!</h1>`);
});

// app.get('/:key', (request,response)=>{
//     console.log(request.params)
//   })