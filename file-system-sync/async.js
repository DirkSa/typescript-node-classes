const fs = require('fs');

let watcher;

fs.writeFile('file.txt', 'Hello', function(err) {
  fs.readFile('file.txt', 'utf8', function(err, content) {
    console.log('File contains: ', content);
    fs.unlink('file.txt', function(err) {
      console.log('Done');
      // watcher.close();
    });
  });
});

watcher = fs.watch('.', null, function(event, filename) {
  console.log(event, filename);
});