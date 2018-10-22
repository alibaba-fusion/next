const highlight = require('highlight.js');
const mdIt = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    highlight: function (code, lang) {
        const result = lang && highlight.getLanguage(lang) ?
            highlight.highlight(lang, code) :
            highlight.highlightAuto(code);
        return `<div class="hljs">${result.value}</div>`;
    }
});

module.exports = function(md) {
    return mdIt.render(md);
};
