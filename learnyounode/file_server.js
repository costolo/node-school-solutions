function fileServer() {
  var http = require('http');
  var fs = require('fs');
  var port = process.argv[2];
  var file_path = process.argv[3];
  var server = http.createServer(function(request, response) {
    console.log(request);
    fs.createReadStream(file_path).pipe(response);
  });
  server.listen(port);
}

fileServer();