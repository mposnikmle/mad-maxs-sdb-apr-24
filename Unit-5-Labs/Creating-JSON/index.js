const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    
    const answersData = fs.readFileSync('api/answer.json', 'utf8');
    
    res.setHeader('Content-Type', 'application/json');
    
    res.send(answersData);
    
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});