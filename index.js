var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/'))

app.get('/*', function(req, res) {
    res.sendfile(__dirname + '/index.html')
})

app.listen(8080, '0.0.0.0', () => {
    console.log('server started on port 8080');
    console.log('sit back and relax');
})
