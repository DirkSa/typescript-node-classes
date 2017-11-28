
const filesystem = require('fs');

// read
function readFile(filename) {
  return new Promise((resolve, reject) => {
    filesystem.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

exports.readFile = readFile;
