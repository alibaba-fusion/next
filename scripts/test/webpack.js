const getWebpackConfig = require('../webpack/dev');

module.exports = function (componentName, runAll) {
    const config = getWebpackConfig(false);

    if (runAll || componentName === 'core') {
        config.devtool = false;
    }

    config.module.exprContextCritical = false;
    let babelUse;
    config.module.rules = config.module.rules.map(rule => {
        if (rule.use.loader === 'babel-loader') {
            babelUse = rule.use;
            rule.use.options.plugins.push(
                componentName && !runAll
                    ? [
                          require.resolve('babel-plugin-istanbul'),
                          {
                              exclude: [`src/!(${componentName})/**/*.@(js|jsx)`, 'test/**'],
                          },
                      ]
                    : require.resolve('babel-plugin-istanbul'),
                require.resolve('babel-plugin-espower')
            );
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            babelUse,
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: require.resolve('./ts.json'),
                },
            },
        ],
        exclude: /node_modules/,
    });
    config.devtool = 'cheap-module-eval-source-map';
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
