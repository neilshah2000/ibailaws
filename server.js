
"use strict";
var express = require('express');
var server = express();


server.set('port', (process.env.PORT || 5000));

console.log(__dirname); 
server.use(express.static(__dirname));


server.get('/ang', function(request, response) {
  response.sendFile(__dirname + '/public/angularline.html');
});

server.get('/d3', function(request, response) {
  response.sendFile(__dirname + '/public/d3line.html');
});

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});

