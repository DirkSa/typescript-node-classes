const fs = require('fs');

fs.writeFileSync('file.txt', 'Hello');

let content;
content = fs.readFileSync('file.txt');
console.log(content)
content = fs.readFileSync('file.txt', 'utf8');
console.log(content)

fs.unlinkSync('file.txt');