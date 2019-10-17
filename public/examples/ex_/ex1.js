var express = require('express')
var app = express()

const useless = require('./includes/object.js');
app.use('/', useless.nothing)


const port = 8080;

console.log('listening on port', port);

app.listen(port)