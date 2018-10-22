const fs = require('fs');
const path = require('path');
const { logger, checkComponentName } = require('./utils');

const cwd = process.cwd();

const componentName = checkComponentName();

const varFilePath = path.join(
    cwd,
    'src',
    componentName,
    'scss',
    'variable.scss'
);
if (!fs.existsSync(varFilePath)) {
    throw new Error(`Can not find the variable.scss: ${varFilePath}`);
}
const varContent = fs.readFileSync(varFilePath, 'utf8');

const nsReg = /\/\/\/\s+@namespace\s+(.+)/g;
const nsMap = {};
let nsMatched;
// eslint-disable-next-line
while ((nsMatched = nsReg.exec(varContent))) {
    nsMap[nsMatched[1]] = true;
}

const nsNewMap = {};
Object.keys(nsMap).forEach((ns) => {
    const parts = ns.split('/').filter((_) => _);
    parts.reduce((ret, part) => {
        ret[part] = ret[part] || {};
        return ret[part];
    }, nsNewMap);
});

const order = {};
const loop = (nsMap, prefix, preValue) => {
    Object.keys(nsMap).forEach((nsPart, index) => {
        const ns = prefix ? `${prefix}/${nsPart}` : nsPart;
        const value = prefix ? preValue * 10 + index : 1;
        order[ns] = prefix ? value : index + 1;
        loop(nsMap[nsPart], ns, value);
    });
};
loop(nsNewMap, '', 1);
delete order.size;
delete order.statement;

let newVarContent;
const orderReg = /(\/\/\/\s+@order\s+)(\{.*\})/;
if (orderReg.test(varContent)) {
    newVarContent = varContent.replace(orderReg, function(...args) {
        return args[1] + JSON.stringify(order);
    });
} else {
    const metaReg = /(\/\/\/\/(\s|.)+?)(\/\/\/\/)/;
    newVarContent = varContent.replace(metaReg, function(...args) {
        return `${args[1]}/// @order ${JSON.stringify(order)}\n${args[3]}`;
    });
}

fs.writeFileSync(varFilePath, newVarContent);
logger.success('Add order to variable file successfully: ');
logger.info(order);
