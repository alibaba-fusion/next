const path = require('path');
const fs = require('fs-extra');
const co = require('co');
const parse = require('@alifd/sassdoc-parser');
const generate = require('@alifd/sass-mapper');
const { logger } = require('../../utils');

module.exports = function (options) {
    return function (req, res, next) {
        return co(function* () {
            if (req.method === 'GET' && /\/getVariables.json/.test(req.url)) {
                const { cwd } = options;
                const { componentName } = req.query;
                const varPath = path.join(
                    cwd,
                    'components',
                    componentName,
                    'scss',
                    'variable.scss'
                );
                if (!(yield fs.exists(varPath))) {
                    throw new Error(`Can not find the scss variable file: ${varPath}`);
                }
                res.json(
                    yield {
                        varObj: getVariableObject(varPath),
                        cssScssMap: getCssScssMap(varPath, cwd, componentName),
                    }
                );
            } else {
                return next();
            }
        }).catch(e => {
            logger.error(e.stack);
            res.status(500).send(e.stack);
            next();
        });
    };
};

function* getVariableObject(varPath) {
    const obj = yield parse(varPath);
    return obj.variable[Object.keys(obj.variable)[0]];
}

function* getCssScssMap(varPath, cwd, componentName) {
    // eslint-disable-next-line
    const SCSS_PARAM_RULE = /\/\/\/\s*@(\w+)\s+([\w\$\{\}-]+)/g;
    const varScss = yield fs.readFile(varPath, 'utf8');
    let varPrefix;
    varScss.replace(SCSS_PARAM_RULE, (_, key, value) => {
        if (key === 'varPrefix') {
            varPrefix = value;
        }
    });

    const cssSccMap = yield generate(
        path.join(cwd, 'components', componentName, 'main.scss'),
        varPrefix
    );
    cssSccMap.selectors = cssSccMap.selectors.map(selector => {
        return {
            selector: selector.selector.replace(/"/g, ''),
            decls: selector.decls,
        };
    });

    return cssSccMap;
}
