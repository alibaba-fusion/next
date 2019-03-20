const testsContext = require.context(
    '../../test/',
    true,
    /^.*(?<!a11y)-spec.js$/
);
testsContext.keys().forEach(testsContext);
