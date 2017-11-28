const filesystem = require('fs');

// write
function writeFile(filename, content) {
  return new Promise((resolve, reject) => {
    filesystem.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
}

module.exports = writeFile;