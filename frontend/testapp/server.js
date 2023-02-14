'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// configuration ==============================================
var port = process.env.PORT || 9090;
app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile('./public/index.html',{ root: __dirname });
});

// start app =================================================
app.listen(port);
console.log('Application running on port ' + port);
module.exports = app;