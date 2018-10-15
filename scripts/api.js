const generateApis = require('./build/generate-api');
const { checkComponentName } = require('./utils');

const componentName = checkComponentName(true);
generateApis(componentName);
