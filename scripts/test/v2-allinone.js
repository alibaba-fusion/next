const testsContext = require.context('../../test/', true, /^.*-v2-spec.js$/);
testsContext.keys().forEach(testsContext);
