'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = ShellBase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames12 = require('classnames');

var _classnames13 = _interopRequireDefault(_classnames12);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _affix = require('../affix');

var _affix2 = _interopRequireDefault(_affix);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shell
 */
function ShellBase(props) {
    var _class, _temp, _initialiseProps;

    var componentName = props.componentName;
    var Shell = (_temp = _class = function (_Component) {
        (0, _inherits3.default)(Shell, _Component);

        function Shell(props) {
            (0, _classCallCheck3.default)(this, Shell);

            var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

            _initialiseProps.call(_this);

            var deviceMap = (0, _util2.getCollapseMap)(props.device);
            _this.layout = {};

            _this.state = {
                controll: false,
                collapseMap: deviceMap,
                device: props.device
            };
            return _this;
        }

        Shell.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
            var device = prevState.device;


            if (nextProps.device !== device) {
                var deviceMap = (0, _util2.getCollapseMap)(nextProps.device);
                return {
                    controll: false,
                    collapseMap: deviceMap,
                    device: nextProps.device
                };
            }

            return {};
        };

        Shell.prototype.componentDidMount = function componentDidMount() {
            this.checkAsideFixed();
        };

        Shell.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (prevProps.device !== this.props.device) {
                var deviceMapBefore = (0, _util2.getCollapseMap)(prevProps.device);
                var deviceMapAfter = (0, _util2.getCollapseMap)(this.props.device);

                Object.keys(deviceMapAfter).forEach(function (block) {
                    var _ref = _this2.layout[block] || {},
                        props = _ref.props;

                    if (deviceMapBefore[block] !== deviceMapAfter[block]) {
                        if (props && typeof props.onCollapseChange === 'function') {
                            props.onCollapseChange(deviceMapAfter[block]);
                        }
                    }
                });
            }

            setTimeout(function () {
                // 如果左侧边栏固定
                _this2.checkAsideFixed();
            }, 201);
        };

        Shell.prototype.render = function render() {
            return this.renderShell(this.props);
        };

        return Shell;
    }(_react.Component), _class.displayName = componentName, _class._typeMark = componentName, _class.propTypes = (0, _extends4.default)({}, _configProvider2.default.propTypes, {
        prefix: _propTypes2.default.string,
        /**
         * 设备类型
         * @enumdesc 手机, 平板, PC电脑
         */
        device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 设备类型
         * @enumdesc 浅色, 深色, 主题色
         */
        type: _propTypes2.default.oneOf(['light', 'dark', 'brand']),
        /**
         * 是否固定 header, 用sticky实现，IE下降级为Affix
         */
        fixedHeader: _propTypes2.default.bool
    }), _class.defaultProps = {
        prefix: 'next-',
        device: 'desktop',
        type: 'light',
        fixedHeader: false
    }, _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.checkAsideFixed = function () {
            var fixedHeader = _this3.props.fixedHeader;


            if (!fixedHeader) {
                return;
            }

            var headerHeight = void 0;
            if (_this3.headerRef && (_this3.navigationFixed || _this3.toolDockFixed)) {
                headerHeight = _util.dom.getStyle(_this3.headerRef, 'height');
            }

            if (_this3.navigationFixed) {
                var style = {};
                style.marginLeft = _util.dom.getStyle(_this3.navRef, 'width');
                _util.dom.addClass(_this3.navRef, 'fixed');
                headerHeight && _util.dom.setStyle(_this3.navRef, { top: headerHeight });
                _util.dom.setStyle(_this3.localNavRef || _this3.submainRef, style);
            }

            if (_this3.toolDockFixed) {
                var _style = {};
                _style.marginRight = _util.dom.getStyle(_this3.toolDockRef, 'width');
                _util.dom.addClass(_this3.toolDockRef, 'fixed');
                headerHeight && _util.dom.setStyle(_this3.toolDockRef, { top: headerHeight });
                _util.dom.setStyle(_this3.localNavRef || _this3.submainRef, _style);
            }
        };

        this.setChildCollapse = function (child, mark) {
            var _state = _this3.state,
                device = _state.device,
                collapseMap = _state.collapseMap,
                controll = _state.controll;
            var collapse = child.props.collapse;

            var deviceMap = (0, _util2.getCollapseMap)(device);
            var props = {};

            // 非受控模式
            if ((0, _util2.isBoolean)(collapse) === false) {
                props.collapse = controll ? collapseMap[mark] : deviceMap[mark];
                // props.collapse = collapseMap[mark];
            }

            if (device !== 'phone' && mark === 'Navigation') {
                props.miniable = true;
            }

            return _react2.default.cloneElement(child, props);
        };

        this.toggleAside = function (mark, props, e) {
            var _extends2;

            var _state2 = _this3.state,
                device = _state2.device,
                collapseMap = _state2.collapseMap;

            var deviceMap = (0, _util2.getCollapseMap)(device);
            var current = props.collapse;

            var newCollapseMap = (0, _extends4.default)({}, deviceMap, collapseMap, (_extends2 = {}, _extends2[mark] = !current, _extends2));
            _this3.setState({
                controll: true,
                collapseMap: newCollapseMap
            });

            if (props && typeof props.onCollapseChange === 'function') {
                props.onCollapseChange(newCollapseMap[mark]);
            }

            var children = _this3.props.children;

            var com = void 0;
            if (mark === 'Navigation') {
                com = children.filter(function (child) {
                    return child && child.type._typeMark.replace('Shell_', '') === mark && child.props.direction !== 'hoz';
                }).pop();
            } else {
                com = children.filter(function (child) {
                    return child && child.type._typeMark.replace('Shell_', '') === mark;
                }).pop();
            }

            var _com$props$triggerPro = com.props.triggerProps,
                triggerProps = _com$props$triggerPro === undefined ? {} : _com$props$triggerPro;


            if (typeof triggerProps.onClick === 'function') {
                triggerProps.onClick(e, _this3.state.collapseMap[mark]);
            }
        };

        this.toggleNavigation = function (e) {
            var mark = 'Navigation';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== _util.KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleLocalNavigation = function (e) {
            var mark = 'LocalNavigation';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== _util.KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleAncillary = function (e) {
            var mark = 'Ancillary';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== _util.KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleToolDock = function (e) {
            var mark = 'ToolDock';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== _util.KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.saveHeaderRef = function (ref) {
            _this3.headerRef = ref;
        };

        this.saveLocalNavRef = function (ref) {
            _this3.localNavRef = ref;
        };

        this.saveNavRef = function (ref) {
            _this3.navRef = ref;
        };

        this.saveSubmainRef = function (ref) {
            _this3.submainRef = ref;
        };

        this.saveToolDockRef = function (ref) {
            _this3.toolDockRef = ref;
        };

        this.renderShell = function (props) {
            var _classnames, _classnames2, _classnames3, _classnames4, _classnames5, _classnames6, _classnames7, _classnames11;

            var prefix = props.prefix,
                children = props.children,
                className = props.className,
                type = props.type,
                fixedHeader = props.fixedHeader,
                others = (0, _objectWithoutProperties3.default)(props, ['prefix', 'children', 'className', 'type', 'fixedHeader']);
            var device = _this3.state.device;


            var layout = {};
            layout.header = {};
            var hasToolDock = false,
                needNavigationTrigger = false,
                needDockTrigger = false;

            _react2.default.Children.map(children, function (child) {
                if (child && typeof child.type === 'function') {
                    var mark = child.type._typeMark.replace('Shell_', '');
                    switch (mark) {
                        case 'Branding':
                        case 'Action':
                            layout.header[mark] = child;
                            break;
                        case 'MultiTask':
                            layout.taskHeader = child;
                            break;
                        case 'LocalNavigation':
                            if (!layout[mark]) {
                                layout[mark] = [];
                            }
                            layout[mark] = _this3.setChildCollapse(child, mark);
                            break;
                        case 'Ancillary':
                            if (!layout[mark]) {
                                layout[mark] = [];
                            }

                            layout[mark] = _this3.setChildCollapse(child, mark);
                            break;
                        case 'ToolDock':
                            hasToolDock = true;

                            if (!layout[mark]) {
                                layout[mark] = [];
                            }

                            _this3.toolDockFixed = child.props.fixed;
                            var childT = _this3.setChildCollapse(child, mark);
                            layout[mark] = childT;

                            break;
                        case 'AppBar':
                        case 'Content':
                        case 'Footer':
                            layout.content || (layout.content = []);
                            layout.content.push(child);
                            break;
                        case 'Page':
                            layout.page || (layout.page = []);
                            layout.page = child;
                            break;
                        case 'Navigation':
                            if (child.props.direction === 'hoz') {
                                layout.header[mark] = child;
                            } else {
                                if (!layout[mark]) {
                                    layout[mark] = [];
                                }

                                needNavigationTrigger = true;
                                _this3.navigationFixed = child.props.fixed;
                                var childN = _this3.setChildCollapse(child, mark);
                                layout[mark] = childN;
                            }
                            break;
                        default:
                            break;
                    }
                }
            });

            var headerCls = (0, _classnames13.default)((_classnames = {}, _classnames[prefix + 'shell-header'] = true, _classnames[prefix + 'shell-fixed-header'] = fixedHeader, _classnames));

            var mainCls = (0, _classnames13.default)((_classnames2 = {}, _classnames2[prefix + 'shell-main'] = true, _classnames2));

            var pageCls = (0, _classnames13.default)((_classnames3 = {}, _classnames3[prefix + 'shell-page'] = true, _classnames3));

            var submainCls = (0, _classnames13.default)((_classnames4 = {}, _classnames4[prefix + 'shell-sub-main'] = true, _classnames4));

            var asideCls = (0, _classnames13.default)((_classnames5 = {}, _classnames5[prefix + 'shell-aside'] = true, _classnames5));

            var toolDockCls = (0, _classnames13.default)((_classnames6 = {}, _classnames6[prefix + 'aside-tooldock'] = true, _classnames6));

            var navigationCls = (0, _classnames13.default)((_classnames7 = {}, _classnames7[prefix + 'aside-navigation'] = true, _classnames7[prefix + 'shell-collapse'] = layout.Navigation && layout.Navigation.props.collapse, _classnames7));

            if (hasToolDock) {
                if (device === 'phone') {
                    needDockTrigger = true;
                }
            }

            // 如果存在垂直模式的 Navigation, 则需要在 Branding 上出现 trigger
            if (needNavigationTrigger) {
                var branding = layout.header.Branding;
                var _layout$Navigation$pr = layout.Navigation.props,
                    trigger = _layout$Navigation$pr.trigger,
                    collapse = _layout$Navigation$pr.collapse;


                if ('trigger' in layout.Navigation.props) {
                    trigger = trigger && _react2.default.cloneElement(trigger, {
                        onClick: _this3.toggleNavigation,
                        'aria-expanded': !collapse
                    }) || trigger;
                } else {
                    trigger = _react2.default.createElement(
                        'div',
                        {
                            key: 'nav-trigger',
                            role: 'button',
                            tabIndex: 0,
                            'aria-expanded': !collapse,
                            'aria-label': 'toggle',
                            className: 'nav-trigger',
                            onClick: _this3.toggleNavigation,
                            onKeyDown: _this3.toggleNavigation
                        },
                        collapse ? _react2.default.createElement(_icon2.default, { size: 'small', type: 'toggle-right' }) : _react2.default.createElement(_icon2.default, { size: 'small', type: 'toggle-left' })
                    );
                }

                if (!branding) {
                    trigger && (layout.header.Branding = trigger);
                } else {
                    layout.header.Branding = _react2.default.cloneElement(branding, {}, [trigger, branding.props.children]);
                }
            }

            // 如果存在 toolDock, 则需要在 Action 上出现 trigger
            if (needDockTrigger) {
                var action = layout.header.Action;
                var _layout$ToolDock$prop = layout.ToolDock.props,
                    _trigger = _layout$ToolDock$prop.trigger,
                    _collapse = _layout$ToolDock$prop.collapse;


                if ('trigger' in layout.ToolDock.props) {
                    _trigger = _trigger && _react2.default.cloneElement(_trigger, {
                        onClick: _this3.toggleToolDock,
                        'aria-expanded': !_collapse
                    }) || _trigger;
                } else {
                    _trigger = _react2.default.createElement(
                        'div',
                        {
                            key: 'dock-trigger',
                            tabIndex: 0,
                            role: 'button',
                            'aria-expanded': !_collapse,
                            'aria-label': 'toggle',
                            className: 'dock-trigger',
                            onClick: _this3.toggleToolDock,
                            onKeyDown: _this3.toggleToolDock
                        },
                        _react2.default.createElement(_icon2.default, { size: 'small', type: 'add' })
                    );
                }

                if (!action) {
                    layout.header.Action = _trigger;
                } else {
                    layout.header.Action = _react2.default.cloneElement(action, {}, [action.props.children, _trigger]);
                }
            }

            var headerDom = [],
                contentArr = [],
                innerArr = [],
                taskHeaderDom = null;

            if (layout.taskHeader) {
                var _classnames8;

                var taskHeaderCls = (0, _classnames13.default)((_classnames8 = {}, _classnames8[prefix + 'shell-task-header'] = true, _classnames8));

                taskHeaderDom = _react2.default.createElement(
                    'section',
                    { key: 'task-header', className: taskHeaderCls },
                    layout.taskHeader
                );
            }

            // 按照dom结构，innerArr 包括 LocalNavigation content Ancillary
            if (layout.LocalNavigation) {
                var _classnames9;

                var _layout$LocalNavigati = layout.LocalNavigation.props,
                    _trigger2 = _layout$LocalNavigati.trigger,
                    _collapse2 = _layout$LocalNavigati.collapse;


                if ('trigger' in layout.LocalNavigation.props) {
                    _trigger2 = _trigger2 && _react2.default.cloneElement(_trigger2, {
                        onClick: _this3.toggleLocalNavigation,
                        'aria-expanded': !_collapse2
                    }) || _trigger2;
                } else {
                    _trigger2 = _react2.default.createElement(
                        'div',
                        {
                            key: 'local-nav-trigger',
                            role: 'button',
                            tabIndex: 0,
                            'aria-expanded': !_collapse2,
                            'aria-label': 'toggle',
                            className: 'local-nav-trigger aside-trigger',
                            onClick: _this3.toggleLocalNavigation,
                            onKeyDown: _this3.toggleLocalNavigation
                        },
                        _collapse2 ? _react2.default.createElement(_icon2.default, { size: 'small', type: 'arrow-right' }) : _react2.default.createElement(_icon2.default, { size: 'small', type: 'arrow-left' })
                    );
                }

                var localNavCls = (0, _classnames13.default)(asideCls, (_classnames9 = {}, _classnames9[prefix + 'aside-localnavigation'] = true, _classnames9));

                innerArr.push(_react2.default.createElement(
                    'aside',
                    { key: 'localnavigation', className: localNavCls, ref: _this3.saveLocalNavRef },
                    _react2.default.cloneElement(layout.LocalNavigation, {}, [_react2.default.createElement(
                        'div',
                        { key: 'wrapper', className: prefix + 'shell-content-wrapper' },
                        layout.LocalNavigation.props.children
                    ), _trigger2])
                ));
            }

            if (layout.content) {
                innerArr.push(_react2.default.createElement(
                    'section',
                    { key: 'submain', className: submainCls, ref: _this3.saveSubmainRef },
                    layout.content
                ));
            }

            if (layout.Ancillary) {
                var _classnames10;

                var _layout$Ancillary$pro = layout.Ancillary.props,
                    _trigger3 = _layout$Ancillary$pro.trigger,
                    _collapse3 = _layout$Ancillary$pro.collapse;


                if ('trigger' in layout.Ancillary.props) {
                    _trigger3 = _trigger3 && _react2.default.cloneElement(_trigger3, {
                        onClick: _this3.toggleAncillary,
                        'aria-expanded': !_collapse3
                    }) || _trigger3;
                } else {
                    _trigger3 = _react2.default.createElement(
                        'div',
                        {
                            key: 'ancillary-trigger',
                            role: 'button',
                            tabIndex: 0,
                            'aria-expanded': !_collapse3,
                            'aria-label': 'toggle',
                            className: 'ancillary-trigger aside-trigger',
                            onClick: _this3.toggleAncillary,
                            onKeyDown: _this3.toggleAncillary
                        },
                        _collapse3 ? _react2.default.createElement(_icon2.default, { size: 'small', type: 'arrow-left' }) : _react2.default.createElement(_icon2.default, { size: 'small', type: 'arrow-right' })
                    );
                }

                var ancillaryCls = (0, _classnames13.default)(asideCls, (_classnames10 = {}, _classnames10[prefix + 'aside-ancillary'] = true, _classnames10));

                innerArr.push(_react2.default.createElement(
                    'aside',
                    { key: 'ancillary', className: ancillaryCls },
                    _react2.default.cloneElement(layout.Ancillary, {}, [_react2.default.createElement(
                        'div',
                        { key: 'wrapper', className: prefix + 'shell-content-wrapper' },
                        layout.Ancillary.props.children
                    ), _trigger3])
                ));
            }

            // 按照dom结构, arr 包括 header Navigation ToolDock 和 innerArr
            if (Object.keys(layout.header).length > 0) {
                var _dom = _react2.default.createElement(
                    'header',
                    { key: 'header', className: headerCls, ref: _this3.saveHeaderRef },
                    layout.header.Branding,
                    layout.header.Navigation,
                    layout.header.Action
                );
                if (fixedHeader && _util.env.ieVersion) {
                    headerDom = _react2.default.createElement(
                        _affix2.default,
                        { style: { zIndex: 9 } },
                        _dom
                    );
                } else {
                    headerDom = _dom;
                }
            }

            layout.Navigation && contentArr.push(_react2.default.createElement(
                'aside',
                { key: 'navigation', className: navigationCls, ref: _this3.saveNavRef },
                _react2.default.cloneElement(layout.Navigation, {
                    className: (0, _classnames13.default)(asideCls, layout.Navigation.props.className)
                })
            ));

            // const contentArea = innerArr.length > 0
            //     ? <section key="main" className={mainCls}>{innerArr}</section>
            //     : layout.page;

            // contentArr.push(contentArea);
            contentArr = contentArr.concat(innerArr.length > 0 ? innerArr : [_react2.default.createElement(
                'section',
                { key: 'page', ref: _this3.saveSubmainRef, className: submainCls },
                layout.page
            )]);

            layout.ToolDock && contentArr.push(_react2.default.createElement(
                'aside',
                { key: 'tooldock', className: toolDockCls, ref: _this3.saveToolDockRef },
                _react2.default.cloneElement(layout.ToolDock, {
                    className: (0, _classnames13.default)(asideCls, layout.ToolDock.props.className),
                    key: 'tooldock'
                })
            ));

            var cls = (0, _classnames13.default)((_classnames11 = {}, _classnames11[prefix + 'shell'] = true, _classnames11[prefix + 'shell-' + device] = true, _classnames11[prefix + 'shell-' + type] = true, _classnames11[className] = !!className, _classnames11));

            if (componentName === 'Page') {
                return _react2.default.createElement(
                    'section',
                    { className: pageCls },
                    children
                );
            }

            _this3.layout = layout;

            return _react2.default.createElement(
                'section',
                (0, _extends4.default)({ className: cls }, others),
                headerDom,
                taskHeaderDom,
                _react2.default.createElement(
                    'section',
                    { className: mainCls },
                    contentArr
                )
            );
        };
    }, _temp);
    Shell.displayName = 'Shell';


    return (0, _reactLifecyclesCompat.polyfill)(Shell);
}
module.exports = exports['default'];