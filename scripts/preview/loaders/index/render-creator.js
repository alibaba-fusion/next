const { transform } = require('@babel/core');
const { marked, logger } = require('../../../utils');

function getGlobalControl() {
    const liveDemo = `
    <span id="live-demo" role="img" aria-label="edit" className="code-box-expand-trigger"
        style={{ padding: 1 }} >
        <Tooltip
            align="b"
            style={{ maxWidth: 320, marginTop: 24 }}
            trigger={
                <svg id="live-on" viewBox="64 64 896 896" focusable="false" className="" data-icon="edit"
                    width="1em" height="1em" fill="currentColor" aria-hidden="true"
                    style={{ boxSizing: 'border-box', border: '1.8 solid rgba(0, 0, 0, .45)', width: 18, height: 18 }}>
                    <path
                        d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z">
                    </path>
                </svg>}
        >
            <span>使用在线编辑模式</span>
        </Tooltip>
        <Tooltip
            align="b"
            style={{ maxWidth: 320, marginTop: 24 }}
            trigger={
                <svg id="live-off" viewBox="64 64 896 896" focusable="false" className="" data-icon="edit"
                    width="1em" height="1em" fill="currentColor" aria-hidden="true"
                    style={{ boxSizing: 'border-box', color: 'white', backgroundColor: 'rgba(0, 0, 0, .45)', display: 'none', width: 18, height: 18 }}>
                    <path
                        d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z">
                    </path>
                </svg>}
        >
            <span>使用预览模式</span>
        </Tooltip>
    </span>`;

    const expandAll = `
        <Tooltip
            align="b"
            style={{ maxWidth: 320 }}
            trigger={
                <span id="expand-all" role="img" aria-label="code" className="code-box-expand-trigger">
                    <svg id="all-not-expand" viewBox="64 64 896 896" focusable="false" className="" data-icon="code"
                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path
                            d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z">
                        </path>
                    </svg>
                    <svg id="all-expanded" viewBox="64 64 896 896" focusable="false" className="" data-icon="code"
                        width="1em" height="1em" fill="currentColor" aria-hidden="true" style={{ display: 'none' }}>
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z">
                        </path>
                    </svg>
                </span>}
        >
            <span>展开所有代码</span>
        </Tooltip>`;

    const debugDemo = `
        <Tooltip
            align="b"
            style={{ maxWidth: 320 }}
            trigger={
                <span id="debug-demo" role="img" aria-label="debug" className="code-box-expand-trigger">
                    <svg id="debug-hide" viewBox="64 64 896 896" focusable="false" className="" data-icon="bug"
                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path
                            d="M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z">
                        </path>
                        <path
                            d="M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z">
                        </path>
                    </svg>
                    <svg id="debug-show" viewBox="64 64 896 896" focusable="false" className="" data-icon="bug"
                        width="1em" height="1em" fill="currentColor" aria-hidden="true" style={{ display: 'none' }}>
                        <path
                            d="M304 280h416c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z">
                        </path>
                        <path
                            d="M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5 28.9 16.9 61 28.8 95.3 34.5 4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8 34.3-5.7 66.4-17.6 95.3-34.5a281.38 281.38 0 00123.2-149.5A120.4 120.4 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg>
                </span>}
        >
            <span>显示调试demo</span>
        </Tooltip>`;

    return `ReactDOM.render(<React.Fragment>${liveDemo}${expandAll}${debugDemo}</React.Fragment>, document.getElementById('global-control'));`;
}

function getDemoOp(name) {
    const riddle = `
            <Tooltip
                    align="b"
                    style={{ maxWidth: 320 }}
                    trigger={
                        <form className="code-box-code-action" action="//riddle.alibaba-inc.com/riddles/define" method="POST" target="_blank">
                            <input type="hidden" name="data" value="{}"/>
                            <span role="img" className="op-icon">
                                <svg viewBox="0 0 14 14" fill="currentColor">
                                    <path d="M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z">
                                    </path>
                                </svg>
                            </span>
                        </form>}
                >
                <span>在Riddle中打开</span>
            </Tooltip>`;

    const codepen = `
            <Tooltip
                    align="b"
                    style={{ maxWidth: 320 }}
                    trigger={
                        <form className="code-box-code-action" action="https://codepen.io/pen/define" method="POST" target="_blank">
                            <input type="hidden" name="data" value=""/>
                            <span role="img" className="op-icon">
                                <svg viewBox="0 0 15 15" fill="currentColor">
                                    <path d="M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z">
                                    </path>
                                </svg>
                            </span>
                        </form>}
                >
                <span>在CodePen中打开</span>
            </Tooltip>`;

    const copy = `
            <Tooltip
                    align="b"
                    style={{ maxWidth: 320 }}
                    trigger={
                        <span role="img" aria-label="snippets" tabIndex="-1" className="anticon anticon-snippets code-box-code-copy code-box-code-action">
                            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z">
                                </path>
                            </svg>
                        </span>}
                >
                <span>复制代码</span>
            </Tooltip> `;

    const expand = `
            <span className="code-expand-icon code-box-code-action">
                <Tooltip
                    align="b"
                    style={{ maxWidth: 320 }}
                    trigger={
                        <img alt="expand code" id="${name}-icon-show" src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg" className="code-expand-icon-show" />
                    }>
                    <span>展开代码</span>
                </Tooltip>
                <Tooltip
                    align="b"
                    style={{ maxWidth: 320 }}
                    trigger={
                        <img id="${name}-icon-hide"  style={{display:'none'}} alt="expand code" src="https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg" className="code-expand-icon-hide"/>
                    }>
                    <span>收起代码</span>
                </Tooltip>
            </span>`;

    return `ReactDOM.render(<React.Fragment>${riddle}${codepen}${copy}${expand}</React.Fragment>, document.getElementById('${name}-operations'));`;
}

function getLiveScript(code) {
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

function getDemoRenderScript(js, name, body, noImportJs, rawCss, rawImportJs) {
    const liveArr = getLiveScript(js);
    const liveVars = liveArr[1];
    const liveScript = transform(liveArr[0], {
        plugins: [
            require('@babel/plugin-syntax-jsx'),
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],
        ],
    })
        .code.replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');

    return `
window.${name}RenderScript = function ${name}RenderScript(liveDemo){
    var mountNode = document.getElementById('${name}-mount');
    if(liveDemo==="false"){
        document.getElementById('${name}-body').innerHTML = \`${body}\`.replace(/{backquote}/g, '\`').replace(/{dollar}/g, '$');
        ${noImportJs}
        return;
    }

    const ${name}LiveScript = \`${liveScript}\`;
    ReactDOM.render(
        <LiveProvider 
            code={${name}LiveScript} 
            scope={{${liveVars ? `${liveVars},` : ''}mountNode}} 
            noInline={true}>
            <div id="${name}-live-editor">
                <div id="${name}-live-import" ></div>
                <div id="${name}-live-body" className="react-live-body"><LiveEditor style={{fontSize: 14,lineHeight: 1.7}}/></div>
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

window.renderFuncs.push(${name}RenderScript);`;
}

module.exports.getGlobalControl = getGlobalControl;
module.exports.getDemoOp = getDemoOp;
module.exports.getDemoRenderScript = getDemoRenderScript;
