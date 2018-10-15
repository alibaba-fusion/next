const fs = require('fs-extra');
const path = require('path');
const remarkAbstract = require('remark');
const extractor = require('@alifd/api-extractor');
const { logger } = require('../utils');
const remark = remarkAbstract();
const cwd = process.cwd();

const blackPropList = ['prefix', 'className', 'style', 'locale'];

const defaultOrderMap = {
  size: 0,
  type: 1,
  shape: 2
};

module.exports = function generateApis(componentName = 'all') {
  if (componentName === 'all') {

    const components = fs.readdirSync(path.join(cwd, 'docs'));

    components.forEach(componentName => {
      if (/^\./.test(componentName)) {
        return;
      }
      generateApi(componentName);
    });
  } else {
    generateApi(componentName);
  }

};

function generateApi(componentName) {
  if (['core'].indexOf(componentName) > -1) {
    return false;
  }

  const readmePath = path.join(cwd, 'docs', componentName, 'index.md');

  if (!fs.existsSync(readmePath)) {
    return logger.error(`Can not find index.md: ${readmePath}`);
  }
  const readme = fs.readFileSync(readmePath, 'utf8');
  const ast = remark.parse(readme);
  const currentComponentPath = path.join(cwd, 'src', componentName);

  let mainApiInfo = extractor.extract(currentComponentPath);

  if (mainApiInfo) {
    let apiInfos = mainApiInfo.subComponents;

    apiInfos.forEach(apiInfo => {
      apiInfo.name = `${mainApiInfo.name}.${apiInfo.name}`;
    });
    delete mainApiInfo.subComponents;
    apiInfos.unshift(mainApiInfo);

    let apiAST = generateAPIAST(apiInfos, cwd);
    let apiExtraAST = getAPIExtraAST(ast);
    apiAST.children = apiAST.children.concat(apiExtraAST);
    updateAST(ast, apiAST);
    let readme = remark.stringify(ast).replace(/\*\s\*\s\*/g, '---');
    fs.writeFileSync(readmePath, readme);
  } else {
    logger.warn(`Can not get API information of ${currentComponentPath}`);
  }
}

function generateAPIAST(apiInfos) {
  const apiDocs = '## API\n' + apiInfos.reduce((ret, apiInfo) => {
    if (apiInfo.props) {
      let props = filterProps(apiInfo.props);
      props = orderProps(props);
      ret = `${ret}\n### ${apiInfo.name}\n${apiInfo.description ? '>' + apiInfo.description + '\n' : ''}${extractor.generatePropsMD(props)}\n`;
    }
    return ret;
  }, '');

  const apiAST = remark.parse(apiDocs);
  apiAST.children = apiAST.children.filter(child => {
    return !(child.children && child.children[0] && child.children[0].type === 'linkReference');
  });

  return apiAST;
}

function filterProps(props) {
  return Object.keys(props).reduce((ret, name) => {
    if (blackPropList.indexOf(name) === -1) {
      ret[name] = props[name];
    }
    return ret;
  }, {});
}

function orderProps(props) {
  const orderMap = Object.assign({}, defaultOrderMap);
  const names = Object.keys(props);
  names.forEach((name, index) => {
    if (!(name in orderMap)) {
      orderMap[name] = index * 10;
    }
  });
  const orderedNames = names.sort((prev, next) => orderMap[prev] - orderMap[next]);

  return orderedNames.reduce((ret, name) => {
    ret[name] = props[name];
    return ret;
  }, {});
}

function getAPIExtraAST(ast) {
  const generateReg = key => new RegExp(`^<!--\\s*api-extra-${key}\\s*-->$`, 'i');
  const startIndex = ast.children.findIndex(child =>
    child.type === 'html' && generateReg('start').test(child.value));
  if (startIndex > -1) {
    const endIndex = ast.children.findIndex(child =>
      child.type === 'html' && generateReg('end').test(child.value));
    if (endIndex > -1 && startIndex < endIndex) {
      return ast.children.slice(startIndex, endIndex + 1);
    }
  }

  return [];
}

function updateAST(ast, apiAST) {
  const apiIndex = ast.children.findIndex(child =>
    child.type === 'heading' &&
    child.depth === 2 &&
    child.children &&
    child.children[0] &&
    child.children[0].value === 'API');
  if (apiIndex > -1) {
    const toNextHeading2 = ast.children.slice(apiIndex + 1).findIndex(child =>
      child.type === 'heading' &&
      child.depth === 2
    ) + 1;

    if (toNextHeading2 === 0) {
      ast.children = ast.children.slice(0, apiIndex).concat(apiAST.children);
    } else {
      ast.children = ast.children.slice(0, apiIndex).concat(apiAST.children, ast.children.slice(apiIndex + toNextHeading2));
    }
  } else {
    ast.children = ast.children.concat(apiAST.children);
  }

  return ast;
}

