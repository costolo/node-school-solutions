function commandLineAddition() {
  var len = process.argv.length;
  var sum = 0;
  var num;
  for (var x = 2; x < len; x++) {
    num = parseInt(process.argv[x], 10);
    if (num) {
      sum += num;
    }
  }
  console.log(sum);
}

commandLineAddition();