var fs = require('fs');

var content = process.argv[2];

fs.readFile(content, function (err, file) {
 
  var spaces = file.toString().split('\n').length - 1;

  console.log(spaces);

} )