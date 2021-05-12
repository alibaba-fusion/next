const path = require('path');
const fs = require('fs-extra');

const { logger, runCmd } = require('../utils');

const cwd = process.cwd();

const runCommond = function(cmd) {
    return runCmd(cmd).then(msg => {
        logger.success(`[command] ${cmd}`, '\n');
        logger.info(msg);
    });
};

module.exports = function*() {
    logger.info('> publish docs to @alifd/next-docs...');

    const packagePath = path.resolve('package.json');
    const packageInfo = require(packagePath);

    const version = packageInfo.version;
    const docs = path.join(cwd, 'next-docs');

    try {
        const pkgPath = path.join(cwd, 'next-docs', 'package.json');
        yield fs.ensureDir(docs);
        const currentDir = fs.readdirSync(cwd);
        const pkgContent = `{
    "name": "@alifd/next-docs",
    "version": "${version}",
    "description": "fusion next doc pages for material center and setting platform",
    "originNpm": "@alifd/next",
    "repository": "https://github.com/alibaba-fusion/next.git",
    "publishConfig": {
        "access": "public"
    }
}`;
        currentDir.forEach(file => {
            if (['compiled_docs', 'compiled_html', '.fusion', 'demos', 'dist', 'lib'].indexOf(file) > -1) {
                fs.copySync(path.join(cwd, file), path.join(docs, file));
            }
        });
        fs.writeFileSync(pkgPath, pkgContent);
        logger.success('Generate @alifd/next-docs successfully!');
        yield runCommond(`cd ${docs}; npm publish`);
        yield runCommond(`tnpm sync @alifd/next-docs`);
        logger.success('Publish @alifd/next-docs successfully!');
    } finally {
        yield fs.remove(docs);
    }
};
