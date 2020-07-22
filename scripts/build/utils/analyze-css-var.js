/**
 * 输入一个scss文件，分析它包含的所有$variable声明，得到variable的名称
 *
 * 用途：输入 /src/card/scss/variable.scss ，得到Card组件的所有样式变量
 */

const postcss = require('postcss');
const fs = require('fs-extra');
const scssSyntax = require('postcss-scss');
const sass = require('node-sass');

async function parseScssOneFile(inputPath) {
    const content = await fs.readFile(inputPath, 'utf-8');
    const result = await postcss().process(content, {
        from: inputPath,
        syntax: scssSyntax,
    });
    return result.root;
}

async function parseScssWithImports(entryPath) {
    const content = await fs.readFile(entryPath, 'utf-8');
    const result = await postcss(
        require('postcss-import')({
            resolve: (id, basedir) => {
                if (!id.endsWith('scss')) {
                    return `${id}.scss`;
                }
                return id;
            },
        })
    ).process(content, {
        from: entryPath,
        syntax: scssSyntax,
    });
    return result.root;
}

function analyzeVarNames(tree) {
    const vars = [];
    tree.walkDecls(decl => {
        if (decl.parent !== tree) return;
        if (!/^\$/.test(decl.prop)) return;
        const varName = decl.prop.replace(/^\$/, '');
        // "content" property of icon can't be css var
        if (varName.startsWith('icon-content')) return;
        vars.push(varName);
    });
    return vars;
}

async function resolveSassValue(entryScss, vars) {
    const content = await fs.readFile(entryScss, 'utf-8');

    const varCodeLines = vars.map(varName => {
        // only resolve unquoted value
        return `@include exportValue("${varName}", $${varName});`;
    });

    const data = `
@use "sass:string";
@use "sass:meta";
@mixin exportValue($name, $variable) {
    @if type-of($variable) != bool {
        --#{$name}: #{$variable};
    }
}
${content}
.theScssCompileResultIwant{${varCodeLines.join('\n')}}`;

    // await fs.writeFile('in.scss', data);
    const result = sass.renderSync({
        file: entryScss,
        data,
    });
    let output = result.css.toString();
    const matched = output.match(/\.theScssCompileResultIwant\s*{([\s\S]*)}/);
    output = matched[0];

    const tree = postcss.parse(output);
    const resolvedVars = {};
    tree.walkDecls(decl => {
        const varName = decl.prop.replace(/^--/, '');
        resolvedVars[varName] = decl.value;
    });
    // debugger;
    // await fs.writeFile('out.css', output);
    return resolvedVars;
}

(async function main() {
    // analyzeCssVar(await parseScssOneFile('/Users/csr/workspace/next/src/card/scss/variable.scss'));
    const vars = analyzeVarNames(await parseScssWithImports('/Users/csr/workspace/next/src/card/main.scss'));
    resolveSassValue('/Users/csr/workspace/next/src/card/main.scss', vars);
})();

// module.exports = analyzeCssVar;
