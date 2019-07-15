'use strict';

exports.__esModule = true;
exports.initDemo = exports.DemoGroup = exports.DemoHead = exports.Demo = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _inherits3.default)(Demo, _Component);

    function Demo(props) {
        (0, _classCallCheck3.default)(this, Demo);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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

            var body = _react2.default.Children.map(this.props.children, function (child, i) {
                return _react2.default.cloneElement(child, {
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

            children = _react2.default.createElement(
                'table',
                { className: block },
                _react2.default.createElement(
                    'tbody',
                    null,
                    body
                )
            );
        } else {
            children = _react2.default.Children.map(this.props.children, function (child, i) {
                return _react2.default.cloneElement(child, {
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
                var name = (0, _md2.default)(funcName + '-' + initDate);

                func.enum.forEach(function (enumObj, j) {
                    var checked = enumObj.value.toString() === func.value;

                    tmpRadio.push(_react2.default.createElement(
                        'label',
                        { key: j },
                        _react2.default.createElement('input', {
                            type: 'radio',
                            name: name,
                            'data-func': funcName,
                            value: enumObj.value.toString(),
                            onChange: _this2.onFunctionChange.bind(_this2, funcName),
                            defaultChecked: checked
                        }),
                        enumObj.label.toString()
                    ));
                });

                functionSelect.push(_react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
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

            var wrapCls = (0, _classnames2.default)((_classNames = {
                'demo pc': true
            }, _classNames['demo-' + background] = background, _classNames[className] = className, _classNames));
            var switchCls = (0, _classnames2.default)({
                'demo-switch': true,
                'demo-switch-on': background === 'dark',
                'demo-switch-off': background === 'light'
            });

            var customProps = {};
            if (this.props.title) {
                // 注入 demo 的标题，用于按需选取
                customProps.title = formatTitle(this.props.title);
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: wrapCls, style: style }, customProps),
                _react2.default.createElement(
                    'div',
                    { className: 'demo-header' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.title || TITLE
                    ),
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, {
                        hidden: hidden,
                        onClick: switchVisible.bind(demoScope, demoIndex)
                    }),
                    isDemoShape && switchBackground ? _react2.default.createElement(
                        'div',
                        { className: 'demo-switch-wrapper' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u80CC\u666F\u989C\u8272'
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                className: switchCls,
                                onClick: this.switchBackground.bind(this)
                            },
                            _react2.default.createElement('div', { className: 'demo-switch-trigger' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'demo-switch-children' },
                                background === 'light' ? '深' : '浅'
                            )
                        )
                    ) : null
                ),
                isDemoShape && demoFunction ? _react2.default.createElement(
                    'ul',
                    { className: 'demo-select' },
                    functionSelect
                ) : null,
                _react2.default.createElement(
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
}(_react.Component), _class.displayName = 'Demo', _class.propTypes = {
    parentDisplayName: _propTypes2.default.string,
    defaultBackground: _propTypes2.default.oneOf(['dark', 'light']),
    title: _propTypes2.default.string,
    block: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func,
    switchBackground: _propTypes2.default.bool,
    demoFunction: _propTypes2.default.object,
    onFunctionChange: _propTypes2.default.func,
    style: _propTypes2.default.object
}, _class.defaultProps = {
    defaultBackground: 'light',
    block: false,
    onFunctionChange: function onFunctionChange() {}
}, _temp);

/* eslint-disable react/no-multi-comp */

Demo.displayName = 'Demo';
var DemoGroup = (_temp2 = _class2 = function (_Component2) {
    (0, _inherits3.default)(DemoGroup, _Component2);

    function DemoGroup() {
        (0, _classCallCheck3.default)(this, DemoGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Component2.apply(this, arguments));
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

        var children = _react2.default.Children.map(this.props.children, function (child, i) {
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

            var classes = (0, _classnames2.default)({
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

                var cloneChild = _react2.default.cloneElement(child, {
                    'data-cool': JSON.stringify(defaultCool)
                });

                return _react2.default.createElement(
                    'td',
                    {
                        className: 'wrap',
                        style: { height: _this4.props.height || null }
                    },
                    _react2.default.createElement(
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

            return _react2.default.createElement(
                'tr',
                { className: 'demo-group' },
                this.props.label === false ? null : _react2.default.createElement(
                    'td',
                    {
                        className: 'label',
                        style: { height: this.props.height || null }
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.label || LABEL
                    ),
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, {
                        hidden: hidden,
                        onClick: switchVisible.bind(demoScope, demoIndex)
                    })
                ),
                children
            );
        } else {
            return null;
        }
    };

    return DemoGroup;
}(_react.Component), _class2.displayName = 'DemoGroup', _class2.propTypes = {
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    block: _propTypes2.default.bool,
    height: _propTypes2.default.string,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    demoShapeLevel: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func
}, _class2.defaultProps = {
    block: false,
    height: ''
}, _temp2);
DemoGroup.displayName = 'DemoGroup';
var DemoHead = (_temp3 = _class3 = function (_Component3) {
    (0, _inherits3.default)(DemoHead, _Component3);

    function DemoHead() {
        (0, _classCallCheck3.default)(this, DemoHead);
        return (0, _possibleConstructorReturn3.default)(this, _Component3.apply(this, arguments));
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

                return _react2.default.createElement(
                    'td',
                    { key: i },
                    col || COL,
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, {
                        hidden: hidden,
                        onClick: switchVisible.bind(demoScope, demoIndex)
                    })
                );
            } else {
                return null;
            }
        });

        return _react2.default.createElement(
            'tr',
            { className: 'demo-head' },
            _react2.default.createElement('td', null),
            cols
        );
    };

    return DemoHead;
}(_react.Component), _class3.displayName = 'DemoHead', _class3.propTypes = {
    cols: _propTypes2.default.array,
    theme: _propTypes2.default.object,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    demoShapeLevel: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func
}, _class3.defaultProps = {
    cols: []
}, _temp3);
DemoHead.displayName = 'DemoHead';
var DisplaySwitch = (_temp4 = _class4 = function (_Component4) {
    (0, _inherits3.default)(DisplaySwitch, _Component4);

    function DisplaySwitch() {
        (0, _classCallCheck3.default)(this, DisplaySwitch);
        return (0, _possibleConstructorReturn3.default)(this, _Component4.apply(this, arguments));
    }

    DisplaySwitch.prototype.render = function render() {
        var status = this.props.hidden ? 'hide' : 'browse';

        return _react2.default.createElement('i', {
            className: 'demo-icon demo-icon-' + status,
            onClick: this.props.onClick
        });
    };

    return DisplaySwitch;
}(_react.Component), _class4.propTypes = {
    onClick: _propTypes2.default.func,
    hidden: _propTypes2.default.bool
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

exports.Demo = Demo;
exports.DemoHead = DemoHead;
exports.DemoGroup = DemoGroup;
exports.initDemo = initDemo;