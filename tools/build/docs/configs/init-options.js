/* eslint-disable */
const _ = require('lodash');
const path = require('path');
const config = require('./config');
const fs = require('fs');
const { SRC_DIR_PATH, CWD, parseImportDeclarations, findFile } = require('../../../utils');

const cwd = CWD;
const source = SRC_DIR_PATH;

const PATTERN_NEXT = /([^/]+)(.*)$/;
const NEXT_CORE = 'core';
const NEXT_LOCALE = 'locale';
const EXCLUDE_DEPS = ['config-provider', NEXT_LOCALE]

function getStyleJs(name) {
    const stylePath = findFile(path.resolve(source, name, 'style'));
    if (!stylePath) {
        return null;
    }
    return fs.statSync(stylePath).isFile(stylePath) ? stylePath : null;
}

function getThemeEntry(main, name) {
    const baseDir = path.join(SRC_DIR_PATH, name, '__docs__');
    const absMain = findFile(path.join(base, main));
    if (absMain) {
        return path.relative(baseDir, absMain);
    }
    throw new Error(`Not found entry: ${name}/${main}`);
}

const options = {
    modules: [
        {
            match: NEXT_CORE,
            main: [
                'lib/index-noreset.scss',
                'lib/index.scss',
                'lib/form-element.scss',
                'lib/mask.scss',
                'lib/popup.scss',
            ],
            theme: {
                main: ['theme/form-element', 'theme/mask', 'theme/popup'],
                entryName: pathname => {
                    const themeName = path.basename(pathname, path.extname(pathname));
                    return `demos/${themeName}`;
                },
                deps: (pathname, entry) => {
                    const stylePath = getStyleJs(entry.name);
                    const depSet = new Set();
                    if (stylePath && fs.existsSync(stylePath)) {
                        const styleConetent = fs.readFileSync(stylePath, 'utf8');
                        const styleImports = parseImportDeclarations(styleConetent);
                        styleImports.forEach(({ source }) => {
                            if (/^\./.test(source)) {
                                const absSource = path.join(path.dirname(stylePath), source);
                                const relativeSrc = path.relative(SRC_DIR_PATH, absSource);
                                const componentDir = relativeSrc.match(/^([^/]+)\//)?.[1];
                                if (componentDir) {
                                    depSet.add(componentDir);
                                }
                            }
                        });
                    }

                    const themeConetent = fs.readFileSync(pathname, 'utf8');
                    const themeImports = parseImportDeclarations(themeConetent);
                    themeImports.forEach(({ source }) => {
                        if (/^\./.test(source)) {
                            const absSource = path.join(path.dirname(pathname), source);
                            const relativeSrc = path.relative(SRC_DIR_PATH, absSource);
                            const componentDir = relativeSrc.match(/^([^/]+)\//)?.[1];
                            if (componentDir) {
                                depSet.add(componentDir);
                            }
                        }
                    });

                    return Array.from(depSet).filter(name => {
                        return ![...EXCLUDE_DEPS, entry.name].includes(name);
                    });
                },
            },
        },
        {
            match: NEXT_LOCALE,
            main: [
                'lib/en-us.js',
                'lib/ja-jp.js',
                'lib/zh-cn.js',
                'lib/zh-hk.js',
                'lib/zh-tw.js',
                'lib/vi-vn.js',
                'lib/it-it.js',
                'lib/pt-pt.js',
                'lib/ko-kr.js',
                'lib/ms-my.js',
                'lib/th-th.js',
                'lib/id-id.js',
            ],
        },
        {
            match: PATTERN_NEXT,
            main: ['lib/index.js', 'lib/index.jsx', 'lib/index.scss', 'lib/api-schema.json'],
            theme: {
                main: 'theme/index',
                entryName: (pathname, entry) => {
                    return `demos/${entry.name.replace(PATTERN_NEXT, '$1')}`;
                },
                deps: (pathname, entry) => {
                    const stylePath = getStyleJs(entry.name);
                    const styleConetent = fs.readFileSync(stylePath, 'utf8');
                    const depSet = new Set();
                    const styleImports = parseImportDeclarations(styleConetent);
                    styleImports.forEach(({ source }) => {
                        if (/^\./.test(source)) {
                            const absSource = path.join(path.dirname(stylePath), source);
                            const relativeSrc = path.relative(SRC_DIR_PATH, absSource);
                            const componentDir = relativeSrc.match(/^([^/]+)\//)?.[1];
                            if (componentDir) {
                                depSet.add(componentDir);
                            }
                        }
                    });

                    const themeConetent = fs.readFileSync(pathname, 'utf8');
                    const themeImports = parseImportDeclarations(themeConetent);
                    themeImports.forEach(({ source }) => {
                        if (/^\./.test(source)) {
                            const absSource = path.join(path.dirname(pathname), source);
                            const relativeSrc = path.relative(SRC_DIR_PATH, absSource);
                            const componentDir = relativeSrc.match(/^([^/]+)\//)?.[1];
                            if (componentDir) {
                                depSet.add(componentDir);
                            }
                        }
                    });
                    return Array.from(depSet).filter(name => {
                        return ![...EXCLUDE_DEPS, entry.name].includes(name);
                    });
                },
            },
        },
    ],
};

module.exports = function () {
    options.start = new Date();
    options.entries = getEntries(source, options.modules);
    return options;
};

function getEntries(source, modules) {
    const moduleNames = config.components.sort();

    return moduleNames
        .map(name => {
            const entry = {};
            modules.some(module => {
                if (normalize(module.match)(name)) {
                    const context = path.join(source, name);

                    _.assign(entry, module, {
                        name,
                        context,
                    });

                    return true;
                }

                return false;
            });

            return entry;
        })
        .filter(entry => Object.keys(entry).length > 0);
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
