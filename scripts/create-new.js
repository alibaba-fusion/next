const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const inquirer = require('inquirer');
const { logger, getComponentName } = require('./utils');
const nunjucks = require('nunjucks');
const co = require('co');

const cwd = process.cwd();

co(function*() {
    const create = yield inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Input the component name (e.g. date-picker): ',
        },
        {
            name: 'chineseName',
            type: 'input',
            message: "Input the component's chinese name (e.g. 日期选择): ",
        },
        {
            name: 'family',
            type: 'list',
            message: "Input the component's chinese name (e.g. 日期选择): ",
            choices: [
                'data-entry',
                'general',
                'navigation',
                'data-display',
                'feedback',
                'util',
            ],
        },
    ]);
    const dashName = create.name;
    const name = getComponentName(dashName);

    // copy src/ docs/ types/
    glob(`scripts/create/**/**/*.*`, function(_err, files) {
        files.forEach(oldPath => {
            const pathArray = oldPath.replace('scripts/create/', '').split('/');
            pathArray.splice(1, 0, dashName);
            const newPath = pathArray.join('/');

            if (fs.existsSync(newPath)) {
                logger.error(newPath, 'already exist! Remove it by hand!');
                return false;
            }
            const content = nunjucks.render(oldPath, {
                dashName,
                name,
                family: create.family,
                familyNoDash: getComponentName(create.family),
                chineseName: create.chineseName,
            });

            fs.outputFileSync(newPath, content);
        });
    });

    // config.js
    const configJSPath = path.join(cwd, 'scripts', 'config.js');
    let configJSContent = fs.readFileSync(configJSPath, 'utf8');
    configJSContent = configJSContent.replace(`'${dashName}',\n`, '');
    configJSContent = configJSContent.replace(
        /components: \[/,
        `components: [
        '${dashName}',`
    );
    fs.writeFileSync(configJSPath, configJSContent);

    // src/index.js
    const srcIndexJSPath = path.join(cwd, 'src', 'index.js');
    let srcIndexJSContent = fs.readFileSync(srcIndexJSPath, 'utf8');
    srcIndexJSContent += `export { default as ${name} } from './${dashName}';\n`;
    fs.writeFileSync(srcIndexJSPath, srcIndexJSContent);

    // index-noreset.scss
    const noresetScssPath = path.join(cwd, 'index-noreset.scss');
    let noresetScssContent = fs.readFileSync(noresetScssPath, 'utf8');
    noresetScssContent += `@import "lib/${dashName}/index.scss";\n`;
    fs.writeFileSync(noresetScssPath, noresetScssContent);

    // types/index.d.ts
    const typesIndexJSPath = path.join(cwd, 'types', 'index.d.ts');
    let typesIndexJSContent = fs.readFileSync(typesIndexJSPath, 'utf8');
    typesIndexJSContent += `export { default as ${name} } from './${dashName}';\n`;
    fs.writeFileSync(typesIndexJSPath, typesIndexJSContent);

    // .fusion
    const fusionJSPath = path.join(cwd, '.fusion');
    let fusionJSContent = fs.readFileSync(fusionJSPath, 'utf8');
    fusionJSContent = fusionJSContent.replace(`'${dashName}',\n`, '');
    fusionJSContent = fusionJSContent.replace(
        /"variables": {/,
        `"variables": {
    "${dashName}": "lib/${dashName}/scss/variable.scss",`
    );
    fs.writeFileSync(fusionJSPath, fusionJSContent);

    logger.warn(
        "Don't forget to write types/index.d.ts and English docs by hand!!"
    );
});
