import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import md5 from 'md5';

var COL = '{Col}';
var LABEL = '{Label}';
var TITLE = '{Title}';

var _ref = window.DEMO_VARIABLE || {},
    _ref$showType = _ref.showType,
    showType = _ref$showType === undefined ? 'none' : _ref$showType,
    _ref$demoItems = _ref.demoItems,
    demoItems = _ref$demoItems === undefined ? {} : _ref$demoItems;

var callback = [];
var COOL = {};
var FUN = {};
var demoCount = 0;

// TODO: { functions, statements, sizes }

function convertArrayToObject(demoFunction) {
    var objDemoFunction = {};
    if (Array.isArray(demoFunction)) {
        demoFunction.forEach(function (demo) {
            objDemoFunction[demo.name] = {
                label: demo.label,
                value: demo.value,
                enum: demo.enum.map(function (e) {
                    var label = e;
                    if (e === 'true') {
                        label = '是';
                    } else if (e === 'false') {
                        label = '否';
                    }

                    return {
                        label: label,
                        value: e
                    };
                })
            };
        });
        return objDemoFunction;
    }
    return demoFunction;
}

function convertObjectToArray(demoFunction) {
    var arrayDemo = [];
    Object.keys(demoFunction).forEach(function (name) {
        var demo = demoFunction[name];
        arrayDemo.push({
            name: name,
            label: demo.label,
            value: demo.value,
            enum: demo.enum.map(function (e) {
                return e.value;
            })
        });
    });
    return arrayDemo;
}

/**
 * XyzAbc -> xyz-abc
 * @param {String} str 驼峰字符串
 * @return {String} 输出规范化的字符串
 */
function deCamelize(str) {
    var matches = str.match(/([A-Z][a-z]{2,})/g);
    if (matches === null) {
        // return str.toLowerCase();
        return str;
    }
    return matches.toString().replace(',', '-').toLowerCase();
}

/**
 * 格式化词组 'AbcZex XyzYxx' -> 'abc-zex xyz-yxx'
 * @param {String} str 驼峰词组
 * @return {String} 输出格式化的词组
 */
function formatTitle(str) {
    if (!str || typeof str !== 'string') {
        return;
    }
    return str.split(' ').map(deCamelize).join(' ');
}

var Demo = (_temp = _class = function (_Component) {
    _inherits(Demo, _Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            demoIndex: props.demoIndex || '' + demoCount++,
            demoItems: props.demoItems || demoItems,
            showType: props.showType || showType,
            background: props.defaultBackground,
            initDate: new Date().getTime()
        };

        if (!props.demoIndex) {
            callback.push(_this.setVisible.bind(_this));
        }
        return _this;
    }

    Demo.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('defaultBackground' in nextProps) {
            this.setState({
                background: nextProps.defaultBackground
            });
        }
    };

    Demo.prototype.setVisible = function setVisible(data) {
        delete data.demoIndex;

        this.setState(data);
    };

    Demo.prototype.switchVisible = function switchVisible(demoIndex) {
        var demoItems = this.props.demoItems || this.state.demoItems;

        // TIP: 清理无效数据
        Object.keys(demoItems).forEach(function (key) {
            if (demoItems[key].existed) {
                delete demoItems[key].existed;
            } else {
                delete demoItems[key];
            }
        });

        if (!demoItems[demoIndex]) {
            return;
        }

        var _demoItems$demoIndex$ = demoItems[demoIndex].hidden,
            hidden = _demoItems$demoIndex$ === undefined ? false : _demoItems$demoIndex$;

        var childKeys = Object.keys(demoItems).filter(function (key) {
            return new RegExp('^' + demoIndex.replace(/\*/, '(\\*|\\d+)')).test(key);
        });

        // TIP: 更新当前控制器
        demoItems[demoIndex].hidden = !hidden;
        // TIP: 更新下级控制器
        childKeys.forEach(function (key) {
            if (key.indexOf('*') > -1) {
                demoItems[key].hidden = !hidden;
            }
        });
        // TIP: 更新 DEMO
        childKeys.forEach(function (key) {
            if (key.indexOf('*') < 0) {
                demoItems[key].hidden = (demoItems[key.replace(/\d+$/, '*')] || {}).hidden || (demoItems[key.replace(/\d+-(\d+)$/, '*-$1')] || {}).hidden || !hidden;
            }
        });
        // TIP: 同步上级控制器
        this.syncVisible(demoIndex, demoItems);

        sendMessage(window.compName, 'displayed', {
            demoIndex: demoIndex,
            demoItems: demoItems
        });
    };

    Demo.prototype.syncVisible = function syncVisible(demoIndex, demoItems) {
        var index = demoIndex.replace(/(-(\*|\d+)){2}$/, '-\\d+-\\d+');

        if (index !== demoIndex) {
            var itemKeys = Object.keys(demoItems).filter(function (key) {
                return new RegExp('^' + index).test(key) && key.indexOf('*') < 0;
            });
            var hidden = demoItems[itemKeys[0] || demoIndex].hidden;
            var sameValue = true;

            itemKeys.forEach(function (key) {
                if (!!demoItems[key].hidden !== hidden) {
                    sameValue = false;
                }
            });

            index = demoIndex.replace(/-(\*|\d+)-(\*|\d+)$/, '-*');

            demoItems[index].hidden = sameValue && hidden || false;

            this.syncVisible(index, demoItems);
        }
    };

    Demo.prototype.switchBackground = function switchBackground() {
        var background = this.state.background === 'light' ? 'dark' : 'light';

        this.setState({
            background: background
        });
    };

    Demo.prototype.onFunctionChange = function onFunctionChange(name, e) {
        e.stopPropagation();

        var value = e.currentTarget.value;
        var demoFunction = convertArrayToObject(this.props.demoFunction);

        var nextDemoFunction = {};
        Object.keys(demoFunction).forEach(function (funcName) {
            var func = demoFunction[funcName];

            if (funcName === name) {
                func.value = value;
            }

            nextDemoFunction[funcName] = func;
        });

        if (Array.isArray(this.props.demoFunction)) {
            nextDemoFunction = convertObjectToArray(nextDemoFunction);
        }

        this.props.onFunctionChange(nextDemoFunction);
        return false;
    };

    Demo.prototype.render = function render() {
        var _this2 = this;

        var isDemoShape = false;
        var hasDemoLevel = false;
        var children = void 0;

        var block = this.props.block ? 'block' : null;
        var index = this.props.demoIndex || this.state.demoIndex;
        var demoItems = this.props.demoItems || this.state.demoItems;
        var demoScope = this.props.demoScope || this;
        var demoTitle = this.props.demoTitle ? this.props.demoTitle + ' -> ' + (this.props.title || TITLE) : this.props.title || TITLE;
        var showType = this.props.showType || this.state.showType;
        var switchVisible = this.props.switchVisible || this.switchVisible;
        var _state = this.state,
            background = _state.background,
            initDate = _state.initDate;
        var _props = this.props,
            className = _props.className,
            switchBackground = _props.switchBackground,
            style = _props.style;

        var demoFunction = convertArrayToObject(this.props.demoFunction);

        if (this.props.children) {
            isDemoShape = this.props.parentDisplayName !== 'Demo';

            var first = void 0;
            if (Array.isArray(this.props.children)) {
                first = this.props.children[0];
            } else {
                first = this.props.children;
            }

            hasDemoLevel = first.type.displayName === 'Demo';
        }

        // 注入 demoFunction 到 window.COOL
        if (isDemoShape && this.props.title && demoFunction) {
            FUN[this.props.title] = {};
            Object.keys(demoFunction).forEach(function (funcName) {
                var func = demoFunction[funcName];
                func.name = funcName;
                FUN[_this2.props.title][funcName] = func;
            });
        }

        var demoShapeLevel = void 0;
        if (isDemoShape && !hasDemoLevel || !isDemoShape) {
            demoShapeLevel = demoTitle.split(' -> ').join('_');

            var body = React.Children.map(this.props.children, function (child, i) {
                return React.cloneElement(child, {
                    block: _this2.props.block,
                    demoIndex: index + '-' + i,
                    demoItems: demoItems,
                    demoScope: demoScope,
                    demoTitle: demoTitle,
                    demoShapeLevel: demoShapeLevel,
                    showType: showType,
                    switchVisible: switchVisible
                });
            });

            children = React.createElement(
                'table',
                { className: block },
                React.createElement(
                    'tbody',
                    null,
                    body
                )
            );
        } else {
            children = React.Children.map(this.props.children, function (child, i) {
                return React.cloneElement(child, {
                    parentDisplayName: 'Demo',
                    defaultBackground: background,
                    demoIndex: index + '-' + i,
                    demoItems: demoItems,
                    demoScope: demoScope,
                    demoTitle: demoTitle,
                    demoFunction: demoFunction,
                    showType: showType,
                    switchVisible: switchVisible
                });
            });
        }

        var functionSelect = [];
        if (isDemoShape && demoFunction) {
            Object.keys(demoFunction).forEach(function (funcName, i) {
                var func = demoFunction[funcName];
                var tmpRadio = [];
                var name = md5(funcName + '-' + initDate);

                func.enum.forEach(function (enumObj, j) {
                    var checked = enumObj.value.toString() === func.value;

                    tmpRadio.push(React.createElement(
                        'label',
                        { key: j },
                        React.createElement('input', { type: 'radio', name: name, 'data-func': funcName, value: enumObj.value.toString(), onChange: _this2.onFunctionChange.bind(_this2, funcName), defaultChecked: checked }),
                        enumObj.label.toString()
                    ));
                });

                functionSelect.push(React.createElement(
                    'li',
                    { key: i },
                    React.createElement(
                        'span',
                        { title: func.label },
                        func.label,
                        ':'
                    ),
                    tmpRadio
                ));
            });
        }

        var demoIndex = index + '-*';

        var _ref2 = demoItems[demoIndex] || {},
            _ref2$hidden = _ref2.hidden,
            hidden = _ref2$hidden === undefined ? false : _ref2$hidden;

        if (showType === 'hidden' || !hidden) {
            var _classNames;

            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            var wrapCls = classNames((_classNames = {
                'demo pc': true
            }, _classNames['demo-' + background] = background, _classNames[className] = className, _classNames));
            var switchCls = classNames({
                'demo-switch': true,
                'demo-switch-on': background === 'dark',
                'demo-switch-off': background === 'light'
            });

            var customProps = {};
            if (this.props.title) {
                // 注入 demo 的标题，用于按需选取
                customProps.title = formatTitle(this.props.title);
            }

            return React.createElement(
                'div',
                _extends({ className: wrapCls, style: style }, customProps),
                React.createElement(
                    'div',
                    { className: 'demo-header' },
                    React.createElement(
                        'span',
                        null,
                        this.props.title || TITLE
                    ),
                    showType === 'hidden' && React.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) }),
                    isDemoShape && switchBackground ? React.createElement(
                        'div',
                        { className: 'demo-switch-wrapper' },
                        React.createElement(
                            'span',
                            null,
                            '\u80CC\u666F\u989C\u8272'
                        ),
                        React.createElement(
                            'div',
                            { className: switchCls, onClick: this.switchBackground.bind(this) },
                            React.createElement('div', { className: 'demo-switch-trigger' }),
                            React.createElement(
                                'div',
                                { className: 'demo-switch-children' },
                                background === 'light' ? '深' : '浅'
                            )
                        )
                    ) : null
                ),
                isDemoShape && demoFunction ? React.createElement(
                    'ul',
                    { className: 'demo-select' },
                    functionSelect
                ) : null,
                React.createElement(
                    'div',
                    { className: 'demo-body' },
                    children
                )
            );
        } else {
            return null;
        }
    };

    return Demo;
}(Component), _class.displayName = 'Demo', _class.propTypes = {
    parentDisplayName: PropTypes.string,
    defaultBackground: PropTypes.oneOf(['dark', 'light']),
    title: PropTypes.string,
    block: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    demoIndex: PropTypes.string,
    demoItems: PropTypes.object,
    demoScope: PropTypes.object,
    demoTitle: PropTypes.string,
    showType: PropTypes.string,
    switchVisible: PropTypes.func,
    switchBackground: PropTypes.bool,
    demoFunction: PropTypes.object,
    onFunctionChange: PropTypes.func,
    style: PropTypes.object
}, _class.defaultProps = {
    defaultBackground: 'light',
    block: false,
    onFunctionChange: function onFunctionChange() {}
}, _temp);

/* eslint-disable react/no-multi-comp */

Demo.displayName = 'Demo';
var DemoGroup = (_temp2 = _class2 = function (_Component2) {
    _inherits(DemoGroup, _Component2);

    function DemoGroup() {
        _classCallCheck(this, DemoGroup);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    DemoGroup.prototype.render = function render() {
        var _this4 = this;

        var _props2 = this.props,
            index = _props2.demoIndex,
            _props2$demoItems = _props2.demoItems,
            demoItems = _props2$demoItems === undefined ? {} : _props2$demoItems,
            _props2$demoScope = _props2.demoScope,
            demoScope = _props2$demoScope === undefined ? this : _props2$demoScope,
            showType = _props2.showType,
            _props2$switchVisible = _props2.switchVisible,
            switchVisible = _props2$switchVisible === undefined ? function () {} : _props2$switchVisible;

        var demoIndex = index + '-*';
        var demoTitle = this.props.demoTitle + ' -> ' + (this.props.label || LABEL);
        var demoShapeLevel = this.props.demoShapeLevel;

        var _ref3 = demoItems[demoIndex] || {},
            _ref3$hidden = _ref3.hidden,
            hidden = _ref3$hidden === undefined ? false : _ref3$hidden;

        // 解析


        if (demoShapeLevel) {
            if (!COOL[demoShapeLevel]) {
                COOL[demoShapeLevel] = [];
            }

            if (this.props.label) {
                var ret = false;
                COOL[demoShapeLevel].forEach(function (item, index) {
                    if (item.name === 'statement') {
                        ret = true;
                        COOL[demoShapeLevel][index].enum.push(_this4.props.label);
                    }
                });
                if (!ret) {
                    COOL[demoShapeLevel].push({
                        name: 'statement',
                        enum: [this.props.label]
                    });
                }
            }
        }

        // 获得默认值
        var defaultCool = {};
        defaultCool.title = this.props.demoTitle;
        defaultCool.shape = demoShapeLevel;
        defaultCool.statement = this.props.label;
        COOL[demoShapeLevel].forEach(function (item) {
            if (item.value) {
                defaultCool[item.name] = item.value;
            }
        });

        var children = React.Children.map(this.props.children, function (child, i) {
            var _props3 = _this4.props,
                index = _props3.demoIndex,
                _props3$demoItems = _props3.demoItems,
                demoItems = _props3$demoItems === undefined ? {} : _props3$demoItems,
                showType = _props3.showType,
                block = _props3.block;

            var demoIndex = index + '-' + i;

            var _ref4 = demoItems[demoIndex] || {},
                _ref4$hidden = _ref4.hidden,
                hidden = _ref4$hidden === undefined ? false : _ref4$hidden;

            var classes = classNames({
                'demo-item': !hidden,
                'demo-item-hidden': hidden,
                block: block
            });

            COOL[demoShapeLevel].forEach(function (item) {
                if (item.name === 'size') {
                    defaultCool.size = item.enum[i];
                }
            });

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false
                    };
                }
                demoItems[demoIndex].existed = true;

                var cloneChild = React.cloneElement(child, {
                    'data-cool': JSON.stringify(defaultCool)
                });

                return React.createElement(
                    'td',
                    { className: 'wrap', style: { height: _this4.props.height || null } },
                    React.createElement(
                        'div',
                        { className: classes, key: i },
                        cloneChild
                    )
                );
            } else {
                return null;
            }
        });

        if (showType === 'hidden' || !hidden) {
            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            return React.createElement(
                'tr',
                { className: 'demo-group' },
                this.props.label === false ? null : React.createElement(
                    'td',
                    { className: 'label', style: { height: this.props.height || null } },
                    React.createElement(
                        'span',
                        null,
                        this.props.label || LABEL
                    ),
                    showType === 'hidden' && React.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) })
                ),
                children
            );
        } else {
            return null;
        }
    };

    return DemoGroup;
}(Component), _class2.displayName = 'DemoGroup', _class2.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    block: PropTypes.bool,
    height: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    demoIndex: PropTypes.string,
    demoItems: PropTypes.object,
    demoScope: PropTypes.object,
    demoTitle: PropTypes.string,
    demoShapeLevel: PropTypes.string,
    showType: PropTypes.string,
    switchVisible: PropTypes.func
}, _class2.defaultProps = {
    block: false,
    height: ''
}, _temp2);
DemoGroup.displayName = 'DemoGroup';
var DemoHead = (_temp3 = _class3 = function (_Component3) {
    _inherits(DemoHead, _Component3);

    function DemoHead() {
        _classCallCheck(this, DemoHead);

        return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
    }

    DemoHead.prototype.render = function render() {
        var _this6 = this;

        var cols = this.props.cols.map(function (col, i) {
            var _props4 = _this6.props,
                index = _props4.demoIndex,
                _props4$demoItems = _props4.demoItems,
                demoItems = _props4$demoItems === undefined ? {} : _props4$demoItems,
                _props4$demoScope = _props4.demoScope,
                demoScope = _props4$demoScope === undefined ? _this6 : _props4$demoScope,
                showType = _props4.showType,
                _props4$switchVisible = _props4.switchVisible,
                switchVisible = _props4$switchVisible === undefined ? function () {} : _props4$switchVisible;

            var demoIndex = index.replace(/-\d+$/, '-*') + '-' + i;
            var demoTitle = _this6.props.demoTitle + ' -> ' + (col || COL);
            var demoShapeLevel = _this6.props.demoShapeLevel;

            var _ref5 = demoItems[demoIndex] || {},
                _ref5$hidden = _ref5.hidden,
                hidden = _ref5$hidden === undefined ? false : _ref5$hidden;

            // 解析


            if (demoShapeLevel) {
                if (!COOL[demoShapeLevel]) {
                    COOL[demoShapeLevel] = [];
                }

                if (col) {
                    var ret = false;
                    COOL[demoShapeLevel].forEach(function (item, index) {
                        if (item.name === 'size') {
                            ret = true;
                            COOL[demoShapeLevel][index].enum.push(col);
                        }
                    });
                    if (!ret) {
                        COOL[demoShapeLevel].push({
                            name: 'size',
                            enum: [col]
                        });
                    }
                }
            }

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false,
                        title: demoTitle
                    };
                } else {
                    demoItems[demoIndex].title = demoTitle;
                }
                demoItems[demoIndex].existed = true;

                return React.createElement(
                    'td',
                    { key: i },
                    col || COL,
                    showType === 'hidden' && React.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) })
                );
            } else {
                return null;
            }
        });

        return React.createElement(
            'tr',
            { className: 'demo-head' },
            React.createElement('td', null),
            cols
        );
    };

    return DemoHead;
}(Component), _class3.displayName = 'DemoHead', _class3.propTypes = {
    cols: PropTypes.array,
    theme: PropTypes.object,
    demoIndex: PropTypes.string,
    demoItems: PropTypes.object,
    demoScope: PropTypes.object,
    demoTitle: PropTypes.string,
    demoShapeLevel: PropTypes.string,
    showType: PropTypes.string,
    switchVisible: PropTypes.func
}, _class3.defaultProps = {
    cols: []
}, _temp3);
DemoHead.displayName = 'DemoHead';
var DisplaySwitch = (_temp4 = _class4 = function (_Component4) {
    _inherits(DisplaySwitch, _Component4);

    function DisplaySwitch() {
        _classCallCheck(this, DisplaySwitch);

        return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
    }

    DisplaySwitch.prototype.render = function render() {
        var status = this.props.hidden ? 'hide' : 'browse';

        return React.createElement('i', { className: 'demo-icon demo-icon-' + status, onClick: this.props.onClick });
    };

    return DisplaySwitch;
}(Component), _class4.propTypes = {
    onClick: PropTypes.func,
    hidden: PropTypes.bool
}, _class4.defaultProps = {
    onClick: function onClick() {}
}, _temp4);
DisplaySwitch.displayName = 'DisplaySwitch';


if (window.addEventListener) {
    window.addEventListener('message', function (event) {
        var data = event.data;
        if (event.origin !== location.origin || !data || data.from !== 'config') {
            return;
        }

        if (data.type === 'displayed') {
            callback.forEach(function (callback) {
                callback(data.body);
            });
        }
    });
}

function sendMessage(compName, type, body) {
    var parent = window.parent;

    if (parent !== window) {
        parent.postMessage({
            from: 'demo',
            type: type,
            body: body,
            compName: compName
        }, '*');
    }
}

function initDemo(compName) {
    window.compName = compName;

    // 追加信息到页面
    var info = document.createElement('script', {
        id: 'fusion-cool'
    });
    info.innerHTML = 'window.COOL = {\'' + compName + '\': ' + JSON.stringify(COOL) + ', \'functions\': ' + JSON.stringify(FUN) + '}';
    document.body.appendChild(info);

    sendMessage(compName, 'loaded');
}

export { Demo, DemoHead, DemoGroup, initDemo };