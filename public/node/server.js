var express = require('express')
var app = express()

app.use('/', function(req, res, next){
    console.log('did i get here? (2)');

    req.send(`<h1>${req.query.text || 'hello class'}</h1>`)
});


const port = 6400;

console.log('listening on port', port);

app.listen(port)