const readline = require('node:readline');
const process = require('node:process');
const path = require('node:path');
const fs = require('node:fs');

const stdinStdoutReadline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const textTxtPath = path.join(__dirname, 'text.txt');

fs.unlink(textTxtPath, (_) => {
  const textTxtWriteStream = fs.createWriteStream(textTxtPath, { encoding: 'utf8' });

  console.log('Please, enter your text below:');

  stdinStdoutReadline.on('line', (input) => {
    if (input === 'exit') {
      stdinStdoutReadline.close();
    } else {    
      textTxtWriteStream.write(`${input}\n`);
    }
  });

  stdinStdoutReadline.on('close', () => console.log('Thank you for checking!'));
});

