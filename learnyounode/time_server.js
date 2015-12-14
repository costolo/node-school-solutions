function timeServer() {
  var net = require('net');
  var port = process.argv[2];
  var server = net.createServer(function(socket) {
    socket.end(getTime());
  }).listen(port);
}

function getTime() {
  var strftime = require('strftime');
  var date = new Date();
  var date_string = strftime('%F %H:%M', date);
  return date_string + '\n';
}

timeServer();