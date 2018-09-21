var express = require('express');
var path = require('path');

var app = express();

app.listen(3000);

app.use(express.static(path.join(__dirname, './../dist/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './../dist/index.html'));
});
