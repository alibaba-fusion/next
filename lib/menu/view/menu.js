"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var sub_menu_1 = tslib_1.__importDefault(require("./sub-menu"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var util_1 = require("../../util");
var util_2 = require("./util");
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers, isNil = util_1.obj.isNil;
var noop = function () { };
var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var getIndicatorsItem = function (items, isPlaceholder, prefix, renderMore) {
    var _a;
    if (prefix === void 0) { prefix = ''; }
    var moreCls = (0, classnames_1.default)((_a = {},
        _a["".concat(prefix, "menu-more")] = true,
        _a));
    var style = {};
    // keep placehold to get width
    if (isPlaceholder) {
        style.visibility = 'hidden';
        style.display = 'inline-block';
        // indicators which not in use, just display: none
    }
    else if (items && items.length === 0) {
        style.display = 'none';
        style.visibility = 'unset';
    }
    if (renderMore && typeof renderMore === 'function') {
        var moreNode = renderMore(items);
        var renderMoreCls = (0, classnames_1.default)(moreCls, moreNode.props && moreNode.props.className);
        return react_1.default.isValidElement(moreNode)
            ? react_1.default.cloneElement(moreNode, {
                style: style,
                className: renderMoreCls,
            })
            : moreNode;
    }
    return (react_1.default.createElement(sub_menu_1.default, { label: "\u00B7\u00B7\u00B7", noIcon: true, className: moreCls, style: style }, items));
};
var addIndicators = function (_a) {
    var children = _a.children, lastVisibleIndex = _a.lastVisibleIndex, prefix = _a.prefix, renderMore = _a.renderMore;
    var arr = [];
    react_1.default.Children.forEach(children, function (child, index) {
        if (!child) {
            return;
        }
        var overflowedItems = [];
        // lastVisibleIndex 为 undefined 时，下面两个 if 条件始终为 false, 所以这里直接先行判断一下，避免类型错误
        if (typeof lastVisibleIndex !== 'undefined') {
            if (index > lastVisibleIndex) {
                // @ts-expect-error FIXME: child 可能不是 ReactElement, cloneElement 会报错
                child = react_1.default.cloneElement(child, {
                    // 别折叠不显示的 item，不占用真实的用户传入的 key
                    key: "more-".concat(index),
                    style: { display: 'none' },
                    className: "".concat(
                    // @ts-expect-error FIXME: should be `child.props.className`
                    (child && child.className) || '', " ").concat(MENUITEM_OVERFLOWED_CLASSNAME),
                });
            }
            if (index === lastVisibleIndex + 1) {
                overflowedItems = children
                    .slice(lastVisibleIndex + 1)
                    .map(function (c, i) {
                    return react_1.default.cloneElement(c, {
                        key: c.key || "more-".concat(index, "-").concat(i),
                    });
                });
                arr.push(getIndicatorsItem(overflowedItems, false, prefix, renderMore));
            }
        }
        arr.push(child);
    });
    arr.push(getIndicatorsItem([], true, prefix, renderMore));
    return arr;
};
var getNewChildren = function (_a) {
    var children = _a.children, root = _a.root, mode = _a.mode, lastVisibleIndex = _a.lastVisibleIndex, hozInLine = _a.hozInLine, prefix = _a.prefix, renderMore = _a.renderMore;
    var k2n = {};
    var p2n = {};
    var arr = hozInLine
        ? addIndicators({
            children: children,
            lastVisibleIndex: lastVisibleIndex,
            prefix: prefix,
            renderMore: renderMore,
        })
        : children;
    var loop = function (children, posPrefix, indexWrapper, inlineLevel) {
        if (indexWrapper === void 0) { indexWrapper = { index: 0 }; }
        if (inlineLevel === void 0) { inlineLevel = 1; }
        var keyArray = [];
        return react_1.Children.map(children, function (child) {
            if (child &&
                (typeof child.type === 'function' ||
                    // `React.forwardRef(render)` returns a forwarding
                    // object that includes `render` method, and the specific
                    // `child.type` will be an object instead of a class or
                    // function.
                    typeof child.type === 'object') &&
                'menuChildType' in child.type) {
                var newChild = void 0;
                var pos = void 0;
                var props = { root: root };
                if (['item', 'submenu', 'group'].indexOf(child.type.menuChildType) > -1) {
                    pos = "".concat(posPrefix, "-").concat(indexWrapper.index++);
                    var key = typeof child.key === 'string' ? child.key : pos;
                    // filter out duplicate keys
                    if (keyArray.indexOf(key) > -1) {
                        return;
                    }
                    keyArray.push(key);
                    var level = pos.split('-').length - 1;
                    k2n[key] = p2n[pos] = {
                        key: key,
                        pos: pos,
                        mode: child.props.mode,
                        type: child.type.menuChildType,
                        disabled: child.props.disabled,
                        label: child.props.label || child.props.children,
                    };
                    props.level = level;
                    props.inlineLevel = inlineLevel;
                    props._key = key;
                    props.groupIndent = child.type.menuChildType === 'group' ? 1 : 0;
                }
                // paddingLeft(or paddingRight in rtl) only make sense in inline mode
                // parent know children's inlineLevel
                // if parent's mode is popup, then children's inlineLevel must be 1;
                // else inlineLevel should add 1
                var childLevel = (child.props.mode || mode) === 'popup' ? 1 : inlineLevel + 1;
                switch (child.type.menuChildType) {
                    case 'submenu':
                        newChild = (0, react_1.cloneElement)(child, props, loop(child.props.children, pos, undefined, childLevel));
                        break;
                    case 'group':
                        newChild = (0, react_1.cloneElement)(child, props, loop(child.props.children, posPrefix, indexWrapper, props.level));
                        break;
                    case 'item':
                    case 'divider':
                        newChild = (0, react_1.cloneElement)(child, props);
                        break;
                    default:
                        newChild = child;
                        break;
                }
                return newChild;
            }
            return child;
        });
    };
    var newChildren = loop(arr, '0');
    return {
        newChildren: newChildren,
        _k2n: k2n,
        _p2n: p2n,
    };
};
var Menu = /** @class */ (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.getUpdateChildren = function () {
            var _a = _this.state, root = _a.root, lastVisibleIndex = _a.lastVisibleIndex;
            return getNewChildren(tslib_1.__assign({ root: root, lastVisibleIndex: lastVisibleIndex }, _this.props));
        };
        _this.menuContentRef = function (ref) {
            _this.menuContent = ref;
        };
        _this.menuHeaderRef = function (ref) {
            _this.menuHeader = ref;
        };
        _this.menuFooterRef = function (ref) {
            _this.menuFooter = ref;
        };
        var _a = _this.props, selectedKeys = _a.selectedKeys, defaultSelectedKeys = _a.defaultSelectedKeys, focusedKey = _a.focusedKey, focusable = _a.focusable, autoFocus = _a.autoFocus;
        var _b = getNewChildren(tslib_1.__assign({ root: _this }, _this.props)), newChildren = _b.newChildren, _k2n = _b._k2n, _p2n = _b._p2n;
        var tabbableKey = focusable ? (0, util_2.getFirstAvaliablelChildKey)('0', _p2n) : undefined;
        _this.state = {
            root: _this,
            lastVisibleIndex: undefined,
            newChildren: newChildren,
            _k2n: _k2n,
            _p2n: _p2n,
            tabbableKey: tabbableKey,
            openKeys: _this.getInitOpenKeys(props, _k2n),
            selectedKeys: (0, util_2.normalizeToArray)(selectedKeys || defaultSelectedKeys),
            focusedKey: !isNil(_this.props.focusedKey)
                ? focusedKey
                : focusable && autoFocus
                    ? tabbableKey
                    : null,
        };
        bindCtx(_this, [
            'handleOpen',
            'handleSelect',
            'handleItemClick',
            'handleItemKeyDown',
            'onBlur',
            'adjustChildrenWidth',
        ]);
        _this.popupNodes = [];
        return _this;
    }
    Menu.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        if ('openKeys' in nextProps) {
            state.openKeys = (0, util_2.normalizeToArray)(nextProps.openKeys);
            // 从展开状态变为收起状态，才需要清空openKeys
        }
        else if ('mode' in nextProps &&
            nextProps.mode === 'popup' &&
            prevState.lastMode === 'inline') {
            state.openKeys = [];
        }
        if ('selectedKeys' in nextProps) {
            state.selectedKeys = (0, util_2.normalizeToArray)(nextProps.selectedKeys);
        }
        if ('focusedKey' in nextProps) {
            state.focusedKey = nextProps.focusedKey;
        }
        state.lastMode = nextProps.mode;
        var _a = getNewChildren(tslib_1.__assign({ root: prevState.root, lastVisibleIndex: prevState.lastVisibleIndex }, nextProps)), newChildren = _a.newChildren, _k2n = _a._k2n, _p2n = _a._p2n;
        state.newChildren = newChildren;
        state._k2n = _k2n;
        state._p2n = _p2n;
        if (nextProps.focusable) {
            // @ts-expect-error undefined in object throw types error but ok at runtime
            if (prevState.tabbableKey in _k2n) {
                if (prevState.focusedKey) {
                    state.tabbableKey = prevState.focusedKey;
                }
            }
            else {
                state.tabbableKey = (0, util_2.getFirstAvaliablelChildKey)('0', _p2n);
            }
        }
        return state;
    };
    Menu.prototype.componentDidMount = function () {
        this.menuNode = (0, react_dom_1.findDOMNode)(this);
        this.adjustChildrenWidth();
        if (this.props.hozInLine) {
            util_1.events.on(window, 'resize', this.adjustChildrenWidth);
        }
    };
    Menu.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.lastVisibleIndex !== this.state.lastVisibleIndex ||
            react_1.default.Children.toArray(this.props.children).length !==
                react_1.default.Children.toArray(prevProps.children).length) {
            this.adjustChildrenWidth();
        }
    };
    Menu.prototype.componentWillUnmount = function () {
        util_1.events.off(window, 'resize', this.adjustChildrenWidth);
    };
    Menu.prototype.adjustChildrenWidth = function () {
        var _a = this.props, direction = _a.direction, prefix = _a.prefix, header = _a.header, footer = _a.footer, hozInLine = _a.hozInLine;
        if (direction !== 'hoz' || !hozInLine) {
            return;
        }
        if (!this.menuNode && !this.menuContent) {
            return;
        }
        var children = [], spaceWidth;
        if (header || footer) {
            children = this.menuContent.children;
            spaceWidth =
                (0, util_2.getWidth)(this.menuNode) - (0, util_2.getWidth)(this.menuHeader) - (0, util_2.getWidth)(this.menuFooter);
        }
        else {
            children = this.menuNode.children;
            spaceWidth = (0, util_2.getWidth)(this.menuNode);
        }
        if (children.length < 2) {
            return;
        }
        var currentSumWidth = 0, lastVisibleIndex = -1;
        var moreNode;
        var menuItemNodes = [].slice.call(children).filter(function (node) {
            if (node.className.split(' ').indexOf("".concat(prefix, "menu-more")) < 0) {
                return true;
            }
            else {
                moreNode = node;
            }
            return false;
        });
        var overflowedItems = menuItemNodes.filter(function (c) { return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0; });
        overflowedItems.forEach(function (c) {
            util_1.dom.setStyle(c, 'display', 'inline-block');
        });
        util_1.dom.setStyle(moreNode, 'display', 'inline-block');
        var moreWidth = (0, util_2.getWidth)(moreNode);
        this.menuItemSizes = menuItemNodes.map(function (c) { return (0, util_2.getWidth)(c); });
        var totalLen = this.menuItemSizes.length;
        overflowedItems.forEach(function (c) {
            util_1.dom.setStyle(c, 'display', 'none');
        });
        this.menuItemSizes.forEach(function (liWidth, i) {
            currentSumWidth += liWidth;
            if ((i >= totalLen - 1 && currentSumWidth <= spaceWidth) ||
                currentSumWidth + moreWidth <= spaceWidth) {
                lastVisibleIndex++;
            }
        });
        if (lastVisibleIndex >= totalLen - 1) {
            util_1.dom.setStyle(moreNode, 'display', 'none');
        }
        this.setState(tslib_1.__assign({ lastVisibleIndex: lastVisibleIndex }, this.getUpdateChildren()));
    };
    Menu.prototype.onBlur = function (e) {
        this.setState({
            focusedKey: undefined,
        });
        this.props.onBlur && this.props.onBlur(e);
    };
    Menu.prototype.getInitOpenKeys = function (props, _k2n) {
        var initOpenKeys;
        var openKeys = props.openKeys, defaultOpenKeys = props.defaultOpenKeys, defaultOpenAll = props.defaultOpenAll, mode = props.mode, openMode = props.openMode;
        if (openKeys) {
            initOpenKeys = openKeys;
        }
        else if (defaultOpenAll && mode === 'inline' && openMode === 'multiple') {
            initOpenKeys = Object.keys(_k2n).filter(function (key) {
                return _k2n[key].type === 'submenu';
            });
        }
        else {
            initOpenKeys = defaultOpenKeys;
        }
        return (0, util_2.normalizeToArray)(initOpenKeys);
    };
    Menu.prototype.handleOpen = function (key, open, triggerType, e) {
        var newOpenKeys;
        var _a = this.props, mode = _a.mode, openMode = _a.openMode;
        var _b = this.state, openKeys = _b.openKeys, _k2n = _b._k2n;
        var index = openKeys.indexOf(key);
        if (open && index === -1) {
            if (mode === 'inline') {
                if (openMode === 'single') {
                    newOpenKeys = openKeys.filter(function (k) { return _k2n[k] && !(0, util_2.isSibling)(_k2n[key].pos, _k2n[k].pos); });
                    newOpenKeys.push(key);
                }
                else {
                    newOpenKeys = openKeys.concat(key);
                }
            }
            else {
                newOpenKeys = openKeys.filter(function (k) {
                    return _k2n[k] && (0, util_2.isAncestor)(_k2n[key].pos, _k2n[k].pos);
                });
                newOpenKeys.push(key);
            }
        }
        else if (!open && index > -1) {
            if (mode === 'inline') {
                newOpenKeys = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(openKeys.slice(0, index)), false), tslib_1.__read(openKeys.slice(index + 1)), false);
            }
            else if (triggerType === 'docClick') {
                if (!this.popupNodes
                    .concat(this.menuNode)
                    .some(function (node) { return node.contains(e.target); })) {
                    newOpenKeys = [];
                }
            }
            else {
                newOpenKeys = openKeys.filter(function (k) {
                    return k !== key && _k2n[k] && !(0, util_2.isAncestor)(_k2n[k].pos, _k2n[key].pos);
                });
            }
        }
        if (newOpenKeys) {
            if (isNil(this.props.openKeys)) {
                this.setState(tslib_1.__assign({ openKeys: newOpenKeys }, this.getUpdateChildren()));
            }
            this.props.onOpen(newOpenKeys, {
                key: key,
                open: open,
            });
        }
    };
    Menu.prototype.getPath = function (key, _k2n, _p2n) {
        var keyPath = [];
        var labelPath = [];
        var pos = _k2n[key].pos;
        var nums = pos.split('-');
        for (var i = 1; i < nums.length - 1; i++) {
            var parentNums = nums.slice(0, i + 1);
            var parentPos = parentNums.join('-');
            var parent_1 = _p2n[parentPos];
            keyPath.push(parent_1.key);
            labelPath.push(parent_1.label);
        }
        return {
            keyPath: keyPath,
            labelPath: labelPath,
        };
    };
    Menu.prototype.handleSelect = function (key, select, menuItem) {
        var _a = this.state, _k2n = _a._k2n, _p2n = _a._p2n;
        var pos = _k2n[key].pos;
        var level = pos.split('-').length - 1;
        if (this.props.shallowSelect && level > 1) {
            return;
        }
        var newSelectedKeys;
        var selectMode = this.props.selectMode;
        var selectedKeys = this.state.selectedKeys;
        var index = selectedKeys.indexOf(key);
        if (select && index === -1) {
            if (selectMode === 'single') {
                newSelectedKeys = [key];
            }
            else if (selectMode === 'multiple') {
                newSelectedKeys = selectedKeys.concat(key);
            }
        }
        else if (!select && index > -1 && selectMode === 'multiple') {
            newSelectedKeys = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(selectedKeys.slice(0, index)), false), tslib_1.__read(selectedKeys.slice(index + 1)), false);
        }
        if (newSelectedKeys) {
            if (isNil(this.props.selectedKeys)) {
                this.setState({
                    selectedKeys: newSelectedKeys,
                });
            }
            this.props.onSelect(newSelectedKeys, menuItem, tslib_1.__assign({ key: key, select: select, label: _k2n[key].label }, this.getPath(key, _k2n, _p2n)));
        }
    };
    Menu.prototype.handleItemClick = function (key, item, e) {
        var _k2n = this.state._k2n;
        if (this.props.focusable) {
            if (isNil(this.props.focusedKey)) {
                this.setState({
                    focusedKey: key,
                });
            }
            this.props.onItemFocus(key, item, e);
        }
        if (item.props.type === 'item') {
            if (item.props.parentMode === 'popup' && this.state.openKeys.length) {
                if (isNil(this.props.openKeys)) {
                    this.setState({
                        openKeys: [],
                    });
                }
                this.props.onOpen([], {
                    key: this.state.openKeys.sort(function (prevKey, nextKey) {
                        return _k2n[nextKey].pos.split('-').length -
                            _k2n[prevKey].pos.split('-').length;
                    })[0],
                    open: false,
                });
            }
            this.props.onItemClick(key, item, e);
        }
    };
    Menu.prototype.getAvailableKey = function (pos, prev) {
        var _p2n = this.state._p2n;
        var ps = Object.keys(_p2n).filter(function (p) { return (0, util_2.isAvailablePos)(pos, p, _p2n); });
        if (ps.length > 1) {
            var index = ps.indexOf(pos);
            var targetIndex = void 0;
            if (prev) {
                targetIndex = index === 0 ? ps.length - 1 : index - 1;
            }
            else {
                targetIndex = index === ps.length - 1 ? 0 : index + 1;
            }
            return _p2n[ps[targetIndex]].key;
        }
        return null;
    };
    Menu.prototype.getParentKey = function (pos) {
        return this.state._p2n[pos.slice(0, pos.length - 2)].key;
    };
    Menu.prototype.handleItemKeyDown = function (key, type, item, e) {
        if ([
            util_1.KEYCODE.UP,
            util_1.KEYCODE.DOWN,
            util_1.KEYCODE.RIGHT,
            util_1.KEYCODE.LEFT,
            util_1.KEYCODE.ENTER,
            util_1.KEYCODE.ESC,
            util_1.KEYCODE.SPACE,
        ].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            e.stopPropagation();
        }
        var focusedKey = this.state.focusedKey;
        var _a = this.state, _p2n = _a._p2n, _k2n = _a._k2n;
        var direction = this.props.direction;
        var pos = _k2n[key].pos;
        var level = pos.split('-').length - 1;
        switch (e.keyCode) {
            case util_1.KEYCODE.UP: {
                var avaliableKey = this.getAvailableKey(pos, true);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.DOWN: {
                var avaliableKey = void 0;
                if (direction === 'hoz' && level === 1 && type === 'submenu') {
                    this.handleOpen(key, true);
                    avaliableKey = (0, util_2.getFirstAvaliablelChildKey)(pos, _p2n);
                }
                else {
                    avaliableKey = this.getAvailableKey(pos, false);
                }
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.RIGHT: {
                var avaliableKey = void 0;
                if (direction === 'hoz' && level === 1) {
                    avaliableKey = this.getAvailableKey(pos, false);
                }
                else if (type === 'submenu') {
                    this.handleOpen(key, true);
                    avaliableKey = (0, util_2.getFirstAvaliablelChildKey)(pos, _p2n);
                }
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.ENTER: {
                if (type === 'submenu') {
                    this.handleOpen(key, true);
                    var avaliableKey = (0, util_2.getFirstAvaliablelChildKey)(pos, _p2n);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                }
                break;
            }
            case util_1.KEYCODE.LEFT: {
                if (direction === 'hoz' && level === 1) {
                    var avaliableKey = this.getAvailableKey(pos, true);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                }
                else if (level > 1) {
                    var parentKey = this.getParentKey(pos);
                    this.handleOpen(parentKey, false);
                    focusedKey = parentKey;
                }
                break;
            }
            case util_1.KEYCODE.ESC:
                if (level > 1) {
                    var parentKey = this.getParentKey(pos);
                    this.handleOpen(parentKey, false);
                    focusedKey = parentKey;
                }
                break;
            case util_1.KEYCODE.TAB:
                focusedKey = null;
                break;
            default:
                break;
        }
        if (focusedKey !== this.state.focusedKey) {
            if (isNil(this.props.focusedKey)) {
                this.setState({
                    focusedKey: focusedKey,
                });
            }
            this.props.onItemKeyDown(focusedKey, item, e);
            // @ts-expect-error FIXME: onItemFocus 在组件里有两种不同的调用方式，这里先标记，后面修复
            this.props.onItemFocus(focusedKey, e);
        }
    };
    Menu.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, direction = _b.direction, hozAlign = _b.hozAlign, header = _b.header, footer = _b.footer, footerWrapperClassName = _b.footerWrapperClassName, embeddable = _b.embeddable, selectMode = _b.selectMode, hozInLine = _b.hozInLine, rtl = _b.rtl, flatenContent = _b.flatenContent;
        var newChildren = this.state.newChildren;
        var others = pickOthers(Menu.propTypes, this.props);
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu")] = true,
            _a["".concat(prefix, "ver")] = direction === 'ver',
            _a["".concat(prefix, "hoz")] = direction === 'hoz',
            _a["".concat(prefix, "menu-embeddable")] = embeddable,
            _a["".concat(prefix, "menu-nowrap")] = hozInLine,
            _a["".concat(prefix, "menu-selectable-").concat(selectMode)] = selectMode,
            _a), className);
        var role = direction === 'hoz' ? 'menubar' : 'menu';
        var ariaMultiselectable;
        if ('selectMode' in this.props) {
            role = 'listbox';
            ariaMultiselectable = !!(selectMode === 'multiple');
        }
        var headerElement = header ? (react_1.default.createElement("li", { className: "".concat(prefix, "menu-header"), ref: this.menuHeaderRef }, header)) : null;
        var itemsElement = !flatenContent && (header || footer) ? (react_1.default.createElement("ul", { className: "".concat(prefix, "menu-content"), ref: this.menuContentRef }, newChildren)) : (newChildren);
        var footerElement = footer ? (react_1.default.createElement("li", { className: (0, classnames_1.default)("".concat(prefix, "menu-footer"), footerWrapperClassName), ref: this.menuFooterRef }, footer)) : null;
        var shouldWrapItemsAndFooter = hozAlign === 'right' && !!header;
        if (rtl) {
            others.dir = 'rtl';
        }
        return (react_1.default.createElement("ul", tslib_1.__assign({ role: role, onBlur: this.onBlur, className: newClassName, 
            // @ts-expect-error FIXME: handleEnter 未定义，可移除
            onKeyDown: this.handleEnter, "aria-multiselectable": ariaMultiselectable }, others),
            headerElement,
            shouldWrapItemsAndFooter ? (react_1.default.createElement("div", { className: "".concat(prefix, "menu-hoz-right") },
                itemsElement,
                footerElement)) : null,
            !shouldWrapItemsAndFooter ? itemsElement : null,
            !shouldWrapItemsAndFooter ? footerElement : null));
    };
    Menu.isNextMenu = true;
    Menu.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, className: prop_types_1.default.string, children: prop_types_1.default.node, onItemClick: prop_types_1.default.func, openKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]), defaultOpenKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]), defaultOpenAll: prop_types_1.default.bool, onOpen: prop_types_1.default.func, mode: prop_types_1.default.oneOf(['inline', 'popup']), triggerType: prop_types_1.default.oneOf(['click', 'hover']), openMode: prop_types_1.default.oneOf(['single', 'multiple']), inlineIndent: prop_types_1.default.number, inlineArrowDirection: prop_types_1.default.oneOf(['down', 'right']), popupAutoWidth: prop_types_1.default.bool, popupAlign: prop_types_1.default.oneOf(['follow', 'outside']), popupProps: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]), popupClassName: prop_types_1.default.string, popupStyle: prop_types_1.default.object, selectedKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]), defaultSelectedKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]), onSelect: prop_types_1.default.func, selectMode: prop_types_1.default.oneOf(['single', 'multiple']), shallowSelect: prop_types_1.default.bool, hasSelectedIcon: prop_types_1.default.bool, labelToggleChecked: prop_types_1.default.bool, isSelectIconRight: prop_types_1.default.bool, direction: prop_types_1.default.oneOf(['ver', 'hoz']), hozAlign: prop_types_1.default.oneOf(['left', 'right']), hozInLine: prop_types_1.default.bool, renderMore: prop_types_1.default.func, header: prop_types_1.default.node, footer: prop_types_1.default.node, footerWrapperClassName: prop_types_1.default.string, autoFocus: prop_types_1.default.bool, focusedKey: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.object]), focusable: prop_types_1.default.bool, onItemFocus: prop_types_1.default.func, onBlur: prop_types_1.default.func, embeddable: prop_types_1.default.bool, onItemKeyDown: prop_types_1.default.func, expandAnimation: prop_types_1.default.bool, itemClassName: prop_types_1.default.string, icons: prop_types_1.default.object, flatenContent: prop_types_1.default.bool });
    Menu.defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultOpenKeys: [],
        defaultOpenAll: false,
        onOpen: noop,
        mode: 'inline',
        triggerType: 'click',
        openMode: 'multiple',
        inlineIndent: 20,
        inlineArrowDirection: 'down',
        popupAutoWidth: false,
        popupAlign: 'follow',
        popupProps: {},
        defaultSelectedKeys: [],
        onSelect: noop,
        shallowSelect: false,
        hasSelectedIcon: true,
        isSelectIconRight: false,
        labelToggleChecked: true,
        direction: 'ver',
        hozAlign: 'left',
        hozInLine: false,
        autoFocus: false,
        focusable: true,
        embeddable: false,
        onItemFocus: noop,
        onItemKeyDown: noop,
        onItemClick: noop,
        expandAnimation: true,
        icons: {},
    };
    Menu.displayName = 'Menu';
    return Menu;
}(react_1.Component));
exports.Menu = Menu;
exports.default = (0, react_lifecycles_compat_1.polyfill)(Menu);
