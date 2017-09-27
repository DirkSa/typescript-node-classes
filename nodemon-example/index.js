const fs = require('fs');

let searchedString = 'devDependencies';

readDirectory('.')
  .then((result) => {
    let promisesArray = [];
    result.forEach((singleFile) => {
      let statPromise = stat(singleFile);
      promisesArray.push(statPromise);
    });

    return Promise.all(promisesArray);
  })
  .then((arrayOfStats) => {
    console.log(arrayOfStats);

    arrayOfStats
      .forEach((singleStat) => {
      if (singleStat.stat.isDirectory()){ 
        readDirectory(singleStat.stat.path);
      }
      if (singleStat.stat.isFile()) {
        readFile(singleStat.path).then((content) => {
          lines = content.split('\n');
          lines.forEach((line) => {
            if (line.indexOf(searchedString) > 0) {
              console.log('FOUND IT in ', singleStat.path);
            }
          })
        })
      }
    })
  });
  
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) { return reject(err); }
      resolve(content)
    })
  });
}

function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) { return err; }
      resolve({
        path: path,
        stats: stats
      });
    })
  })
}

function readDirectory(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, filesInDirectory) => {
      if (err) { return reject(err); }
      resolve(filesInDirectory);
    });
  });
}