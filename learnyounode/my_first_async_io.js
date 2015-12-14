function asyncIO() {
  var fs = require('fs');
  var file = fs.readFile(process.argv[2], function callback(err, data) {
    if (err) {
      return err;
    } else {
      console.log(data.toString().split('\n').length - 1);
    }
  });
}

asyncIO();