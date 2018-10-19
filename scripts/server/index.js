const path = require('path');
const cp = require('child_process');
const parseArgs = require('minimist');
const { checkComponentName } = require('../utils');
const scriptPath = path.join(__dirname, 'server.js');

const componentName = checkComponentName();
start([componentName]);

function start(args) {
  const worker = cp.fork(scriptPath, args);
  worker.on('message', data => {
    if (data === 'RESTART') {
      worker.kill('SIGINT');
      start(args);
    } else if (data.indexOf('CHANGE_LANG') === 0) {
      worker.kill('SIGINT');
      const lang = data.split('=')[1];
      const argv = parseArgs(args);
      argv.lang = lang;
      const newArgs = restoreArgs(argv);
      start(newArgs);
    }
  });
}

function restoreArgs(argv) {
  return Object.keys(argv).reduce((ret, key) => {
    let arr;
    if (key === '_') {
      arr = argv._;
    } else {
      arr = [`--${key}`, argv[key]];
    }

    return ret.concat(arr);
  }, []);
}
