const testsContext = require.context('../../components/', true, /^.*-spec.js$/);
testsContext.keys().forEach(testsContext);
