
let filename = 'file.txt';

const write = require('./write');
const { readFile } = require('./read');

write(filename, 'content of my file')
  .then(() => readFile(filename))
  .then((content) => console.log(content))
  .catch((err) => console.log('something went wrong', err))
