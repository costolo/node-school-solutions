function httpUpperCaser() {
  var http = require('http');
  var map = require('through2-map');
  var port = process.argv[2];
  var server = http.createServer(function(req, res) {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  });
  server.listen(port);
}

function uppercase(message) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '127.0.0.1');
  xhr.send(message);
  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) 
        console.log(xhr.responseText); // 'This is the returned text.'
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  };
}


httpUpperCaser();
