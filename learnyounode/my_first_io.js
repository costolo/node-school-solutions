function countNewLines() {
  var fs = require('fs');
  var file = fs.readFileSync(process.argv[2]).toString();
  var new_line_count = file.split('\n').length - 1;
  console.log(new_line_count);
}

countNewLines();
