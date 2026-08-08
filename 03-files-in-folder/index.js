const path = require('node:path');
const fs = require('node:fs');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (_, files) => {
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    
    fs.stat(filePath, (_, stats) => {
      if (stats.isFile()) {
        const parsedFile = path.parse(file);
        const fileName = parsedFile.name;
        const fileExtension = parsedFile.ext.slice(1);
        const fileSize = stats.size;
                                    
        console.log(`${fileName} - ${fileExtension} - ${fileSize} byte`);
      }
    });
  });
});
