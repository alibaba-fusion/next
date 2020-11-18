const highlight = require('highlight.js');
const _ = require('lodash');
const mdIt = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    highlight: function(code, lang) {
        const result =
            lang && highlight.getLanguage(lang) ? highlight.highlight(lang, code) : highlight.highlightAuto(code);
        return `<div class="hljs">${result.value}</div>`;
    },
}).use(require('markdown-it-anchor'), {
    level: 1,
    slugify: id => _.startCase(id),
    permalink: true,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '#',
    permalinkBefore: true,
});

module.exports = function(md) {
    return mdIt.render(md);
};
