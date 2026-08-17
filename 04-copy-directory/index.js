const path = require('node:path');
const fs = require('node:fs');

const filesCopyPath = path.join(__dirname, "files-copy");
const filesPath = path.join(__dirname, "files");

fs.rm(filesCopyPath, { recursive: true }, () => {
  fs.mkdir(filesCopyPath, () => {
    fs.readdir(filesPath, { withFileTypes: true }, (_, filesFiles) => {
      filesFiles.forEach((filesFile) => {
          const filesFilePath = path.join(filesPath, filesFile.name);
          const filesCopyFilePath = path.join(filesCopyPath, filesFile.name);
          fs.copyFile(filesFilePath, filesCopyFilePath, () => {});
        });
    });
  });
});
