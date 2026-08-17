const path = require('node:path');
const fs = require('node:fs');

const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, { withFileTypes: true }, (_, files) => {
  files.filter((file) => file.isFile())
    .forEach((file) => {
      const filePath = path.join(secretFolderPath, file.name);
      const fileExtensionWithDot = path.extname(filePath);
      const fileExtensionIndex = 1;
      const fileExtension = fileExtensionWithDot.slice(fileExtensionIndex);
      const fileName = path.basename(filePath, fileExtensionWithDot);
      
      fs.stat(filePath, (_, stats) => {
        const fileSize = stats.size;
        
        console.log(`${fileName} - ${fileExtension} - ${fileSize} byte`);
      });
    });
});
