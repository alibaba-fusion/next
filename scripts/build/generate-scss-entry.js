const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const cwd = process.cwd();
const { logger } = require('../utils');

module.exports = function () {
  const styleJsPaths = glob.sync(path.join(cwd, 'src', '*', 'style.js'));
  styleJsPaths.forEach(styleJsPath => {
    const styleJSContent = fs.readFileSync(styleJsPath, 'utf8');
    const relativePaths = styleJSContent.split(/\n/g).filter(_ => _).map(line => line.match(/import '(.+)';/)[1]);

    const indexScssContent = relativePaths.map(relativePath => {
      const pathDir = path.dirname(relativePath);
      if (pathDir !== '.') {
        relativePath = path.join(pathDir, 'index.scss');
      }
      return `@import "${relativePath}";\n`;
    }).join('');
    const componentName = path.basename(path.dirname(styleJsPath));
    fs.writeFileSync(path.join(cwd, 'lib', componentName, 'index.scss'), indexScssContent);
    fs.writeFileSync(path.join(cwd, 'es', componentName, 'index.scss'), indexScssContent);
  });

  // 旧包中 lib/_components/@alife/next-core/lib 下的 index.scss 和 index-noreset.scss 很可能被用户使用，故保留该文件夹结构
  const _corePath = path.resolve(cwd, 'lib/_components/@alife/next-core/lib');
  fs.mkdirpSync(_corePath);
  fs.writeFileSync(path.join(_corePath, 'index.scss'), '@import "../../../../core/reset.scss";\n');
  fs.writeFileSync(path.join(_corePath, 'index-noreset.scss'), '@import "../../../../core/index-noreset.scss";\n');

  logger.success('Generate index.scss successfully!');
};
