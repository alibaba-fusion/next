/**
 * 输入一个 scss 文件，分析它包含的所有$variable 声明，得到 variable 的名称
 *
 * 用途：输入 /src/card/scss/variable.scss，得到 Card 组件的所有样式变量
 */

import postcss = require('postcss');
import fs = require('fs-extra');
import scssSyntax = require('postcss-scss');
import sass = require('sass');

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

async function resolveSassValue(entryScss: string, varNames: string[]) {
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
    const result = await new Promise<sass.LegacyResult>((res, rej) => {
        sass.render(
            {
                file: entryScss,
                data,
            },
            (err, result) => {
                if (err) rej(err);
                res(result!);
            }
        );
    });
    const output = result.css.toString();
    const tree = postcss.parse(output);
    const resolvedVars = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tree.walkRules(/\.theScssCompileResultIwant/, (decl: any) => {
        if (decl.nodes[0].prop !== 'color') throw new Error(`assert fail`);
        const varName = decl.selector.match(/\.theScssCompileResultIwant \.(.*)$/)[1];
        // @ts-expect-error assign
        resolvedVars[varName] = decl.nodes[0].value;
    });
    return resolvedVars;
}

async function collectVarsInfo(varScssFile: string, mainScssFile: string) {
    const content = await fs.readFile(varScssFile, 'utf-8');
    const tree = await scssSyntax.parse(content);
    const varsInfo: Record<string, { value: string; resolvedValue?: string }> = {};
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
        varsInfo[name].resolvedValue = resolvedValue as string;
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

export { collectVarsInfo };
