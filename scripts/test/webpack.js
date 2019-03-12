const getWebpackConfig = require('../webpack/dev');

module.exports = function(componentName, runAll) {
    const config = getWebpackConfig(false);

    if (runAll || componentName === 'core') {
        config.devtool = false;
    }

    config.module.exprContextCritical = false;
    config.module.rules = config.module.rules.map(rule => {
        if (rule.use.loader === 'babel-loader') {
            rule.use.options.plugins.push(
                componentName && !runAll
                    ? [
                          require.resolve('babel-plugin-istanbul'),
                          {
                              exclude: [
                                  `src/!(${componentName})/**/*.@(js|jsx)`,
                                  'test/**',
                              ],
                          },
                      ]
                    : require.resolve('babel-plugin-istanbul'),
                require.resolve('babel-plugin-espower')
            );
        }
        return rule;
    });

    return config;
};
