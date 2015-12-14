function transform() {
  var through = require('through2');
  var stream = through(function(buf, enc, next) {
    this.push(buf.toString().toUpperCase());
    next();
  });
  
  process.stdin.pipe(stream).pipe(process.stdout);
}

transform();