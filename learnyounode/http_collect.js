function httpCollect() {
  var http = require('http');
  var url = process.argv[2];
  var data_string = "";
  http.get(url, function(response) {
    response.on('data', function(data) {
      data_string += data;
    }).on('end', function() {
      console.log(data_string.length);
      console.log(data_string);
    });
  });
}

httpCollect();