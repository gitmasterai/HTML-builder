const path = require('node:path');
const fs = require('node:fs');

const stylesPath = path.join(__dirname, 'styles');
const projectDistPath = path.join(__dirname, 'project-dist');
const bundleCssPath = path.join(projectDistPath, 'bundle.css');
const bundleCssWriteStream = fs.createWriteStream(bundleCssPath);

fs.readdir(stylesPath, { withFileTypes: true }, (_, stylesFiles) => {
    stylesFiles.filter((file) => file.isFile())
        .filter((styleWithNumberCss) => path.extname(styleWithNumberCss.name) === '.css')
        .forEach((styleWithNumberCss) => {
            const styleWithNumberCssPath = path.join(stylesPath, styleWithNumberCss.name);
            const styleWithNumberCssReadStream = fs.createReadStream(styleWithNumberCssPath, { encoding: 'utf8' });            
            styleWithNumberCssReadStream.pipe(bundleCssWriteStream);
        });
});
