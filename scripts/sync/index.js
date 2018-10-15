const path = require('path');
const cp = require('child_process');
const fs = require('fs-extra');
const glob = require('glob');
const { components } = require('../config');
components.push('demo-helper');
const { logger, getComponentName } = require('../utils');
const separate = require('./separate-scss');
const handleCore = require('./handle-core-scss');

const cwd = process.cwd();
const tmpDir = path.join(cwd, '.tmp');

['docs', 'src', 'test'].forEach(dirName => {
  const dirPath = path.join(cwd, dirName);
  fs.readdirSync(dirPath).forEach(name => {
    const subDirPath = path.join(dirPath, name);
    if (fs.statSync(subDirPath).isDirectory()) {
      fs.removeSync(subDirPath);
    }
  });
});

const familyMap = {
  'General': ['Button', 'MenuButton', 'SplitButton', 'Grid', 'Paragraph', 'Icon'],
  'Navigation': ['Nav', 'Breadcrumb', 'Step', 'Tab', 'Pagination'],
  'DataEntry': ['Form', 'Field', 'Input', 'Checkbox', 'Radio', 'Select', 'TreeSelect', 'CascaderSelect', 'DatePicker', 'TimePicker', 'NumberPicker', 'Switch', 'Range', 'Rating', 'Transfer', 'Upload', 'Search'],
  'DataDisplay': ['Tag', 'Menu', 'Table', 'Collapse', 'Card', 'Badge', 'Slider', 'Calendar', 'Progress', 'Timeline', 'Tree', 'Cascader'],
  'Feedback': ['Message', 'Dialog', 'Balloon', 'Loading'],
  'Util': ['ConfigProvider', 'Overlay', 'Dropdown', 'Animate', 'Affix'],
};

const familyMapDemo = {};
const familyMapTheme = {};
Object.keys(familyMap).forEach(item => {
  familyMap[item].forEach(com => {
    const match = item.match(/([A-Z]+[a-z]+)+?/g);
    familyMapDemo[com] = item;
    familyMapTheme[com] = ((Array.isArray(match) && match.join('-')) || item).toLowerCase();
  });
});

components.forEach(component => {
  logger.warn(`开始同步 ${component} 组件...`);
  try {
    fs.removeSync(tmpDir);
    fs.ensureDirSync(tmpDir);
    cp.execSync(`cd ${tmpDir};git clone git@gitlab.alibaba-inc.com:next/${component}.git`);

    ['docs', 'src', 'test', 'theme'].forEach(dirName => {
      const srcDir = path.join(tmpDir, component, dirName);
      if (fs.existsSync(srcDir)) {
        if (component === 'demo-helper' && dirName !== 'src') {
          return;
        }

        let targetDir;

        if (dirName === 'docs') {
          if (['util', 'validate', 'mixin-ui-state'].indexOf(component) > -1) {
            return;
          }
          targetDir = path.join(cwd, 'docs', component, 'demo');
        } else if (dirName === 'theme') {
          targetDir = path.join(cwd, 'docs', component, 'theme');
        } else {
          targetDir = path.join(cwd, dirName, component);
        }

        fs.ensureDirSync(srcDir);
        fs.copySync(srcDir, targetDir);
      }
    });

    const mdPaths = glob.sync(path.join(cwd, 'docs', component, '**/*.md'));
    mdPaths.forEach(mdPath => {
      let mdContent = fs.readFileSync(mdPath, 'utf8');
      mdContent = mdContent.replace(/`{3,4}jsx?((.|\n)+?)`{3,4}/, (all, code) => {
        const importStatements = code.match(/import.+from '@alife\/next-[^/]+?'/g);
        const components = importStatements.map(importStatement => {
          return getComponentName(importStatement.match(/'@alife\/next-([^/]+)'/)[1]);
        });
        const withoutImportCode = code.replace(/\n(import.+'@alife\/next)-([^/\n]+)(\/lib)?(.*';)/g, (all, s1, s2, s3, s4) => {
          if (s2 === 'locale') {
            return `\n${s1}/lib/locale${s4}`;
          }

          return '';
        });
        return `\`\`\`\`jsx\nimport { ${components.join(', ')} } from '@alifd/next';${withoutImportCode}\`\`\`\``;
      });
      fs.writeFileSync(mdPath, replacePackageScope(mdContent));
    });

    const readmePath = path.join(tmpDir, component, 'README.md');
    const readmeENPath = path.join(tmpDir, component, 'README.EN-US.md');

    if (fs.existsSync(path.join(cwd, 'docs', component))) {
      if (fs.existsSync(readmePath)) {
        const readmeContent = replacePackageScope(checkMeta(fs.readFileSync(readmePath, 'utf8'), component));
        fs.writeFileSync(path.join(cwd, 'docs',  component, 'index.md'), readmeContent);
      }
      if (fs.existsSync(readmeENPath)) {
        const readmeENContent = replacePackageScope(checkMeta(fs.readFileSync(readmeENPath, 'utf8'), component));
        fs.writeFileSync(path.join(cwd, 'docs',  component, 'index.en-us.md'), readmeENContent);
      }
    }

    const jsPaths = glob.sync(path.join(cwd, '@(src|test|docs)', component, '**/*.@(js|jsx|scss)'));
    jsPaths.forEach(jsPath => {
      let jsContent = fs.readFileSync(jsPath, 'utf8');
      const isTest = jsPath.indexOf(`test/${component}`) > -1 ;
      const isTheme = jsPath.indexOf(`docs/${component}`) > -1;

      if (isTest || isTheme) {
        jsContent = jsContent.replace(/(import.+')(..\/src)(.*?')/g, (all, s1, s2, s3) => {
          if (s3 === '/index.scss\'') {
            s3 = '/style.js\'';
          }
          if (isTheme) {
            s2 = `../${s2}`;
          }
          return `${s1}../${s2}/${component}${s3}`;
        });
      }

      jsContent = jsContent.replace(/(import.+['"])~?@alife\/next-([^/\n]+)(\/lib)?(.*['"])/g, (all, s1, s2, s3, s4) => {
        const relativePath = path.relative(path.dirname(jsPath), path.join(cwd, 'src'));

        if (isTest || isTheme) {
          if (s3 === '/lib' && s4 === '/index.scss\'') {
            s4 = '/style.js\'';
          } else if (s2 === 'demo-helper' && s4 === '/index.scss\'') {
            s4 = '/style.js\'';
          }
        }

        return `${s1}${relativePath}/${s2}${s4}`;
      });

      if (/\.js/.test(path.extname(jsPath))) {
        const lines = jsContent.split(/\n/g);
        const moduleImports = [];
        const relativeImports = [];
        const notImports = [];
        lines.forEach(line => {
          if (/^import[^']+'[^.]/.test(line)) {
            moduleImports.push(line);
          } else if (/^import[^']+'\./.test(line)) {
            relativeImports.push(line);
          } else {
            notImports.push(line);
          }
        });

        const firstNoEmptyIndex = notImports.findIndex(line => !!line.trim());
        notImports.splice(0, firstNoEmptyIndex);

        let importsStr = [...moduleImports, ...relativeImports].join('\n');
        if (importsStr) {
          importsStr = importsStr + '\n\n';
        }

        jsContent = importsStr + notImports.join('\n');
      }

      fs.writeFileSync(jsPath, jsContent);
    });

    const indexScssPath = path.join(cwd, 'src', component, 'index.scss');
    if (component !== 'core') {
      separate(indexScssPath);
    } else {
      // 旧逻辑 lib/core/index.scss 引用 lib/_components/@alife/next-core/lib/index-noreset.scss
      const coreDirPath = path.join(cwd, 'src', 'core');
      const indexScssPath = path.join(coreDirPath, 'index.scss');
      const indexScssContent = fs.readFileSync(indexScssPath, 'utf8');
      const resetScssPath = path.join(coreDirPath, 'reset.scss');

      // 新增 reset.scss，写入 index.scss 内容
      fs.writeFileSync(resetScssPath, indexScssContent);
      // 为保持兼容，index.scss 继续引入 index-noreset.scss
      fs.writeFileSync(indexScssPath, '@import "../index-noreset.scss";\n');

      handleCore();


      const scssPaths = glob.sync(path.join(cwd, 'src', 'core', 'utility' ,'*.scss'));
      scssPaths.forEach((scssPath) => {
        let scssContent = fs.readFileSync(scssPath, 'utf8');

        scssContent = scssContent.replace(/\$line-0/g, '$line-zero');
        scssContent = scssContent.replace(/\$s-0/g, '$s-zero');
        scssContent = scssContent.replace(/\$corner-right-angle/g, '$corner-zero');
        scssContent = scssContent.replace(/\$shadow-0/g, '$shadow-zero');

        fs.writeFileSync(scssPath, scssContent);
      });


      const testPaths = glob.sync(path.join(cwd, 'test', component, '*.js'));
      testPaths.forEach((testPath) => {
        let testContent = fs.readFileSync(testPath, 'utf8');

        testContent = testContent.replace('./src/util/mixin', '../src/util/_mixin.scss');
        testContent = testContent.replace('./src/util/function', '../src/util/_function.scss');

        testContent = testContent.replace(/(.*)(\.\.\/src\/util\/)(.*)/g, (all, s1, s2, s3) => {
          return `${s1}../../src/${component}/util/${s3}`;
        });

        fs.writeFileSync(testPath, testContent);
      });
    }


    const variableScssPath = path.join(cwd, 'src', component, 'scss/variable.scss');
    if (!fs.existsSync(variableScssPath)) {
      return false;
    }
    let variableScssContent = fs.readFileSync(variableScssPath, 'utf8');

    variableScssContent = variableScssContent.replace(/(.*\/\/\/ @family )(.*?)(\n.*)/g, (all, s1, s2, s3) => {
      const content = familyMapTheme[getComponentName(component)];
      return `${s1}${content}${s3}`;
    });

    fs.writeFileSync(variableScssPath, variableScssContent);


    const componentsScssPaths = glob.sync(path.join(cwd, 'src', component,'**/*.scss'));
    componentsScssPaths.forEach((scssPath) => {
      let scssContent = fs.readFileSync(scssPath, 'utf8');

      scssContent = scssContent.replace(/\$line-0/g, '$line-zero');
      scssContent = scssContent.replace(/\$s-0/g, '$s-zero');
      scssContent = scssContent.replace(/\$corner-right-angle/g, '$corner-zero');
      scssContent = scssContent.replace(/\$shadow-0/g, '$shadow-zero');

      fs.writeFileSync(scssPath, scssContent);
    });

    logger.success(`同步 ${component} 组件成功！`);

  } finally {
    fs.remove(tmpDir);
  }
});

function checkMeta(md, component) {
  if (component === 'core') {
    return md;
  }
  const lines = md.split(/\n/g);
  const startIndex = lines.findIndex(line => /^-/.test(line));
  const endIndex = lines.findIndex(line => /^-{3,}/.test(line));
  const meta = lines.slice(startIndex, endIndex);
  const category = meta.shift();

  const beautifyName = getComponentName(component);
  meta.unshift(category, `-   family: ${familyMapDemo[beautifyName]}`);
  return `# ${beautifyName}\n\n${meta.join('\n')}\n---\n${lines.slice(endIndex + 1).join('\n')}`;
}

function replacePackageScope(content) {
  return content.replace(/@alife/g, '@alifd');
}

