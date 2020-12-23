/**
 * test server for Upload demo
 * $ node script/upload-server.js
 */
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const http = require('http');

const port = 6001;
const tmpdir = path.resolve(__dirname, '../node_modules');

http.createServer(function(req, res) {
    const method = req.method.toLowerCase();
    /* eslint-disable no-console */
    console.log(method, req.url);
    // console.log(req.headers)

    if (req.url.match('/upload.do')) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        if (method === 'post') {
            // parse a file upload
            const form = new formidable.IncomingForm();
            form.encoding = 'utf-8';
            form.uploadDir = tmpdir;
            form.keepExtensions = true;

            form.parse(req, function(err, fields, files) {
                if (err) {
                    res.end({ success: false, message: err });
                    return;
                }

                console.log('fields:', fields);
                console.log('files:', files);

                res.writeHead(200);
                if (files.file) {
                    console.log(`recive file: ${files.file.path}`);

                    // res.writeHead(200, {'content-type': 'application/json'});
                    // res.write(`<script>document.domain='taobao.com'</script>`);

                    // 模拟上传时间
                    setTimeout(() => {
                        res.end(
                            JSON.stringify({
                                success: true,
                                message: 'success',
                                url: `http://${req.headers.host}${files.file.path.replace(tmpdir, '')}`,
                            })
                        );
                    }, Math.random() * 3000);
                } else {
                    res.end(
                        JSON.stringify({
                            success: false,
                            message: 'use like name = file',
                        })
                    );
                }
            });

            return;
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(`<form action="/upload.do" enctype="multipart/form-data" method="post">
                <input type="file" name="file" multiple="multiple">
                <br>
                <input type="submit" value="submit">
                </form>`);
        }
    } else if (req.url === '/crossdomain.xml') {
        res.writeHead(200, { 'content-type': 'application/xml' });
        res.end(`
<?xml version="1.0"?>
<cross-domain-policy>
    <allow-access-from domain="*" />
</cross-domain-policy>`);
        return;
    } else if (method === 'get') {
        const pathname = req.url.split('?')[0];
        const realPath = tmpdir + pathname; //所有文件都存在与resources目录下
        console.log(realPath);
        fs.exists(realPath, function(exists) {
            //判断文件是否存在
            if (!exists || !fs.statSync(realPath).isFile()) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Not Found!\n');
                res.end();
            } else {
                fs.readFile(realPath, 'binary', function(err, file) {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.write(file, 'binary');
                    res.end();
                });
            }
        });
    }
}).listen(port);

console.log(`Listen to: http://127.0.0.1:${port}/upload.do`);
