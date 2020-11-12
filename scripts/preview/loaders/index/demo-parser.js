const path = require('path');
const { transform } = require('@babel/core');
const fs = require('fs');
const _ = require('lodash');
const loaderUtils = require('loader-utils');
const { parseMD } = require('../../../utils');
const { marked, logger } = require('../../../utils');

const selectorPath = require.resolve('./selector');
const cwd = process.cwd();

const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
const IMPORT_LIB_REG = /import (.+) from ['"]@alifd\/next\/lib\/(.+)['"];?/;
const IMPORT_LIB_REG_G = /^import .+ from ['"]@alifd\/next\/lib\/(.+)['"];?/gm;

// TODO meta uncomplete
// TODO watch change
function getDemos(demoPaths, lang, dir, context, resourcePath) {
    const demoResults = {};
    const demoListOrdered = [];
    const demoMetas = demoPaths.reduce((ret, demoPath) => {
        const content = fs.readFileSync(demoPath, 'utf8');
        const result = parseMD(content, demoPath, lang, dir);
        demoResults[demoPath] = result;
        ret[demoPath] = result.meta;
        return ret;
    }, {});
    const demoOrders = demoPaths.reduce((ret, demoPath) => {
        const meta = demoMetas[demoPath];
        let order = 9999;
        if (meta) {
            const number = parseInt(meta.order, 10);
            if (!isNaN(number)) {
                order = number;
            }
        }
        ret[demoPath] = order;
        return ret;
    }, {});
    const orderedDemoPaths = demoPaths.sort((prev, next) => demoOrders[prev] - demoOrders[next]);
    const demoInsertScript = orderedDemoPaths.reduce((ret, demoPath, index, array) => {
        const result = demoResults[demoPath];
        demoListOrdered.push(result.meta);
        ret = `
        ${ret}
        ${result.css ? getCSSRequireString(path.resolve(demoPath), context) : ''}
        ${processDemoJS(
            result.js,
            result.meta.debug === 'true',
            result.meta.desc,
            result.css,
            result.meta.title,
            result.body,
            demoPath,
            dir,
            resourcePath
        )}`;
        return ret;
    }, '');

    return [demoInsertScript, demoListOrdered];
}

// TODO add react-axe
// TODO scope 透出
// eslint-disable-next-line max-params
function processDemoJS(js, debug, desc, css, title, body, demoPath, dir, resourcePath) {
    if (!js) {
        return '';
    }

    const ext = path.extname(demoPath);
    const name = _.camelCase(path.basename(demoPath, ext));

    const _importJs = js
        .split('\n')
        .filter(line => /import/.test(line))
        .join('\n')
        .replace(/`/g, '{backquote}')
        .replace(/\$/g, '{dollar}');
    const rawImportJs = _importJs
        ? `\`\`\`jsx
${_importJs}
\`\`\``
        : '';

    const rawCss = css
        ? `\`\`\`css
${css.replace(/`/g, '{backquote}').replace(/\$/g, '{dollar}')}
\`\`\``
        : '';

    js = fixImport(js, resourcePath, dir);
    const importJs = js
        .split('\n')
        .filter(line => /import/.test(line))
        .join('\n');
    const noImportJs = js
        .split('\n')
        .filter(line => !/import/.test(line))
        .join('\n');

    const liveArr = getLiveScript(js, name);
    const liveVars = liveArr[1];
    const liveScript = transform(liveArr[0], {
        plugins: [
            require('@babel/plugin-syntax-jsx'),
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],
        ],
    })
        .code.replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');

    // eslint-disable-next-line
    body = marked(body)
        .replace(/`/g, '{backquote}')
        .replace(/\$/g, '{dollar}');

    const hotReloadCode = `

// HOT RELOAD CODE
window.demoNames.push('${name}');
${getElementCreator(name, debug, title, desc, body)}

document.getElementById('demo-area').insertBefore(${name}Container, document.getElementById('md-area-latter'));
document.getElementById('${name}-container').appendChild(${name}Body);
document.getElementById('${name}-container').insertBefore(${name}Op, document.getElementById('${name}-body'));
document.getElementById('${name}-container').insertBefore(${name}Desc, document.getElementById('${name}-operations'));
document.getElementById('${name}-container').insertBefore(${name}Mount, document.getElementById('${title}'));
document.getElementById('demo-area').insertBefore(${name}LiveTest, document.getElementById('md-area-latter'));

${importJs}

window.${name}RenderScript = function ${name}RenderScript(liveDemo){
    var mountNode = document.getElementById('${name}-mount');
    if(liveDemo==="false"){
        ${name}Body.innerHTML = \`${body}\`.replace(/{backquote}/g, '\`').replace(/{dollar}/g, '$');
        ${noImportJs}
        return;
    }

    const ${name}LiveScript = \`${liveScript}\`;
    ReactDOM.render(
        <LiveProvider 
            code={${name}LiveScript} 
            scope={{${liveVars}, mountNode}} 
            noInline={true}>
            <div id="${name}-live-editor" className="next-demo-body">
                <div id="${name}-live-import" ></div>
                <LiveEditor id="${name}-live-body" className="react-live-body"/>
                <div id="${name}-live-css"></div>
                <LiveError id="${name}-live-error" className="react-live-error"/>
            </div>
            <LivePreview />
        </LiveProvider>, 
        document.getElementById('${name}-body'), 
        ()=>{
            document.getElementById('${name}-live-import').innerHTML = \`${marked(rawImportJs)
        .replace(/{backquote}/g, '`')
        .replace(/{dollar}/g, '$')}\`
            document.getElementById('${name}-live-css').innerHTML = \`${marked(rawCss)}\`;
        });
}

window.renderFuncs.push(${name}RenderScript)

`;

    return hotReloadCode;
    // return '';
}

function getCSSRequireString(resourcePath, context) {
    const requestString = loaderUtils.stringifyRequest(
        context,
        `!!style-loader!css-loader!${selectorPath}!${resourcePath}`
    );
    return `require(${requestString})

`;
}

function fixImport(code, resourcePath) {
    const matched = code.match(IMPORT_REG);
    const matchedLib = code.match(IMPORT_LIB_REG_G);

    if (matched) {
        const components = matched[1].replace(/\s/g, '').split(',');

        const importStrings = components
            .map(component => {
                const componentPath = path.join(cwd, 'src', _.kebabCase(component));
                const relativePath = path.relative(path.dirname(resourcePath), componentPath);

                return `
import ${component} from '${relativePath}';
import '${path.join(relativePath, 'style.js')}';
`;
            })
            .join('\n');

        code = code.replace(IMPORT_REG, importStrings);
    }

    if (matchedLib) {
        matchedLib.forEach(element => {
            const component = element.match(IMPORT_LIB_REG)[1].replace(/\s/g, '');
            const afterLib = element.match(IMPORT_LIB_REG)[2].replace(/\s/g, '');
            const libPath = path.join(cwd, 'src', afterLib);
            const newLibPath = path.relative(path.dirname(resourcePath), libPath);
            const newLibStr = `
import ${component} from'${newLibPath}'`;

            code = code.replace(IMPORT_LIB_REG, newLibStr);
        });
    }

    return code;
}

function getOpHTML(name) {
    return `

<form class="code-box-code-action" action="//riddle.alibaba-inc.com/riddles/define" method="POST" target="_blank">
<input type="hidden" name="data" value="{}">
<span role="img" class="op-icon">
    <svg viewBox="0 0 14 14" fill="currentColor">
        <path d="M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z">
        </path>
    </svg>
</span>
</form>

<form class="code-box-code-action" action="https://codepen.io/pen/define" method="POST" target="_blank">
<input type="hidden" name="data" value="">
<span role="img" class="op-icon">
<svg viewBox="0 0 15 15" fill="currentColor">
<path
d="M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z">
</path>
</svg>
</span>
</form>

<span role="img" aria-label="snippets" tabindex="-1" class="anticon anticon-snippets code-box-code-copy code-box-code-action">
<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true">
<path
d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z">
</path>
</svg>
</span>

<span class="code-expand-icon code-box-code-action">
<img alt="expand code" id="${name}-icon-show" src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg" class="code-expand-icon-show">
<img id="${name}-icon-hide"  style="display:none" alt="expand code" src="https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"
class="code-expand-icon-hide">
</span>
`;
}

function getElementCreator(name, debug, title, desc, body) {
    return `
const ${name}Container = document.createElement('div');
${name}Container.id = '${name}-container';
${name}Container.className = 'next-demo-item scroll-count-item';
${name}Container.setAttribute('debug','${debug}');
${name}Container.setAttribute('data-scroll-id','${title}');
${name}Container.style.display = ${debug ? `'none'` : `''`};
${debug ? `${name}Container.style.border = '1px solid rgb(196, 29, 127, 0.45)'` : ''};

const ${name}Mount = document.createElement('div');
${name}Mount.id = '${name}-mount';
${name}Mount.className = 'next-demo-mount';

const ${name}Desc = document.createElement('div');
${name}Desc.id = '${title}';
${name}Desc.className = 'demo-item-desc';
${name}Desc.innerHTML = \`<span class="demo-item-desc-title"><a href='#${title}' ${
        debug ? 'style="color: #c41d7f"' : `''`
    }><span>${title}</span></a></span><div class="demo-item-desc-body">${desc}</div>\`;

const ${name}Op = document.createElement('div');
${name}Op.id = '${name}-operations';
${name}Op.className = 'demo-item-operations';
${name}Op.style.borderBottom = 'border-bottom: dashed #EEE 1px;'
${name}Op.innerHTML = \`${getOpHTML(name)}\`;

const ${name}Body = document.createElement('div');
${name}Body.id = '${name}-body';
${name}Body.className = 'next-demo-body';
${name}Body.style.display = 'none';


const ${name}LiveTest = document.createElement('div');
${name}LiveTest.id = '${name}-live-test';
    `;
}

function getLiveScript(code, name) {
    const vars = code
        .split('\n')
        /* eslint-disable array-callback-return */
        .map(line => {
            if (!/^(?!\/\/)/.test(line)) return;
            let variable = line.match(/(?<=import\s\{\s+).*(?=\s+\}\s+from)/);
            if (variable) return `${variable[0]},`;
            variable = line.match(/(?<=import\s).*(?=\s+from)/);
            if (variable) return `${variable[0]},`;
        })
        /* eslint-enable */
        .join('')
        .replace(/,$/, '');
    const func = code
        .split('\n')
        .filter(line => !/import/.test(line))
        .join('\n');

    return [func, vars];
}

module.exports.getDemos = getDemos;
