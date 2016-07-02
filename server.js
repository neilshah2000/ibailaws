var express = require('express');
var server = express();


server.set('port', (process.env.PORT || 5000));


server.use(express.static(__dirname));


server.get('/', function(request, response) {
  response.sendFile(__dirname + '/line.html');
});

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});

