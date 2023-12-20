const testsContext = require.context('../../components/', true, /^.*-v2-spec.js$/);
testsContext.keys().forEach(testsContext);
