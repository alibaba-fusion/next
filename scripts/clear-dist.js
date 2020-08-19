const fs = require('fs-extra');
const path = require('path');

const distPath = path.join(process.cwd(), 'dist');

fs.emptyDirSync(distPath);

