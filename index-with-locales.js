var next = require('./index');

next.locales = {};
next.locales['en-us'] = require('./lib/locale/en-us.js');
next.locales['ja-ja'] = require('./lib/locale/ja-jp.js');
next.locales['zh-cn'] = require('./lib/locale/zh-cn.js');
next.locales['zh-hk'] = require('./lib/locale/zh-hk.js');
next.locales['zh-tw'] = require('./lib/locale/zh-tw.js');

module.exports = next;
