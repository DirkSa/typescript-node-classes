const fs = require('fs');

const searchedString = 'devDependencies';

// callback hell version

fs.readdir('.', (err, files) => {
  files.forEach(file => {
    fs.stat(file, (err, stats) => {
      if (!stats.isFile()) { return; }
      fs.readFile(file, 'utf-8', (err, content) => {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.indexOf(searchedString) > 0) {
            console.log(`${file}:${index} ${line}`);
          }
        })
      })
    });
  });
});