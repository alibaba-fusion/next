const path = require('path');
const cp = require('child_process');
const parseArgs = require('minimist');

const scriptPath = path.join(__dirname, 'server.js');

const argv = parseArgs(process.argv.slice(2));

if (argv._.length === 2 && argv._[0] === 'push') {

    const list = argv._[1].split(',').filter(item => item);

    console.log('1. rm -rf __html =======');
    cp.execSync('rm -rf __html');
    console.log('2. git clone http://gitlab.alibaba-inc.com/youlu.zgy/next_html.git __html');
    cp.execSync('git clone http://gitlab.alibaba-inc.com/youlu.zgy/next_html.git __html');
    console.log('2. done =======');

    let num = list.length;

    list.forEach(item => {
        argv.name = item;
        start(restoreArgs(argv), () => {
            num--;
            if (num === 0) {
                cp.execSync('cd __html/ && git add . && git commit -m "html push" && git pull && git push -u -f origin master');
            }
        });
    });


    return false;
}

function start(args, cb) {
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
        } else if (data.indexOf('CHANGE_DIR') === 0) {
            worker.kill('SIGINT');
            const dir = data.split('=')[1];
            const argv = parseArgs(args);
            argv.dir = dir;
            const newArgs = restoreArgs(argv);
            start(newArgs);
        }
    });

    worker.on('exit', data => {
        cb();
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
