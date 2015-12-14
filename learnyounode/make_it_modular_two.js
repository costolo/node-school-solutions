var filter = require('./mod_one');
var path = process.argv[2];
var ext = process.argv[3];

filter(path, ext, function(err, data) {
  if (err) {
    throw err;
  } else {
    for (var x = 0, len = data.length; x < len; x++) {
      console.log(data[x]);
    }
  }
});