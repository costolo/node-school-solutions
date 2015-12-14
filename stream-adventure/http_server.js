function httpServer() {
  var http = require('http');
  var port = process.argv[2];
  var through = require('through2');
  var server = http.createServer(function(req, res) {
    var stream = through(function(buf, enc, next) {
      this.push(buf.toString().toUpperCase());
      next();
    });
    if (req.method === 'POST') {
      req.pipe(stream).pipe(res);
    } else {
      res.send('send a POST request');
    }
  });
  server.listen(port);
}

httpServer();