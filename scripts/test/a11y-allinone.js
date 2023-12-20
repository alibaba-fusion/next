const testsContext = require.context('../../components/', true, /a11y-spec.js$/);
testsContext.keys().forEach(testsContext);
