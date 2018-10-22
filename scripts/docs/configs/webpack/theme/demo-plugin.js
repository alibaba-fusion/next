const path = require('path');
const _ = require('lodash');

function DemoPlugin(options) {
    this._options = _.extend({}, options);
}

module.exports = DemoPlugin;

DemoPlugin.prototype.apply = function(compiler) {
    const options = this._options;
    const layout = options.layout;
    const filename = options.filename;
    const depsname = options.depsname;
    const deps = options.deps;
    const commonName = options.commonName;

    compiler.plugin('emit', (compilation, callback) => {
        const assets = compilation.assets;

        // cache common
        const commons = {};
        compilation.namedChunks[commonName].files.forEach(file => {
            if (path.extname(file) === '.js') {
                commons.js = this._cut(file, assets);
            } else if (path.extname(file) === '.css') {
                commons.css = this._cut(file, assets);
            }
        });

        // every chunk create a html & delete no used files
        _.forEach(compilation.namedChunks, (chunk, name) => {
            if (name === commonName) {
                return;
            }

            // add html
            const pathname = compilation.getPath(filename, {
                chunk: chunk
            });
            const files = chunk.files;
            const js = this._cut(_.find(files, file => path.extname(file) === '.js'), assets);

            assets[pathname] = {
                source: () => {
                    return layout({
                        commonJs: commons.js,
                        commonCss: commons.css,
                        js: js,
                        component: name
                    });
                },
                size() {
                    return this.source().length;
                }
            };

            // add deps.json
            const dPathname = compilation.getPath(depsname, {
                chunk: chunk
            });

            assets[dPathname] = {
                source: () => {
                    return JSON.stringify(deps[name]);
                },
                size() {
                    return this.source().length;
                }
            };
        });

        callback();
    });
};

// cut file from assets
DemoPlugin.prototype._cut = function(file, assets) {
    const source = assets[file].source();

    delete assets[file];

    return source;
};
