const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');
const co = require('co');
const changelog = require('./changelog');
const utils = require('../utils');

const cwd = process.cwd();
const packagePath = path.resolve('package.json');
let packageInfo;

const runCmd = function(cmd) {
  return utils.runCmd(cmd).then(msg => {
    utils.logger.success(`[command] ${cmd}`,'\n');
    utils.logger.info(msg);
  });
};

co(function* () {
  // yield changelog();

  packageInfo = require(packagePath);
  // updateVersionInCode();

  // yield pushMaster();
  yield pushPlatformDocsBranch();
  yield publishToNpm();
}).catch(err => {
  utils.logger.error('Release failed', err.stack);
});

function updateVersionInCode() {
  const entryPath = path.join(cwd, 'index.js');
  let entryContent = fs.readFileSync(entryPath, 'utf8');
  entryContent = entryContent.replace(/(next\.version = ')[\d.\w]+(';)/, (all, s1, s2) => {
    return `${s1}${packageInfo.version}${s2}`;
  });
  fs.writeFileSync(entryPath, entryContent);
}

function* pushMaster() {
  yield runCmd('git checkout master');
  yield runCmd('git add .');
  yield runCmd(`git commit -m 'chore(*): Release-${packageInfo.version}'`);
  yield runCmd('git pull');
  yield runCmd('git push origin master');

  utils.logger.success('******** push to branch master success! ********\n');
}

function* pushPlatformDocsBranch() {
  const docs = path.join(cwd, 'platform-docs');

  try {
    yield fs.ensureDir(docs);

    yield runCmd('git worktree add platform-docs -B platform-docs');
    const currentDir = fs.readdirSync(cwd);

    currentDir.forEach(file => {
      if(['node_modules', '.git', 'platform-docs'].indexOf(file) > -1) {
        return false;
      }

      fs.copySync(path.join(cwd, file), path.join(docs, file));
    });

    const gitIgnore = path.join(docs, '.gitignore');
    const buildIgnore = path.join(__dirname, 'build.gitignore');
    const content = fs.readFileSync(buildIgnore, 'utf8');
    fs.writeFileSync(gitIgnore, content);

    yield runCmd('cd platform-docs;git add .');

    utils.logger.success(`[command] cd platform-docs;git commit -m 'chore(*): Release-${packageInfo.version}-build' || true`);
    cp.execSync(`cd platform-docs;git commit -m 'chore(*): Release-${packageInfo.version}-build' || true`);

    yield runCmd('cd platform-docs;git push origin platform-docs -f');
    yield runCmd(`cd platform-docs;git tag build/${packageInfo.version}`);
    yield runCmd(`cd platform-docs;git push origin build/${packageInfo.version}`);

    utils.logger.success('******** push to branch platform-docs success! ********\n');
  } finally {
    yield fs.remove(docs);
    yield runCmd('git worktree prune');
  }
}

function* publishToNpm() {
  yield runCmd('git checkout master');
  yield runCmd('git pull');
  yield runCmd(`git tag ${packageInfo.version}`);
  yield runCmd(`git push origin ${packageInfo.version}`);
  yield runCmd('npm publish');
}

