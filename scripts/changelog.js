const co = require('co');
const fs = require('fs-extra');
const path = require('path');

const cwd = process.cwd();
const changelog = require('./release/changelog');
const { logger } = require('./utils');

const packagePath = path.resolve('package.json');

co(function* () {
    yield changelog();
    updateVersionInCode();

}).catch(err => {
    logger.error('Generate changelog failed', err.stack);
});

function updateVersionInCode() {
    const packageInfo = require(packagePath);
    const entryPath = path.join(cwd, 'index.js');
    let entryContent = fs.readFileSync(entryPath, 'utf8');
    entryContent = entryContent.replace(/(next\.version = ')[\d.\w]+(';)/, (all, s1, s2) => {
        return `${s1}${packageInfo.version}${s2}`;
    });
    fs.writeFileSync(entryPath, entryContent);

    logger.success(`Update version in [${entryPath}] success`);
}
