import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import Affix from '../affix';
import Icon from '../icon';
import { KEYCODE, dom, env } from '../util';

import { isBoolean, getCollapseMap } from './util';
/**
 * Shell
 */
export default function ShellBase(props) {
    var _class, _temp, _initialiseProps;

    var componentName = props.componentName;
    var Shell = (_temp = _class = function (_Component) {
        _inherits(Shell, _Component);

        function Shell(props) {
            _classCallCheck(this, Shell);

            var _this = _possibleConstructorReturn(this, _Component.call(this, props));

            _initialiseProps.call(_this);

            var deviceMap = getCollapseMap(props.device);
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
                var deviceMap = getCollapseMap(nextProps.device);
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
                var deviceMapBefore = getCollapseMap(prevProps.device);
                var deviceMapAfter = getCollapseMap(this.props.device);

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
    }(Component), _class.displayName = componentName, _class._typeMark = componentName, _class.propTypes = _extends({}, ConfigProvider.propTypes, {
        prefix: PropTypes.string,
        /**
         * 设备类型
         * @enumdesc 手机, 平板, PC电脑
         */
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 设备类型
         * @enumdesc 浅色, 深色, 主题色
         */
        type: PropTypes.oneOf(['light', 'dark', 'brand']),
        /**
         * 是否固定 header, 用sticky实现，IE下降级为Affix
         */
        fixedHeader: PropTypes.bool
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
                headerHeight = dom.getStyle(_this3.headerRef, 'height');
            }

            if (_this3.navigationFixed) {
                var style = {};
                style.marginLeft = dom.getStyle(_this3.navRef, 'width');
                dom.addClass(_this3.navRef, 'fixed');
                headerHeight && dom.setStyle(_this3.navRef, { top: headerHeight });
                dom.setStyle(_this3.localNavRef || _this3.submainRef, style);
            }

            if (_this3.toolDockFixed) {
                var _style = {};
                _style.marginRight = dom.getStyle(_this3.toolDockRef, 'width');
                dom.addClass(_this3.toolDockRef, 'fixed');
                headerHeight && dom.setStyle(_this3.toolDockRef, { top: headerHeight });
                dom.setStyle(_this3.localNavRef || _this3.submainRef, _style);
            }
        };

        this.setChildCollapse = function (child, mark) {
            var _state = _this3.state,
                device = _state.device,
                collapseMap = _state.collapseMap,
                controll = _state.controll;
            var collapse = child.props.collapse;

            var deviceMap = getCollapseMap(device);
            var props = {};

            // 非受控模式
            if (isBoolean(collapse) === false) {
                props.collapse = controll ? collapseMap[mark] : deviceMap[mark];
                // props.collapse = collapseMap[mark];
            }

            if (device !== 'phone' && mark === 'Navigation') {
                props.miniable = true;
            }

            return React.cloneElement(child, props);
        };

        this.toggleAside = function (mark, props, e) {
            var _extends2;

            var _state2 = _this3.state,
                device = _state2.device,
                collapseMap = _state2.collapseMap;

            var deviceMap = getCollapseMap(device);
            var current = props.collapse;

            var newCollapseMap = _extends({}, deviceMap, collapseMap, (_extends2 = {}, _extends2[mark] = !current, _extends2));
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


            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleLocalNavigation = function (e) {
            var mark = 'LocalNavigation';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleAncillary = function (e) {
            var mark = 'Ancillary';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            _this3.toggleAside(mark, props, e);
        };

        this.toggleToolDock = function (e) {
            var mark = 'ToolDock';
            var props = _this3.layout[mark].props;


            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
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
                others = _objectWithoutProperties(props, ['prefix', 'children', 'className', 'type', 'fixedHeader']);

            var device = _this3.state.device;


            var layout = {};
            layout.header = {};
            var hasToolDock = false,
                needNavigationTrigger = false,
                needDockTrigger = false;

            React.Children.map(children, function (child) {
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

            var headerCls = classnames((_classnames = {}, _classnames[prefix + 'shell-header'] = true, _classnames[prefix + 'shell-fixed-header'] = fixedHeader, _classnames));

            var mainCls = classnames((_classnames2 = {}, _classnames2[prefix + 'shell-main'] = true, _classnames2));

            var pageCls = classnames((_classnames3 = {}, _classnames3[prefix + 'shell-page'] = true, _classnames3));

            var submainCls = classnames((_classnames4 = {}, _classnames4[prefix + 'shell-sub-main'] = true, _classnames4));

            var asideCls = classnames((_classnames5 = {}, _classnames5[prefix + 'shell-aside'] = true, _classnames5));

            var toolDockCls = classnames((_classnames6 = {}, _classnames6[prefix + 'aside-tooldock'] = true, _classnames6));

            var navigationCls = classnames((_classnames7 = {}, _classnames7[prefix + 'aside-navigation'] = true, _classnames7[prefix + 'shell-collapse'] = layout.Navigation && layout.Navigation.props.collapse, _classnames7));

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
                    trigger = trigger && React.cloneElement(trigger, {
                        onClick: _this3.toggleNavigation,
                        'aria-expanded': !collapse
                    }) || trigger;
                } else {
                    trigger = React.createElement(
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
                        collapse ? React.createElement(Icon, { size: 'small', type: 'toggle-right' }) : React.createElement(Icon, { size: 'small', type: 'toggle-left' })
                    );
                }

                if (!branding) {
                    trigger && (layout.header.Branding = trigger);
                } else {
                    layout.header.Branding = React.cloneElement(branding, {}, [trigger, branding.props.children]);
                }
            }

            // 如果存在 toolDock, 则需要在 Action 上出现 trigger
            if (needDockTrigger) {
                var action = layout.header.Action;
                var _layout$ToolDock$prop = layout.ToolDock.props,
                    _trigger = _layout$ToolDock$prop.trigger,
                    _collapse = _layout$ToolDock$prop.collapse;


                if ('trigger' in layout.ToolDock.props) {
                    _trigger = _trigger && React.cloneElement(_trigger, {
                        onClick: _this3.toggleToolDock,
                        'aria-expanded': !_collapse
                    }) || _trigger;
                } else {
                    _trigger = React.createElement(
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
                        React.createElement(Icon, { size: 'small', type: 'add' })
                    );
                }

                if (!action) {
                    layout.header.Action = _trigger;
                } else {
                    layout.header.Action = React.cloneElement(action, {}, [action.props.children, _trigger]);
                }
            }

            var headerDom = [],
                contentArr = [],
                innerArr = [],
                taskHeaderDom = null;

            if (layout.taskHeader) {
                var _classnames8;

                var taskHeaderCls = classnames((_classnames8 = {}, _classnames8[prefix + 'shell-task-header'] = true, _classnames8));

                taskHeaderDom = React.createElement(
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
                    _trigger2 = _trigger2 && React.cloneElement(_trigger2, {
                        onClick: _this3.toggleLocalNavigation,
                        'aria-expanded': !_collapse2
                    }) || _trigger2;
                } else {
                    _trigger2 = React.createElement(
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
                        _collapse2 ? React.createElement(Icon, { size: 'small', type: 'arrow-right' }) : React.createElement(Icon, { size: 'small', type: 'arrow-left' })
                    );
                }

                var localNavCls = classnames(asideCls, (_classnames9 = {}, _classnames9[prefix + 'aside-localnavigation'] = true, _classnames9));

                innerArr.push(React.createElement(
                    'aside',
                    { key: 'localnavigation', className: localNavCls, ref: _this3.saveLocalNavRef },
                    React.cloneElement(layout.LocalNavigation, {}, [React.createElement(
                        'div',
                        { key: 'wrapper', className: prefix + 'shell-content-wrapper' },
                        layout.LocalNavigation.props.children
                    ), _trigger2])
                ));
            }

            if (layout.content) {
                innerArr.push(React.createElement(
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
                    _trigger3 = _trigger3 && React.cloneElement(_trigger3, {
                        onClick: _this3.toggleAncillary,
                        'aria-expanded': !_collapse3
                    }) || _trigger3;
                } else {
                    _trigger3 = React.createElement(
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
                        _collapse3 ? React.createElement(Icon, { size: 'small', type: 'arrow-left' }) : React.createElement(Icon, { size: 'small', type: 'arrow-right' })
                    );
                }

                var ancillaryCls = classnames(asideCls, (_classnames10 = {}, _classnames10[prefix + 'aside-ancillary'] = true, _classnames10));

                innerArr.push(React.createElement(
                    'aside',
                    { key: 'ancillary', className: ancillaryCls },
                    React.cloneElement(layout.Ancillary, {}, [React.createElement(
                        'div',
                        { key: 'wrapper', className: prefix + 'shell-content-wrapper' },
                        layout.Ancillary.props.children
                    ), _trigger3])
                ));
            }

            // 按照dom结构, arr 包括 header Navigation ToolDock 和 innerArr
            if (Object.keys(layout.header).length > 0) {
                var _dom = React.createElement(
                    'header',
                    { key: 'header', className: headerCls, ref: _this3.saveHeaderRef },
                    layout.header.Branding,
                    layout.header.Navigation,
                    layout.header.Action
                );
                if (fixedHeader && env.ieVersion) {
                    headerDom = React.createElement(
                        Affix,
                        { style: { zIndex: 9 } },
                        _dom
                    );
                } else {
                    headerDom = _dom;
                }
            }

            layout.Navigation && contentArr.push(React.createElement(
                'aside',
                { key: 'navigation', className: navigationCls, ref: _this3.saveNavRef },
                React.cloneElement(layout.Navigation, {
                    className: classnames(asideCls, layout.Navigation.props.className)
                })
            ));

            // const contentArea = innerArr.length > 0
            //     ? <section key="main" className={mainCls}>{innerArr}</section>
            //     : layout.page;

            // contentArr.push(contentArea);
            contentArr = contentArr.concat(innerArr.length > 0 ? innerArr : [React.createElement(
                'section',
                { key: 'page', ref: _this3.saveSubmainRef, className: submainCls },
                layout.page
            )]);

            layout.ToolDock && contentArr.push(React.createElement(
                'aside',
                { key: 'tooldock', className: toolDockCls, ref: _this3.saveToolDockRef },
                React.cloneElement(layout.ToolDock, {
                    className: classnames(asideCls, layout.ToolDock.props.className),
                    key: 'tooldock'
                })
            ));

            var cls = classnames((_classnames11 = {}, _classnames11[prefix + 'shell'] = true, _classnames11[prefix + 'shell-' + device] = true, _classnames11[prefix + 'shell-' + type] = true, _classnames11[className] = !!className, _classnames11));

            if (componentName === 'Page') {
                return React.createElement(
                    'section',
                    { className: pageCls },
                    children
                );
            }

            _this3.layout = layout;

            return React.createElement(
                'section',
                _extends({ className: cls }, others),
                headerDom,
                taskHeaderDom,
                React.createElement(
                    'section',
                    { className: mainCls },
                    contentArr
                )
            );
        };
    }, _temp);
    Shell.displayName = 'Shell';


    return polyfill(Shell);
}