"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var affix_1 = tslib_1.__importDefault(require("../affix"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
var util_2 = require("./util");
/** Shell */
function ShellBase(props) {
    var componentName = props.componentName;
    var Shell = /** @class */ (function (_super) {
        tslib_1.__extends(Shell, _super);
        function Shell(props) {
            var _this = _super.call(this, props) || this;
            _this.checkAsideFixed = function () {
                var fixedHeader = _this.props.fixedHeader;
                if (!fixedHeader) {
                    return;
                }
                var headerHeight;
                if (_this.headerRef && (_this.navigationFixed || _this.toolDockFixed)) {
                    headerHeight = util_1.dom.getStyle(_this.headerRef, 'height');
                }
                if (_this.navigationFixed) {
                    var style = {};
                    style.marginLeft = util_1.dom.getStyle(_this.navRef, 'width');
                    util_1.dom.addClass(_this.navRef, 'fixed');
                    headerHeight && util_1.dom.setStyle(_this.navRef, { top: headerHeight });
                    util_1.dom.setStyle(_this.localNavRef || _this.submainRef, style);
                }
                if (_this.toolDockFixed) {
                    var style = {};
                    style.marginRight = util_1.dom.getStyle(_this.toolDockRef, 'width');
                    util_1.dom.addClass(_this.toolDockRef, 'fixed');
                    headerHeight && util_1.dom.setStyle(_this.toolDockRef, { top: headerHeight });
                    util_1.dom.setStyle(_this.localNavRef || _this.submainRef, style);
                }
            };
            _this.setChildCollapse = function (child, mark) {
                var _a = _this.state, device = _a.device, collapseMap = _a.collapseMap, controll = _a.controll;
                var collapse = child.props.collapse;
                var deviceMap = (0, util_2.getCollapseMap)(device);
                var props = {};
                // 非受控模式
                if ((0, util_2.isBoolean)(collapse) === false) {
                    props.collapse = controll ? collapseMap[mark] : deviceMap[mark];
                    // props.collapse = collapseMap[mark];
                }
                if (device !== 'phone' && mark === 'Navigation') {
                    props.miniable = true;
                }
                return react_1.default.cloneElement(child, props);
            };
            _this.toggleAside = function (mark, props, e) {
                var _a;
                var _b = _this.state, device = _b.device, collapseMap = _b.collapseMap;
                var deviceMap = (0, util_2.getCollapseMap)(device);
                var current = props.collapse;
                var newCollapseMap = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, deviceMap), collapseMap), (_a = {}, _a[mark] = !current, _a));
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
                if ('keyCode' in e && e.keyCode !== util_1.KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleLocalNavigation = function (e) {
                var mark = 'LocalNavigation';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== util_1.KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleAncillary = function (e) {
                var mark = 'Ancillary';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== util_1.KEYCODE.ENTER) {
                    return;
                }
                _this.toggleAside(mark, props, e);
            };
            _this.toggleToolDock = function (e) {
                var mark = 'ToolDock';
                var props = _this.layout[mark].props;
                if ('keyCode' in e && e.keyCode !== util_1.KEYCODE.ENTER) {
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
                var prefix = props.prefix, children = props.children, className = props.className, type = props.type, fixedHeader = props.fixedHeader, others = tslib_1.__rest(props, ["prefix", "children", "className", "type", "fixedHeader"]);
                var device = _this.state.device;
                var layout = {};
                layout.header = {};
                var hasToolDock = false, needNavigationTrigger = false, needDockTrigger = false;
                react_1.default.Children.map(children, function (child) {
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
                var headerCls = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "shell-header")] = true,
                    _a["".concat(prefix, "shell-fixed-header")] = fixedHeader,
                    _a));
                var mainCls = (0, classnames_1.default)((_b = {},
                    _b["".concat(prefix, "shell-main")] = true,
                    _b));
                var pageCls = (0, classnames_1.default)((_c = {},
                    _c["".concat(prefix, "shell-page")] = true,
                    _c));
                var submainCls = (0, classnames_1.default)((_d = {},
                    _d["".concat(prefix, "shell-sub-main")] = true,
                    _d));
                var asideCls = (0, classnames_1.default)((_e = {},
                    _e["".concat(prefix, "shell-aside")] = true,
                    _e));
                var toolDockCls = (0, classnames_1.default)((_f = {},
                    _f["".concat(prefix, "aside-tooldock")] = true,
                    _f));
                var navigationCls = (0, classnames_1.default)((_g = {},
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
                                react_1.default.cloneElement(trigger, {
                                    onClick: _this.toggleNavigation,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (react_1.default.createElement("div", { key: "nav-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "nav-trigger", onClick: _this.toggleNavigation, onKeyDown: _this.toggleNavigation }, collapse ? (react_1.default.createElement(icon_1.default, { size: "small", type: "toggle-right" })) : (react_1.default.createElement(icon_1.default, { size: "small", type: "toggle-left" }))));
                    }
                    if (!branding) {
                        trigger && (layout.header.Branding = trigger);
                    }
                    else {
                        layout.header.Branding = react_1.default.cloneElement(branding, {}, [
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
                                react_1.default.cloneElement(trigger, {
                                    onClick: _this.toggleToolDock,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (react_1.default.createElement("div", { key: "dock-trigger", tabIndex: 0, role: "button", "aria-expanded": !collapse, "aria-label": "toggle", className: "dock-trigger", onClick: _this.toggleToolDock, onKeyDown: _this.toggleToolDock },
                            react_1.default.createElement(icon_1.default, { size: "small", type: "add" })));
                    }
                    if (!action) {
                        layout.header.Action = trigger;
                    }
                    else {
                        layout.header.Action = react_1.default.cloneElement(action, {}, [
                            action.props.children,
                            trigger,
                        ]);
                    }
                }
                var headerDom = [], contentArr = [], taskHeaderDom = null;
                var innerArr = [];
                if (layout.taskHeader) {
                    var taskHeaderCls = (0, classnames_1.default)((_h = {},
                        _h["".concat(prefix, "shell-task-header")] = true,
                        _h));
                    taskHeaderDom = (react_1.default.createElement("section", { key: "task-header", className: taskHeaderCls }, layout.taskHeader));
                }
                // 按照dom结构，innerArr 包括 LocalNavigation content Ancillary
                if (layout.LocalNavigation) {
                    var collapse = layout.LocalNavigation.props.collapse;
                    var trigger = layout.LocalNavigation.props.trigger;
                    if ('trigger' in layout.LocalNavigation.props) {
                        trigger =
                            (trigger &&
                                react_1.default.cloneElement(trigger, {
                                    onClick: _this.toggleLocalNavigation,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (react_1.default.createElement("div", { key: "local-nav-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "local-nav-trigger aside-trigger", onClick: _this.toggleLocalNavigation, onKeyDown: _this.toggleLocalNavigation }, collapse ? (react_1.default.createElement(icon_1.default, { size: "small", type: "arrow-right" })) : (react_1.default.createElement(icon_1.default, { size: "small", type: "arrow-left" }))));
                    }
                    var localNavCls = (0, classnames_1.default)(asideCls, (_j = {},
                        _j["".concat(prefix, "aside-localnavigation")] = true,
                        _j));
                    innerArr.push(react_1.default.createElement("aside", { key: "localnavigation", className: localNavCls, ref: _this.saveLocalNavRef }, react_1.default.cloneElement(layout.LocalNavigation, {}, [
                        react_1.default.createElement("div", { key: "wrapper", className: "".concat(prefix, "shell-content-wrapper") }, layout.LocalNavigation.props.children),
                        trigger,
                    ])));
                }
                if (layout.content) {
                    innerArr.push(react_1.default.createElement("section", { key: "submain", className: submainCls, ref: _this.saveSubmainRef }, layout.content));
                }
                if (layout.Ancillary) {
                    var collapse = layout.Ancillary.props.collapse;
                    var trigger = layout.Ancillary.props.trigger;
                    if ('trigger' in layout.Ancillary.props) {
                        trigger =
                            (trigger &&
                                react_1.default.cloneElement(trigger, {
                                    onClick: _this.toggleAncillary,
                                    'aria-expanded': !collapse,
                                })) ||
                                trigger;
                    }
                    else {
                        trigger = (react_1.default.createElement("div", { key: "ancillary-trigger", role: "button", tabIndex: 0, "aria-expanded": !collapse, "aria-label": "toggle", className: "ancillary-trigger aside-trigger", onClick: _this.toggleAncillary, onKeyDown: _this.toggleAncillary }, collapse ? (react_1.default.createElement(icon_1.default, { size: "small", type: "arrow-left" })) : (react_1.default.createElement(icon_1.default, { size: "small", type: "arrow-right" }))));
                    }
                    var ancillaryCls = (0, classnames_1.default)(asideCls, (_k = {},
                        _k["".concat(prefix, "aside-ancillary")] = true,
                        _k));
                    innerArr.push(react_1.default.createElement("aside", { key: "ancillary", className: ancillaryCls }, react_1.default.cloneElement(layout.Ancillary, {}, [
                        react_1.default.createElement("div", { key: "wrapper", className: "".concat(prefix, "shell-content-wrapper") }, layout.Ancillary.props.children),
                        trigger,
                    ])));
                }
                // 按照dom结构, arr 包括 header Navigation ToolDock 和 innerArr
                if (Object.keys(layout.header).length > 0) {
                    var dom_1 = (react_1.default.createElement("header", { key: "header", className: headerCls, ref: _this.saveHeaderRef },
                        layout.header.Branding,
                        layout.header.Navigation,
                        layout.header.Action));
                    if (fixedHeader && util_1.env.ieVersion) {
                        headerDom = react_1.default.createElement(affix_1.default, { style: { zIndex: 9 } }, dom_1);
                    }
                    else {
                        headerDom = dom_1;
                    }
                }
                layout.Navigation &&
                    contentArr.push(react_1.default.createElement("aside", { key: "navigation", className: navigationCls, ref: _this.saveNavRef }, react_1.default.cloneElement(layout.Navigation, {
                        className: (0, classnames_1.default)(asideCls, layout.Navigation.props.className),
                    })));
                // const contentArea = innerArr.length > 0
                //     ? <section key="main" className={mainCls}>{innerArr}</section>
                //     : layout.page;
                // contentArr.push(contentArea);
                contentArr = contentArr.concat(innerArr.length > 0
                    ? innerArr
                    : [
                        react_1.default.createElement("section", { key: "page", ref: _this.saveSubmainRef, className: submainCls }, layout.page),
                    ]);
                layout.ToolDock &&
                    contentArr.push(react_1.default.createElement("aside", { key: "tooldock", className: toolDockCls, ref: _this.saveToolDockRef }, react_1.default.cloneElement(layout.ToolDock, {
                        className: (0, classnames_1.default)(asideCls, layout.ToolDock.props.className),
                        key: 'tooldock',
                    })));
                var cls = (0, classnames_1.default)((_l = {},
                    _l["".concat(prefix, "shell")] = true,
                    _l["".concat(prefix, "shell-").concat(device)] = true,
                    _l["".concat(prefix, "shell-").concat(type)] = true,
                    _l[className] = !!className,
                    _l));
                if (componentName === 'Page') {
                    return react_1.default.createElement("section", { className: pageCls }, children);
                }
                _this.layout = layout;
                return (react_1.default.createElement("section", tslib_1.__assign({ className: cls }, others),
                    headerDom,
                    taskHeaderDom,
                    react_1.default.createElement("section", { className: mainCls }, contentArr)));
            };
            var deviceMap = (0, util_2.getCollapseMap)(props.device);
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
                var deviceMap = (0, util_2.getCollapseMap)(nextProps.device);
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
                var deviceMapBefore_1 = (0, util_2.getCollapseMap)(prevProps.device);
                var deviceMapAfter_1 = (0, util_2.getCollapseMap)(this.props.device);
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
        Shell.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']), type: prop_types_1.default.oneOf(['light', 'dark', 'brand']), fixedHeader: prop_types_1.default.bool });
        Shell.defaultProps = {
            prefix: 'next-',
            device: 'desktop',
            type: 'light',
            fixedHeader: false,
        };
        return Shell;
    }(react_1.Component));
    return (0, react_lifecycles_compat_1.polyfill)(Shell);
}
exports.default = ShellBase;
