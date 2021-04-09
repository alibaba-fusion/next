const highlight = require('highlight.js');
const prism = require('markdown-it-prism');
const _ = require('lodash');
const mdIt = require('markdown-it')({
    html: true,
    xhtmlOut: true,
})
    .use(require('markdown-it-anchor'), {
        level: [1, 2, 3],
        slugify: id => _.startCase(id),
        permalink: true,
        permalinkClass: 'header-anchor scroll-count-item',
        permalinkAttrs: id => {
            return { 'data-scroll-id': _.startCase(id) };
        },
        permalinkSymbol: '#',
        permalinkBefore: false,
    })
    .use(prism, {});

module.exports = function(md) {
    return mdIt.render(md);
};
