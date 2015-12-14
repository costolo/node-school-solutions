function lines() {
  var split = require('split');
  var through = require('through2');
  var count = 1;
  process.stdin
    .pipe(split('\n'))
    .pipe(through(function (line, enc, next) {
      if (count % 2 === 0) {
        this.push(line.toString().toUpperCase() + '\n');
      } else {
        this.push(line.toString().toLowerCase() + '\n');
      }
      count += 1;
      next();
    }))
    .pipe(process.stdout);
}

lines();