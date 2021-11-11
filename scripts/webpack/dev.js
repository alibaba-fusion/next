const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const loaders = require('./loaders');

const { getBabelConfig } = require('build-scripts-config');

const babelConfig = getBabelConfig();
module.exports = function(progress = true) {
    const conf = {
        output: {
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx'],
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.[tj]sx?$/,
                    use: loaders.js(babelConfig),
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: loaders.css(),
                },
                {
                    test: /\.scss$/,
                    use: loaders.scss(),
                },
            ],
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
            new WatchMissingNodeModulesPlugin(path.resolve(process.cwd(), 'node_modules')),
            new webpack.optimize.ModuleConcatenationPlugin(),
        ],
    };

    if (progress) {
        conf.plugins.concat([new webpack.ProgressPlugin()]);
    }
    return conf;
};
