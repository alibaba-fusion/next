import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import Affix from '../affix';
import Icon from '../icon';
import { KEYCODE, dom, env } from '../util';
import { isBoolean, getCollapseMap } from './util';
/** Shell */
export default function ShellBase(props) {
    var componentName = props.componentName;
    var Shell = /** @class */ (function (_super) {
        __extends(Shell, _super);
        function Shell(props) {
            var _this = _super.call(this, props) || this;
            _this.checkAsideFixed = function () {
                var fixedHeader = _this.props.fixedHeader;
                if (!fixedHeader) {
                    return;
                }
                var headerHeight;
                if (_this.headerRef && (_this.navigationFixed || _this.toolDockFixed)) {
                    headerHeight = dom.getStyle(_this.headerRef, 'height');
                }
                if (_this.navigationFixed) {
                    var style = {};
                    style.marginLeft = dom.getStyle(_this.navRef, 'width');
                    dom.addClass(_this.navRef, 'fixed');
                    headerHeight && dom.setStyle(_this.navRef, { top: headerHeight });
                    dom.setStyle(_this.localNavRef || _this.submainRef, style);
                }
                if (_this.toolDockFixed) {
                    var style = {};
                    style.marginRight = dom.getStyle(_this.toolDockRef, 'width');
                    dom.addClass(_this.toolDockRef, 'fixed');
                    headerHeight && dom.setStyle(_this.toolDockRef, { top: headerHeight });
                    dom.setStyle(_this.localNavRef || _this.submainRef, style);
                }
            };
            _this.setChildCollapse = function (child, mark) {
                var _a = _this.state, device = _a.device, collapseMap = _a.collapseMap, controll = _a.controll;
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
            _this.toggleAside = function (mark, props, e) {
                var _a;
                var _b = _this.state, device = _b.device, collapseMap = _b.collapseMap;
                var deviceMap = getCollapseMap(device);
                var current = props.collapse;
                var newCollapseMap = __assign(__assign(__assign({}, deviceMap), collapseMap), (_a = {}, _a[mark] = !current, _a));
                _this.setState({
                    controll: true,
                    collapseMap: newCollapseMap,
                });
                if (props && typeof props.onCollapseChange === 'function') {
                    props.onCollapseChange(newCollapseMap[mark]);
                }
                var children = _this.props.children;
                var com;
                if (mark === 'Navigation') {
                    com = children
                        .filter(function (child) {
                        return child &&
                            child.type._typeMark.replace('Shell_', '') === mark &&
                            child.props.direction !== 'hoz';
                    })
                        .pop();
                }
                else {
                    com = children
                        .filter(function (child) {
                        return child &&
                            child.type._typeMark.replace('Shell_', '') === mark;
                    })
                        .pop();
                }
                var _c = com.props.triggerProps, triggerProps = _c === void 0 ? {} : _c;
                if (typeof triggerProps.onClick === 'function') {
                    triggerProps.onClick(e, _this.state.collapseMap[mark]);
                }
            };
            _this.toggleNavigation = function (e) {
                var mark = 'Navigation';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleLocalNavigation = function (e) {
                var mark = 'LocalNavigation';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleAncillary = function (e) {
                var mark = 'Ancillary';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleToolDock = function (e) {
                var mark = 'ToolDock';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.saveHeaderRef = function (ref) {
                _this.headerRef = ref;
            };
            _this.saveLocalNavRef = function (ref) {
                _this.localNavRef = ref;
            };
            _this.saveNavRef = function (ref) {
                _this.navRef = ref;
            };
            _this.saveSubmainRef = function (ref) {
                _this.submainRef = ref;
            };
            _this.saveToolDockRef = function (ref) {
                _this.toolDockRef = ref;
            };
            _this.renderShell = function (props) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                var prefix = props.prefix, children = props.children, className = props.className, type = props.type, fixedHeader = props.fixedHeader, others = __rest(props, ["prefix", "children", "className", "type", "fixedHeader"]);
                var device = _this.state.device;
                var layout = {};
                layout.header = {};
                var hasToolDock = false, needNavigationTrigger = false, needDockTrigger = false;
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
                                    // @ts-expect-error 不应该是[], LocalNavigation 应该是 ReactElement
                                    layout[mark] = [];
                                }
                                layout[mark] = _this.setChildCollapse(child, mark);
                                break;
                            case 'Ancillary':
                                if (!layout[mark]) {
                                    // @ts-expect-error 不应该是[], Ancillary 应该是 ReactElement
                                    layout[mark] = [];
                                }
                                layout[mark] = _this.setChildCollapse(child, mark);
                                break;
                            case 'ToolDock':
                                hasToolDock = true;
                                if (!layout[mark]) {
                                    // @ts-expect-error 不应该是[], ToolDock 应该是 ReactElement
                                    layout[mark] = [];
                                }
                                _this.toolDockFixed = child.props.fixed;
                                var childT = _this.setChildCollapse(child, mark);
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
                                }
                                else {
                                    if (!layout[mark]) {
                                        // @ts-expect-error 不应该是[], Navigation 应该是 ReactElement
                                        layout[mark] = [];
                                    }
                                    needNavigationTrigger = true;
                                    _this.navigationFixed = child.props.fixed;
                                    var childN = _this.setChildCollapse(child, mark);
                                    layout[mark] = childN;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                });
                var headerCls = classnames((_a = {},
                    _a["".concat(prefix, "shell-header")] = true,
                    _a["".concat(prefix, "shell-fixed-header")] = fixedHeader,
                    _a));
                var mainCls = classnames((_b = {},
                    _b["".concat(prefix, "shell-main")] = true,
                    _b));
                var pageCls = classnames((_c = {},
                    _c["".concat(prefix, "shell-page")] = true,
                    _c));
                var submainCls = classnames((_d = {},
                    _d["".concat(prefix, "shell-sub-main")] = true,
                    _d));
                var asideCls = classnames((_e = {},
                    _e["".concat(prefix, "shell-aside")] = true,
                    _e));
                var toolDockCls = classnames((_f = {},
                    _f["".concat(prefix, "aside-tooldock")] = true,
                    _f));
                var navigationCls = classnames((_g = {},
                    _g["".concat(prefix, "aside-navigation")] = true,
                    _g["".concat(prefix, "shell-collapse")] = layout.Navigation && layout.Navigation.props.collapse,
                    _g));
                if (hasToolDock) {
                    if (device === 'phone') {
                        needDockTrigger = true;
                    }
                }
                // 如果存在垂直模式的 Navigation, 则需要在 Branding 上出现 trigger
                if (needNavigationTrigger) {
                    var branding = layout.header.Branding;
                    var collapse = layout.Navigation.props.collapse;
                    var trigger = layout.Navigation.props.trigger;
                    if ('trigger' in layout.Navigation.props) {
                        trigger =
                            (trigger &&
                                React.cloneElement(trigger, {
                                    onClick: _this.toggleNavigation,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (React.createElement("div", { key: "nav-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "nav-trigger", onClick: _this.toggleNavigation, onKeyDown: _this.toggleNavigation }, collapse ? (React.createElement(Icon, { size: "small", type: "toggle-right" })) : (React.createElement(Icon, { size: "small", type: "toggle-left" }))));
                    }
                    if (!branding) {
                        trigger && (layout.header.Branding = trigger);
                    }
                    else {
                        layout.header.Branding = React.cloneElement(branding, {}, [
                            trigger,
                            branding.props.children,
                        ]);
                    }
                }
                // 如果存在 toolDock, 则需要在 Action 上出现 trigger
                if (needDockTrigger) {
                    var action = layout.header.Action;
                    var collapse = layout.ToolDock.props.collapse;
                    var trigger = layout.ToolDock.props.trigger;
                    if ('trigger' in layout.ToolDock.props) {
                        trigger =
                            (trigger &&
                                React.cloneElement(trigger, {
                                    onClick: _this.toggleToolDock,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (React.createElement("div", { key: "dock-trigger", tabIndex: 0, role: "button", "aria-expanded": !collapse, "aria-label": "toggle", className: "dock-trigger", onClick: _this.toggleToolDock, onKeyDown: _this.toggleToolDock },
                            React.createElement(Icon, { size: "small", type: "add" })));
                    }
                    if (!action) {
                        layout.header.Action = trigger;
                    }
                    else {
                        layout.header.Action = React.cloneElement(action, {}, [
                            action.props.children,
                            trigger,
                        ]);
                    }
                }
                var headerDom = [], contentArr = [], taskHeaderDom = null;
                var innerArr = [];
                if (layout.taskHeader) {
                    var taskHeaderCls = classnames((_h = {},
                        _h["".concat(prefix, "shell-task-header")] = true,
                        _h));
                    taskHeaderDom = (React.createElement("section", { key: "task-header", className: taskHeaderCls }, layout.taskHeader));
                }
                // 按照dom结构，innerArr 包括 LocalNavigation content Ancillary
                if (layout.LocalNavigation) {
                    var collapse = layout.LocalNavigation.props.collapse;
                    var trigger = layout.LocalNavigation.props.trigger;
                    if ('trigger' in layout.LocalNavigation.props) {
                        trigger =
                            (trigger &&
                                React.cloneElement(trigger, {
                                    onClick: _this.toggleLocalNavigation,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (React.createElement("div", { key: "local-nav-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "local-nav-trigger aside-trigger", onClick: _this.toggleLocalNavigation, onKeyDown: _this.toggleLocalNavigation }, collapse ? (React.createElement(Icon, { size: "small", type: "arrow-right" })) : (React.createElement(Icon, { size: "small", type: "arrow-left" }))));
                    }
                    var localNavCls = classnames(asideCls, (_j = {},
                        _j["".concat(prefix, "aside-localnavigation")] = true,
                        _j));
                    innerArr.push(React.createElement("aside", { key: "localnavigation", className: localNavCls, ref: _this.saveLocalNavRef }, React.cloneElement(layout.LocalNavigation, {}, [
                        React.createElement("div", { key: "wrapper", className: "".concat(prefix, "shell-content-wrapper") }, layout.LocalNavigation.props.children),
                        trigger,
                    ])));
                }
                if (layout.content) {
                    innerArr.push(React.createElement("section", { key: "submain", className: submainCls, ref: _this.saveSubmainRef }, layout.content));
                }
                if (layout.Ancillary) {
                    var collapse = layout.Ancillary.props.collapse;
                    var trigger = layout.Ancillary.props.trigger;
                    if ('trigger' in layout.Ancillary.props) {
                        trigger =
                            (trigger &&
                                React.cloneElement(trigger, {
                                    onClick: _this.toggleAncillary,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (React.createElement("div", { key: "ancillary-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "ancillary-trigger aside-trigger", onClick: _this.toggleAncillary, onKeyDown: _this.toggleAncillary }, collapse ? (React.createElement(Icon, { size: "small", type: "arrow-left" })) : (React.createElement(Icon, { size: "small", type: "arrow-right" }))));
                    }
                    var ancillaryCls = classnames(asideCls, (_k = {},
                        _k["".concat(prefix, "aside-ancillary")] = true,
                        _k));
                    innerArr.push(React.createElement("aside", { key: "ancillary", className: ancillaryCls }, React.cloneElement(layout.Ancillary, {}, [
                        React.createElement("div", { key: "wrapper", className: "".concat(prefix, "shell-content-wrapper") }, layout.Ancillary.props.children),
                        trigger,
                    ])));
                }
                // 按照dom结构, arr 包括 header Navigation ToolDock 和 innerArr
                if (Object.keys(layout.header).length > 0) {
                    var dom_1 = (React.createElement("header", { key: "header", className: headerCls, ref: _this.saveHeaderRef },
                        layout.header.Branding,
                        layout.header.Navigation,
                        layout.header.Action));
                    if (fixedHeader && env.ieVersion) {
                        headerDom = React.createElement(Affix, { style: { zIndex: 9 } }, dom_1);
                    }
                    else {
                        headerDom = dom_1;
                    }
                }
                layout.Navigation &&
                    contentArr.push(React.createElement("aside", { key: "navigation", className: navigationCls, ref: _this.saveNavRef }, React.cloneElement(layout.Navigation, {
                        className: classnames(asideCls, layout.Navigation.props.className),
                    })));
                // const contentArea = innerArr.length > 0
                //     ? <section key="main" className={mainCls}>{innerArr}</section>
                //     : layout.page;
                // contentArr.push(contentArea);
                contentArr = contentArr.concat(innerArr.length > 0
                    ? innerArr
                    : [
                        React.createElement("section", { key: "page", ref: _this.saveSubmainRef, className: submainCls }, layout.page),
                    ]);
                layout.ToolDock &&
                    contentArr.push(React.createElement("aside", { key: "tooldock", className: toolDockCls, ref: _this.saveToolDockRef }, React.cloneElement(layout.ToolDock, {
                        className: classnames(asideCls, layout.ToolDock.props.className),
                        key: 'tooldock',
                    })));
                var cls = classnames((_l = {},
                    _l["".concat(prefix, "shell")] = true,
                    _l["".concat(prefix, "shell-").concat(device)] = true,
                    _l["".concat(prefix, "shell-").concat(type)] = true,
                    _l[className] = !!className,
                    _l));
                if (componentName === 'Page') {
                    return React.createElement("section", { className: pageCls }, children);
                }
                _this.layout = layout;
                return (React.createElement("section", __assign({ className: cls }, others),
                    headerDom,
                    taskHeaderDom,
                    React.createElement("section", { className: mainCls }, contentArr)));
            };
            var deviceMap = getCollapseMap(props.device);
            _this.layout = {};
            _this.state = {
                controll: false,
                collapseMap: deviceMap,
                device: props.device,
            };
            return _this;
        }
        Shell.getDerivedStateFromProps = function (nextProps, prevState) {
            var device = prevState.device;
            if (nextProps.device !== device) {
                var deviceMap = getCollapseMap(nextProps.device);
                return {
                    controll: false,
                    collapseMap: deviceMap,
                    device: nextProps.device,
                };
            }
            return {};
        };
        Shell.prototype.componentDidMount = function () {
            this.checkAsideFixed();
        };
        Shell.prototype.componentDidUpdate = function (prevProps) {
            var _this = this;
            if (prevProps.device !== this.props.device) {
                var deviceMapBefore_1 = getCollapseMap(prevProps.device);
                var deviceMapAfter_1 = getCollapseMap(this.props.device);
                Object.keys(deviceMapAfter_1).forEach(function (block) {
                    var props = (_this.layout[block] || {}).props;
                    if (deviceMapBefore_1[block] !== deviceMapAfter_1[block]) {
                        if (props && typeof props.onCollapseChange === 'function') {
                            props.onCollapseChange(deviceMapAfter_1[block]);
                        }
                    }
                });
            }
            setTimeout(function () {
                // 如果左侧边栏固定
                _this.checkAsideFixed();
            }, 201);
        };
        Shell.prototype.render = function () {
            return this.renderShell(this.props);
        };
        Shell.displayName = componentName;
        Shell._typeMark = componentName;
        Shell.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, device: PropTypes.oneOf(['phone', 'tablet', 'desktop']), type: PropTypes.oneOf(['light', 'dark', 'brand']), fixedHeader: PropTypes.bool });
        Shell.defaultProps = {
            prefix: 'next-',
            device: 'desktop',
            type: 'light',
            fixedHeader: false,
        };
        return Shell;
    }(Component));
    return polyfill(Shell);
}
