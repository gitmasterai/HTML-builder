const path = require('node:path');
const fs = require('node:fs');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

let data = '';
readStream.on('data', (chunk) => data = data + chunk);
readStream.on('end', () => console.log(data));
