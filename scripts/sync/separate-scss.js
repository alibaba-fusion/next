const fs = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const syntax = require('postcss-scss');

const varMap = {
  'date-picker': ['input', 'time-picker'],
  'select': ['input'],
  'menu-button': ['button']
};

const mixinMap = {
  'loading': ['animate'],
  'date-picker': ['input'],
  'search': ['input'],
  'select': ['input']
};

module.exports = function(indexScssPath) {
  if (!fs.existsSync(indexScssPath)) {
    return;
  }

  const scss = fs.readFileSync(indexScssPath, 'utf8');
  const componentPath = path.dirname(indexScssPath);
  const componentName = path.basename(componentPath);
  const ast = scss2AST(scss);

  const depPaths = [];
  const mainNodes = [];
  ast.nodes.forEach(node => {
    if (node.name === 'import') {
      const matched = node.params.match(/(..\/([\w-]+)\/)index(.scss)?/);
      if (matched) {
        const depPath = matched[1];
        const depName = matched[2];
        if (depName !== 'core') {
          if (varMap[componentName] && varMap[componentName].indexOf(depName) > -1) {
            mainNodes.push(Object.assign({}, node, {
              params: `"${depPath}scss/variable.scss"`
            }));
          }

          if (mixinMap[componentName] && mixinMap[componentName].indexOf(depName) > -1) {
            mainNodes.push(Object.assign({}, node, {
              params: `"${depPath}scss/mixin.scss"`
            }));
          }

          return depPaths.push(depPath);
        }
      }
    }

    mainNodes.push(node);
  });
  ast.nodes = mainNodes;

  const mainScssPath = path.join(componentPath, 'main.scss');
  const mainScss = ast2Scss(ast);
  fs.writeFileSync(mainScssPath, mainScss);

  const styleJSPath = path.join(componentPath, 'style.js');
  const styleJS = depPaths.map(p => `import '${p}style.js';\n`).join('') + 'import \'./main.scss\';\n';
  fs.writeFileSync(styleJSPath, styleJS);

  fs.removeSync(indexScssPath);
};

function scss2AST(scss) {
  return postcss().process(scss, {
    syntax: syntax
  }).result.root;
}

function ast2Scss(ast) {
  return ast.toResult().css;
}
