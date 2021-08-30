/**
 * 输入一个scss文件，分析它包含的所有$variable声明，得到variable的名称
 *
 * 用途：输入 /src/card/scss/variable.scss ，得到Card组件的所有样式变量
 */

const postcss = require('postcss');
const fs = require('fs-extra');
const scssSyntax = require('postcss-scss');
const sass = require('node-sass');

// async function parseScssWithImports(entryPath) {
//     const content = await fs.readFile(entryPath, 'utf-8');
//     const result = await postcss(
//         require('postcss-import')({
//             resolve: id => {
//                 if (!id.endsWith('scss')) {
//                     return `${id}.scss`;
//                 }
//                 return id;
//             },
//         })
//     ).process(content, {
//         from: entryPath,
//         syntax: scssSyntax,
//     });
//     return result.root;
// }

async function resolveSassValue(entryScss, varNames) {
    const content = await fs.readFile(entryScss, 'utf-8');
    const varCodeLines = varNames.map(varName => {
        return `@include exportValue("${varName}", $${varName});`;
    });
    const data = `
@use "sass:string";
@use "sass:meta";
@use "sass:math" as *;

@mixin exportValue($name, $variable) {
    @if type-of($variable) != bool {
        .theScssCompileResultIwant .#{$name} { color:$variable; }
    }
}
${content}
${varCodeLines.join('\n')}`;

    // await fs.writeFile('in.scss', data);
    const result = await new Promise((res, rej) => {
        sass.render(
            {
                file: entryScss,
                data,
            },
            (err, result) => {
                if (err) rej(err);
                res(result);
            }
        );
    });
    const output = result.css.toString();
    const tree = postcss.parse(output);
    const resolvedVars = {};
    tree.walkRules(/\.theScssCompileResultIwant/, decl => {
        if (decl.nodes[0].prop !== 'color') throw new Error(`assert fail`);
        const varName = decl.selector.match(/\.theScssCompileResultIwant \.(.*)$/)[1];
        resolvedVars[varName] = decl.nodes[0].value;
    });
    return resolvedVars;
}

async function collectVarsInfo(varScssFile, mainScssFile) {
    const content = await fs.readFile(varScssFile, 'utf-8');
    const tree = await scssSyntax.parse(content);
    const varsInfo = {};
    tree.walkDecls(decl => {
        if (decl.parent !== tree) return;
        if (!/^\$/.test(decl.prop)) return;
        const name = decl.prop.replace(/^\$/, '');
        const value = decl.value;
        // 这里可以获取到变量声明前面的注释
        varsInfo[name] = { value };
    });
    const valueMap = await resolveSassValue(mainScssFile, Object.keys(varsInfo));
    Object.entries(valueMap).forEach(([name, resolvedValue]) => {
        if (!varsInfo[name]) throw new Error(`assert fail`);
        varsInfo[name].resolvedValue = resolvedValue;
    });
    return varsInfo;
}

// (async function main() {
//     const varsInfo = await collectVarsInfo(
//         '/Users/csr/workspace/next/src/card/scss/variable.scss',
//         '/Users/csr/workspace/next/src/card/main.scss'
//     );
//     debugger;
// })();

module.exports.collectVarsInfo = collectVarsInfo;
