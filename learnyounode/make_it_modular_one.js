function filteredLS(path, ext, callback) {
  var fs = require('fs');
  var files = [];
  fs.readdir(path, function(err, data) {
    if (err) {
      return callback(err);
    } else {
      for(var x = 0, len = data.toString().split(',').length; x < len; x++) {
        if (data[x].split('.')[1] === ext) {
          files.push(data[x]);
        }
      }
    }
    return callback(null, files);
  });
}

module.exports = filteredLS;
