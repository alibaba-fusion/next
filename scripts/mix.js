const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// 应该只会用一次，批量生成 mobile 目录及其引用
const cwd = process.cwd();
const { getComponentName } = require('./utils');

const componentPaths = glob.sync(path.join(cwd, 'src', '*'));

componentPaths.forEach(comPath => {
    const dashName = path.basename(comPath);
    const upperName = getComponentName(path.basename(comPath));
    if (['demo-helper', 'core', 'index.js'].indexOf(dashName) > -1) {
        return;
    }

    const srcBasePath = path.join(cwd, 'src', dashName);
    const mobileContent = `import { ${upperName} as Meet${upperName} } from "@alifd/meet-react";
import Next${upperName} from "../index";

const ${upperName} = Meet${upperName} ? Meet${upperName} : Next${upperName};

export default ${upperName};
    `;
    fs.outputFileSync(path.join(srcBasePath, 'mobile/index.jsx'), mobileContent);
});
