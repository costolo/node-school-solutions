var routes = {
  '/api/parsetime': function(parsed_url) {
    var date = new Date(parsed_url.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },

  '/api/unixtime': function(parsed_url) {
    var date = new Date();
    date = date.getTime();
    return {'unixtime': date};
  }
};

function jsonServer() {
  var http = require('http');
  var port = process.argv[2];
  var url = require('url');
  var server = http.createServer(function(req, res) {
    parsed_url = url.parse(req.url, true);
    resource = routes[parsed_url.pathname];
    if (resource) {
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(resource(parsed_url)));
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  server.listen(port);
}

jsonServer();