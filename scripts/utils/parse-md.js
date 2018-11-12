const remarkAbstract = require('remark');

const remark = remarkAbstract();
const logger  = require('./logger');

const EN_DOC_REG = /:{3}lang=en-us((.|\r|\n)*):{3}/;

function html2Escape(sHtml) {
    return sHtml.replace(/[<>&"]/g, function(c) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
    });
}

module.exports = function(content, filePath, lang, dir) {
    const result = {
        meta: {},
        js: null,
        css: null,
        html: null
    };

    content = filterByLang(content, lang);

    const splitReg = /\n-{3,}\s*\n/;
    if (content.match(splitReg)) {
        const arr = content.split(splitReg, 2);
        const headerContent = arr[0];
        let bodyContent = arr[1];

        if (headerContent) {
            const headerAST = remark.parse(headerContent);
            if (headerAST && headerAST.children) {
                const header = headerAST.children;
                const titleNode = header.find(child => child.type === 'heading' && child.depth === 1);
                if (titleNode && titleNode.children && titleNode.children[0]) {
                    result.meta.title = titleNode.children[0].value;
                }

                const listNode = header.find(child => child.type === 'list');
                if (listNode && listNode.children) {
                    listNode.children.forEach(itemNode => {
                        if (itemNode.children &&
							itemNode.children[0] &&
							itemNode.children[0].children &&
							itemNode.children[0].children[0] &&
							itemNode.children[0].children[0].value) {
                            const str = itemNode.children[0].children[0].value;
                            const arr = str.split(':').map(part => part.trim());
                            result.meta[arr[0]] = arr[1];
                        }
                    });
                }

                const paragraphNode = header.find(child => child.type === 'paragraph');
                let desc = '';
                if (paragraphNode && paragraphNode.children) {
                    desc = paragraphNode.children.map(itemNode => {
                        if (itemNode.type === 'inlineCode') {
                            return `<code>${html2Escape(itemNode.value)}</code>`;
                        }
                        return itemNode.value;
                    }).join(' ');
                }
                result.meta.desc = desc;
            }
        }
        if (bodyContent) {
            let code = bodyContent;
            if (dir === 'rtl') {
                const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
                let components = code.match(IMPORT_REG)[1].replace(/\s/g, '').split(',');
                components.push('ConfigProvider');
                components = [...new Set(components)];

                code = code.replace(IMPORT_REG, `import { ${components.join(', ')} } from '@alifd/next';`);

                const RENDER_REG = /(.*)ReactDOM\.render\(([\s\S]*),[ \n]*mountNode[ \n]*\);?(.*)/g;
                code = code.replace(RENDER_REG, (all, s1, s2, s3) => {
                    return `${s1} ReactDOM.render(
<ConfigProvider rtl>
    ${s2}
</ConfigProvider>, mountNode);${s3}`;
                });

                bodyContent = code;
            }

            const bodyAST = remark.parse(bodyContent);
            if (bodyAST && bodyAST.children) {
                const body = bodyAST.children;
                const jsNode = body.find(child => child.type === 'code' && (child.lang === 'js' || child.lang === 'jsx'));
                if (jsNode) {
                    result.js = jsNode.value;
                }

                const cssNode = body.find(child => child.type === 'code' && child.lang === 'css');
                if (cssNode) {
                    result.css = cssNode.value;
                }

                const htmlNode = body.find(child => child.type === 'code' && child.lang === 'html');
                if (htmlNode) {
                    result.html = htmlNode.value;
                }
            }
        }
        result.body = bodyContent;
    } else {
        logger.warn(`Can not parse the demo md: ${filePath}`);
    }

    return result;
};

function filterByLang(content, lang) {
    if (lang === 'en') {
        const matched = content.match(EN_DOC_REG);
        if (matched) {
            const enDoc = matched[1];
            const parts = content.split(matched[0]);
            return enDoc + parts[1];
        }

        return content;
    }

    return content.replace(EN_DOC_REG, '');
}
