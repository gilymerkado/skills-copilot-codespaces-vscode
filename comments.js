// create web server
// http://localhost:3000/comments

// import module
const express = require('express');
const app = express();
const port = 3000;

// import data
const comments = require('./data/comments');

// create route
app.get('/comments', (req, res) => {
    res.send(comments);
});

// listen to port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});