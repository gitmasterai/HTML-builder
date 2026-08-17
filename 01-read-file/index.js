const path = require('node:path');
const fs = require('node:fs');

const textTxtPath = path.join(__dirname, 'text.txt');
const textTxtReadStream = fs.createReadStream(textTxtPath, { encoding: 'utf8' });

textTxtReadStream.on('data', (chunk) => console.log(chunk));
