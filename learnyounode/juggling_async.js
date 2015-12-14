function httpCollectJuggle() {
  var http = require('http');
  var url_one = process.argv[2];
  var url_two = process.argv[3];
  var url_three = process.argv[4];
  var data_string = "";
  http.get(url_one, function(response) {
    response.on('data', function(data) {
      data_string += data;
    }).on('end', function() {
      console.log(data_string);
      data_string = "";
      http.get(url_two, function(response) {
        response.on('data', function(data) {
          data_string += data;
        }).on('end', function() {
          console.log(data_string);
          data_string = "";
          http.get(url_three, function(response) {
            response.on('data', function(data) {
              data_string += data;
            }).on('end', function() {
              console.log(data_string);
            });
          });
        });
      });
    });
  });
}

httpCollectJuggle();