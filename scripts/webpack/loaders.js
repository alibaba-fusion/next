const babelConfig = require('@alifd/babel-preset-next')({}, { runtime: true });

const js = (options = {}) => ({
    loader: 'babel-loader',
    options: Object.assign(
        {
            cacheDirectory: true,
        },
        babelConfig,
        options
    ),
});

const css = (options = {}) => [
    {
        loader: 'style-loader',
    },
    {
        loader: 'css-loader',
        options: {
            minimize: !!options.minimize,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')({
                    browsers: [
                        'last 2 versions',
                        'Firefox ESR',
                        '> 1%',
                        'ie >= 9',
                    ],
                }),
            ],
        },
    },
];

const scss = (options = {}) => [
    ...css(options),
    {
        loader: 'fast-sass-loader',
    },
];

module.exports = { js, css, scss };
