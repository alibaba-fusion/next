const path = require('path');
const cp = require('child_process');
const parseArgs = require('minimist');
const { checkComponentName } = require('../../utils');

const scriptPath = path.join(__dirname, 'server.js');

const args = checkComponentName(false, true);

// 获取输入的 mode，css / scss，默认scss
// const mode = process.env.npm_config_mode || 'scss';
// args.push(mode);

const argv = parseArgs(args);

argv._.forEach(item => {
    if (item.indexOf('=') > -1) {
        const key = item.split('=')[0];
        const value = item.split('=')[1];
        argv[key] = value;
    }
});

start(restoreArgs(argv));

function start(args) {
    const worker = cp.fork(scriptPath, args);

    hanleMsg(worker);
    function hanleMsg(worker) {
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
            } else if (data.indexOf('CHANGE_DIR') === 0) {
                worker.kill('SIGINT');
                const dir = data.split('=')[1];
                const argv = parseArgs(args);
                argv.dir = dir;
                const newArgs = restoreArgs(argv);
                start(newArgs);
            }
        });
    }
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
