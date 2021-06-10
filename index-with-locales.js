var next = require('./index');

next.locales = {};
next.locales['en-us'] = require('./lib/locale/en-us.js');
next.locales['ja-ja'] = require('./lib/locale/ja-jp.js');
next.locales['ja-jp'] = require('./lib/locale/ja-jp.js');
next.locales['zh-cn'] = require('./lib/locale/zh-cn.js');
next.locales['zh-hk'] = require('./lib/locale/zh-hk.js');
next.locales['zh-tw'] = require('./lib/locale/zh-tw.js');
next.locales['vi-vn'] = require('./lib/locale/vi-vn.js');
next.locales['it-it'] = require('./lib/locale/it-it.js');
next.locales['pt-pt'] = require('./lib/locale/pt-pt.js');
next.locales['ko-kr'] = require('./lib/locale/ko-kr.js');
next.locales['ms-my'] = require('./lib/locale/ms-my.js');
next.locales['th-th'] = require('./lib/locale/th-th.js');
next.locales['id-id'] = require('./lib/locale/id-id.js');

module.exports = next;
