const testsContext = require.context('../../test/', true, /^.*(?<!a11y|v2)-spec.js$/);
testsContext.keys().forEach(testsContext);
