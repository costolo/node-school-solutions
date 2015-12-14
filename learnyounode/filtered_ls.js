function filteredLS(path, ext) {
  var fs = require('fs');
  fs.readdir(path, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      for(var x = 0, len = data.toString().split(',').length; x < len; x++) {
        if (data[x].split('.')[1] === ext) {
          console.log(data[x]);
        }
      }
    }
  });
}

filteredLS(process.argv[2], process.argv[3]);