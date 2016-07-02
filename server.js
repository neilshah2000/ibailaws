var express = require('express');
var server = express();
<<<<<<< HEAD

server.set('port', (process.env.PORT || 5000));


server.use(express.static(__dirname));


server.get('/', function(request, response) {
  response.sendFile('line.html');
});

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});
=======
server.use(express.static(__dirname));
server.listen(8888);
>>>>>>> 25de0b42d0addcbf369ba17bd6e803cd22f06d99
