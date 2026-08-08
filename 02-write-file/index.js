const path = require('node:path');
const fs = require('node:fs');
const process = require('node:process');
const readline = require('node:readline');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });
const readlineInterface = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

console.log('Please, enter your text below:');

readlineInterface.on('line', (input) => {  
  if (input === 'exit') {
    readlineInterface.close();
  } else {
    writeStream.write(`${input}\n`);
  }
});

readlineInterface.on('close', () => console.log('Thank you for checking!'));
