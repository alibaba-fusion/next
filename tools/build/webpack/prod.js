/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CssSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const loaders = require('./loaders');

module.exports = function (options = {}) {
    const minimize = options.minimize;
    const packagePath = path.resolve('package.json');
    const version = require(packagePath).version;
    const tsConfigPath = path.resolve(__dirname, './ts.json');

    const config = {
        output: {},
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: loaders.js({}),
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                configFile: tsConfigPath,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: loaders.css({ minimize }).slice(1),
                    }),
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: loaders.scss({ minimize }).slice(1),
                    }),
                },
            ],
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `@alifd/next@${version} (https://fusion.design)
Copyright 2018-present Alibaba Group,
Licensed under MIT (https://github.com/alibaba-fusion/next/blob/master/LICENSE)`,
                exclude: /\.css$/,
            }),
            new CaseSensitivePathsPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin(),
            // support ie 9
            new CssSplitWebpackPlugin({
                size: 4000,
                preserve: true,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
            }),
            new webpack.ProgressPlugin(),
        ],
    };

    if (minimize) {
        config.output.filename = '[name].min.js';
        config.plugins.push(
            new ExtractTextPlugin(options.extractTextName || '[name].min.css'),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    ascii_only: true, // eslint-disable-line
                },
            })
        );
    } else {
        config.output.filename = '[name].js';
        config.plugins.push(new ExtractTextPlugin(options.extractTextName || '[name].css'));
    }

    return config;
};
