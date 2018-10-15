const _ = require('lodash');
const path = require('path');
const config = require('./config');
const fs = require('fs');
const cwd = process.cwd();
const source = path.join(cwd, 'src');

const PATTERN_NEXT = /([^\/]+)(.*)$/;
const PATTERN_IMPORT1 = /^import.*\/([\w-]*)\/style\.js';$/;
const PATTERN_IMPORT2 = /^import.*from.*\/src\/([\w-]*)';$/;
const NEXT_CORE = 'core';
const NEXT_LOCALE = 'locale';

module.exports = function () {
  options.start = new Date();
  options.entries = getEntries(source, options.modules);
  return options;
};

const options = {
  modules: [{
    match: NEXT_CORE,
    main: ['lib/index-noreset.scss', 'lib/index.scss', 'lib/form-element.scss', 'lib/mask.scss', 'lib/popup.scss'],
    theme: {
      main: ['theme/form-element.jsx', 'theme/mask.jsx', 'theme/popup.jsx'],
      entryName: pathname => {
        const themeName = path.basename(pathname, '.jsx');
        return `demos/${themeName}`;
      },
      deps: (pathname, entry) => {
        const stylePath = path.join(cwd, 'src', entry.name, 'style.js');

        let styleConetent = '';
        if (fs.existsSync(stylePath)) {
          styleConetent = fs.readFileSync(stylePath, 'utf8');
        }

        const themeConetent = fs.readFileSync(pathname, 'utf8');
        const importContent = themeConetent.match(/^import.*;$/mg);

        let arr = [];

        styleConetent.split('\n').concat(importContent).forEach(line =>  {
          const match1 = line.match(PATTERN_IMPORT1);
          const match2 = line.match(PATTERN_IMPORT2);

          match1 ? arr.push(match1[1]) : match2 ? arr.push(match2[1]) : '';
        });

        return arr.filter((current, index, arr) =>
          ['config-provider', entry.name].indexOf(current) === -1 && index === arr.indexOf(current)
        );
      },
    },
  }, {
    match: NEXT_LOCALE,
    main: ['lib/en-us.js', 'lib/ja-jp.js', 'lib/zh-cn.js', 'lib/zh-tw.js']
  }, {
    match: PATTERN_NEXT,
    main: ['lib/index.js', 'lib/index.jsx', 'lib/index.scss', 'lib/api-schema.json'],
    theme: {
      main: 'theme/index.jsx',
      entryName: (pathname, entry) => {
        return `demos/${entry.name.replace(PATTERN_NEXT, '$1')}`;
      },
      deps: (pathname, entry) => {
        const stylePath = path.join(cwd, 'src', entry.name, 'style.js');
        const styleConetent = fs.readFileSync(stylePath, 'utf8');
        const themeConetent = fs.readFileSync(pathname, 'utf8');
        const importContent = themeConetent.match(/^import.*;$/mg);

        let arr = [];

        styleConetent.split('\n').concat(importContent).forEach(line =>  {
          const match1 = line.match(PATTERN_IMPORT1);
          const match2 = line.match(PATTERN_IMPORT2);

          match1 ? arr.push(match1[1]) : match2 ? arr.push(match2[1]) : '';
        });

        return arr.filter((current, index, arr) =>
          ['config-provider', entry.name].indexOf(current) === -1 && index === arr.indexOf(current)
        );
      },
    }
  }]
};

function getEntries(source, modules) {
  const moduleNames = config.components.sort();

  return moduleNames.map(name => {

    const entry = {};
    modules.some(module => {

      if (normalize(module.match)(name)) {
        const context = path.join(source, name);

        _.assign(entry, module, {
          name,
          context
        });

        return true;
      }

      return false;
    });

    return entry;
  }).filter(entry => Object.keys(entry).length > 0);
}

function normalize(match) {
  if (_.isRegExp(match)) {
    return name => match.test(name);
  } else if (_.isFunction(match)) {
    return match;
  } else {
    return name => [].concat(match).some(value => value === name);
  }
}
