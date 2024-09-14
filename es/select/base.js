import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Children, } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, dom, events, obj } from '../util';
import Menu from '../menu';
import Overlay from '../overlay';
import Input from '../input';
import zhCN from '../locale/zh-cn';
import DataStore from './data-store';
import VirtualList from '../virtual-list';
import { isSingle, filter, isNull, valueToSelectKey, getValueDataSource } from './util';
var Popup = Overlay.Popup;
var MenuItem = Menu.Item, MenuGroup = Menu.Group;
var noop = func.noop, bindCtx = func.bindCtx, makeChain = func.makeChain;
function preventDefault(e) {
    e.preventDefault();
}
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 防止 onBlur/onFocus 抖动
         */
        _this.handleMouseDown = function (e) {
            if (!_this.props.popupAutoFocus) {
                preventDefault(e);
            }
        };
        _this.saveSelectRef = function (ref) {
            _this.selectDOM = findDOMNode(ref);
        };
        _this.saveInputRef = function (ref) {
            if (ref && ref.getInstance()) {
                _this.inputRef = ref.getInstance();
            }
        };
        _this.savePopupRef = function (ref) {
            _this.popupRef = ref;
        };
        _this.dataStore = new DataStore({
            filter: props.filter,
            filterLocal: props.filterLocal,
            showDataSourceChildren: props.showDataSourceChildren,
        });
        var value = 'value' in props ? props.value : props.defaultValue;
        // 多选情况下做 value 数组订正
        if (props.mode !== 'single' && value && !Array.isArray(value)) {
            value = [value];
        }
        _this.state = {
            dataStore: _this.dataStore,
            value: value,
            visible: 'visible' in props ? props.visible : props.defaultVisible,
            dataSource: _this.setDataSource(_this.props),
            width: 100,
            // highlightKey 应为 String 多选初始化只赋值受控 highlightKey/defaultHighlightKey
            highlightKey: 'highlightKey' in props
                ? props.highlightKey
                : props.mode === 'single'
                    ? // FIXME 这里实现有些问题，假设 value 是 detailedValue 这里就是一个对象了
                        props.value ||
                            props.defaultHighlightKey ||
                            props.defaultValue
                    : props.defaultHighlightKey,
            srReader: '',
        };
        bindCtx(_this, [
            'handleMenuBodyClick',
            'handleVisibleChange',
            'focusInput',
            'beforeOpen',
            'beforeClose',
            'afterClose',
            'handleResize',
        ]);
        return _this;
    }
    Base.prototype.componentDidMount = function () {
        var _this = this;
        // overlay 还没有完成 mount，所以需要滞后同步宽度
        setTimeout(function () { return _this.syncWidth(); }, 0);
        events.on(window, 'resize', this.handleResize);
    };
    Base.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
            this.syncWidth();
        }
    };
    Base.prototype.componentWillUnmount = function () {
        events.off(window, 'resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
    };
    /**
     * Calculate and set width of popup menu
     */
    Base.prototype.syncWidth = function () {
        var _this = this;
        var _a = this.props, popupStyle = _a.popupStyle, popupProps = _a.popupProps;
        if ((popupStyle && 'width' in popupStyle) ||
            (popupProps && popupProps.style && 'width' in popupProps.style)) {
            return;
        }
        var width = dom.getStyle(this.selectDOM, 'width');
        if (width && this.width !== width) {
            this.width = width;
            if (this.shouldAutoWidth()) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(function () {
                    if (_this.popupRef) {
                        dom.setStyle(_this.popupRef, 'width', _this.width);
                        return;
                    }
                }, 0);
            }
        }
    };
    Base.prototype.handleResize = function () {
        var _this = this;
        clearTimeout(this.resizeTimeout);
        if (this.state.visible) {
            this.resizeTimeout = window.setTimeout(function () {
                _this.syncWidth();
            }, 200);
        }
    };
    /**
     * Get structured dataSource, for cache
     */
    Base.prototype.setDataSource = function (props) {
        var dataSource = props.dataSource, children = props.children;
        // children is higher priority then dataSource
        if (Children.count(children)) {
            return this.dataStore.updateByDS(children, true);
        }
        else if (Array.isArray(dataSource)) {
            return this.dataStore.updateByDS(dataSource, false);
        }
        return [];
    };
    /**
     * Set popup visible
     */
    Base.prototype.setVisible = function (visible, type) {
        // disabled 状态下只允许关闭不允许打开
        if ((this.props.disabled && visible) || this.state.visible === visible) {
            return;
        }
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }
        this.props.onVisibleChange(visible, type);
    };
    Base.prototype.setFirstHightLightKeyForMenu = function (searchValue) {
        // 判断 value/highlightKey 解决受控后，默认高亮第一个元素问题。(当搜索值时，搜索后应执行默认选择第一个元素)
        var highlightKey = this.state.highlightKey;
        if (!this.props.autoHighlightFirstItem) {
            return;
        }
        // 设置高亮 item key
        if (this.dataStore.getMenuDS().length &&
            this.dataStore.getEnableDS().length &&
            (!highlightKey || searchValue)) {
            var highlightKey_1 = "".concat(this.dataStore.getEnableDS()[0].value);
            this.setState({
                highlightKey: highlightKey_1,
            });
            this.props.onToggleHighlightItem(highlightKey_1, 'autoFirstItem');
        }
        // 当有搜索值且搜索条件与 dataSource 不匹配时 (搜索条件不满足不会出现可选择的列表，所以高亮 key 应为 null)
        if (searchValue && !this.dataStore.getEnableDS().length) {
            this.setState({
                highlightKey: null,
            });
            this.props.onToggleHighlightItem(null, 'highlightKeyToNull');
        }
    };
    Base.prototype.handleChange = function (value) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        (_a = this.props).onChange.apply(_a, __spreadArray([value], __read(args), false));
    };
    /**
     * Handle Menu body click
     * @param e - click event
     */
    Base.prototype.handleMenuBodyClick = function () {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }
    };
    /**
     * Toggle highlight MenuItem
     * @param dir - -1: up, 1: down
     */
    Base.prototype.toggleHighlightItem = function (dir) {
        if (!this.state.visible) {
            this.setVisible(true, 'enter');
            return;
        }
        var maxCount = this.dataStore.getEnableDS().length;
        // When there is no enabled item
        if (!maxCount) {
            return false;
        }
        var highlightKey = this.state.highlightKey;
        var highlightIndex = -1;
        // find previous highlight index
        highlightKey !== null &&
            this.dataStore.getEnableDS().some(function (item, index) {
                if ("".concat(item.value) === highlightKey) {
                    highlightIndex = index;
                }
                return highlightIndex > -1;
            });
        // toggle highlight index
        highlightIndex += dir;
        if (highlightIndex < 0) {
            highlightIndex = maxCount - 1;
        }
        if (highlightIndex >= maxCount) {
            highlightIndex = 0;
        }
        // get highlight key
        var highlightItem = this.dataStore.getEnableDS()[highlightIndex];
        highlightKey = highlightItem ? "".concat(highlightItem.value) : null;
        this.setState({ highlightKey: highlightKey, srReader: highlightItem.label });
        this.scrollMenuIntoView();
        return highlightItem;
    };
    // scroll into focus item
    Base.prototype.scrollMenuIntoView = function () {
        var _this = this;
        var prefix = this.props.prefix;
        clearTimeout(this.highlightTimer);
        this.highlightTimer = window.setTimeout(function () {
            try {
                var menuNode = findDOMNode(_this.menuRef);
                var itemNode = menuNode.querySelector(".".concat(prefix, "select-menu-item.").concat(prefix, "focused"));
                itemNode && itemNode.scrollIntoViewIfNeeded && itemNode.scrollIntoViewIfNeeded();
            }
            catch (ex) {
                // I don't care...
            }
        });
    };
    /**
     * render popup menu header
     */
    Base.prototype.renderMenuHeader = function () {
        var menuProps = this.props.menuProps;
        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }
        return null;
    };
    Base.prototype.handleSelect = function () { };
    /**
     * abstract
     */
    Base.prototype.handleMenuSelect = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
    };
    /**
     * abstract
     */
    Base.prototype.handleItemClick = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
    };
    /**
     * abstract
     */
    Base.prototype.useDetailValue = function () {
        return false;
    };
    /**
     * abstract
     */
    Base.prototype.handleVisibleChange = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
    };
    /**
     * abstract
     */
    Base.prototype.renderSelect = function () {
        return React.createElement("div", null);
    };
    /**
     * render popup children
     * @param props -
     */
    Base.prototype.renderMenu = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, mode = _b.mode, locale = _b.locale, notFoundContent = _b.notFoundContent, useVirtual = _b.useVirtual, menuProps = _b.menuProps;
        var _c = this.state, dataSource = _c.dataSource, highlightKey = _c.highlightKey;
        var value = this.state.value;
        var selectedKeys;
        if (isNull(value) || value.length === 0 || this.isAutoComplete) {
            selectedKeys = [];
        }
        else if (isSingle(mode)) {
            selectedKeys = [valueToSelectKey(value)];
        }
        else {
            selectedKeys = []
                .concat(value)
                .map(function (n) { return valueToSelectKey(n); });
        }
        var children = this.renderMenuItem(dataSource);
        var menuClassName = classNames((_a = {},
            _a["".concat(prefix, "select-menu")] = true,
            _a["".concat(prefix, "select-menu-empty")] = !children || !children.length,
            _a));
        if (!children || !children.length) {
            children = (React.createElement("span", { className: "".concat(prefix, "select-menu-empty-content") }, notFoundContent || locale.notFoundContent));
        }
        var customProps = __assign(__assign({}, menuProps), { children: children, role: 'listbox', selectedKeys: selectedKeys, focusedKey: highlightKey, focusable: false, selectMode: isSingle(mode) ? 'single' : 'multiple', onSelect: this.handleMenuSelect, onItemClick: this.handleItemClick, header: this.renderMenuHeader(), onClick: this.handleMenuBodyClick, onMouseDown: this.handleMouseDown, className: menuClassName });
        var menuStyle = this.shouldAutoWidth() ? { width: '100%' } : { minWidth: this.width };
        return useVirtual && children.length > 10 ? (React.createElement("div", __assign({ className: "".concat(prefix, "select-menu-wrapper"), style: __assign({ position: 'relative' }, menuStyle) }, obj.pickProps(['onScroll'], customProps)),
            React.createElement(VirtualList, { itemsRenderer: function (items, ref) {
                    return (React.createElement(Menu, __assign({ ref: function (c) {
                            ref(c);
                            _this.menuRef = c;
                        }, flatenContent: true }, obj.pickOthers(['onScroll'], customProps)), items));
                } }, children))) : (React.createElement(Menu, __assign({}, customProps, { style: menuStyle })));
    };
    /**
     * render menu item
     */
    Base.prototype.renderMenuItem = function (dataSource) {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, itemRender = _a.itemRender, showDataSourceChildren = _a.showDataSourceChildren;
        // If it has.
        var searchKey;
        if (this.isAutoComplete) {
            // In AutoComplete, value is the searchKey
            searchKey = this.state.value;
        }
        else {
            searchKey = this.state.searchValue;
        }
        return dataSource.map(function (item, index) {
            if (!item) {
                return null;
            }
            if (Array.isArray(item.children) && showDataSourceChildren) {
                return (React.createElement(MenuGroup, { key: index, label: item.label }, _this.renderMenuItem(item.children)));
            }
            else {
                var itemProps = {
                    role: 'option',
                    className: "".concat(prefix, "select-menu-item"),
                    disabled: item.disabled,
                };
                if ('title' in item) {
                    itemProps.title = item.title;
                }
                return (React.createElement(MenuItem, __assign({ key: item.value }, itemProps), itemRender(item, searchKey)));
            }
        });
    };
    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    Base.prototype.focusInput = function () {
        this.inputRef.focus(undefined, undefined, true);
    };
    Base.prototype.focus = function (start, end, preventScroll) {
        if (preventScroll === void 0) { preventScroll = false; }
        this.inputRef.focus(start, end, preventScroll);
    };
    Base.prototype.beforeOpen = function () {
        if (this.props.mode === 'single') {
            this.setFirstHightLightKeyForMenu();
        }
        this.syncWidth();
    };
    Base.prototype.beforeClose = function () { };
    Base.prototype.afterClose = function () { };
    Base.prototype.shouldAutoWidth = function () {
        if (this.props.popupComponent) {
            return false;
        }
        return this.props.autoWidth;
    };
    Base.prototype.render = function (props) {
        var _a, _b;
        var _this = this;
        var _c = props, prefix = _c.prefix, mode = _c.mode, popupProps = _c.popupProps, popupContainer = _c.popupContainer, popupClassName = _c.popupClassName, popupStyle = _c.popupStyle, popupContent = _c.popupContent, canCloseByTrigger = _c.canCloseByTrigger, followTrigger = _c.followTrigger, cache = _c.cache, popupComponent = _c.popupComponent, isPreview = _c.isPreview, renderPreview = _c.renderPreview, style = _c.style, className = _c.className, valueRender = _c.valueRender;
        var cls = classNames((_a = {},
            _a["".concat(prefix, "select-auto-complete-menu")] = !popupContent && this.isAutoComplete,
            _a["".concat(prefix, "select-").concat(mode, "-menu")] = !popupContent && !!mode,
            _a), popupClassName || popupProps.className);
        if (isPreview) {
            if (this.isAutoComplete) {
                return (React.createElement(Input, { style: style, className: className, isPreview: isPreview, renderPreview: renderPreview, value: this.state.value }));
            }
            else {
                var value = this.state.value;
                var valueDS = this.state.value;
                if (!this.useDetailValue()) {
                    if (value === this.valueDataSource.value) {
                        valueDS = this.valueDataSource.valueDS;
                    }
                    else {
                        valueDS = getValueDataSource(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
                    }
                }
                if (typeof renderPreview === 'function') {
                    var previewCls = classNames((_b = {},
                        _b["".concat(prefix, "form-preview")] = true,
                        _b[className] = !!className,
                        _b));
                    return (React.createElement("div", { style: style, className: previewCls }, renderPreview(valueDS, this.props)));
                }
                else {
                    var fillProps_1 = this.props.fillProps;
                    if (mode === 'single') {
                        var renderPreview_1 = function (valueDS) {
                            if (fillProps_1) {
                                return valueDS[fillProps_1];
                            }
                            else if (valueRender) {
                                return valueRender(valueDS, _this.props);
                            }
                            else {
                                return valueDS.label;
                            }
                        };
                        return (React.createElement(Input, { style: style, className: className, isPreview: isPreview, value: valueDS ? renderPreview_1(valueDS) : '' }));
                    }
                    else {
                        return (React.createElement(Input, { style: style, className: className, isPreview: isPreview, value: (Array.isArray(valueDS) ? valueDS : [])
                                .map(function (i) { return i.label; })
                                .join(', ') }));
                    }
                }
            }
        }
        var _props = __assign(__assign({ triggerType: 'click', autoFocus: !!this.props.popupAutoFocus, cache: cache }, popupProps), { 
            //beforeOpen node not mount, afterOpen too slow.
            // from display:none to block, we may need to recompute width
            beforeOpen: makeChain(this.beforeOpen, popupProps.beforeOpen), beforeClose: makeChain(this.beforeClose, popupProps.beforeClose), afterClose: makeChain(this.afterClose, popupProps.afterClose), canCloseByTrigger: canCloseByTrigger, followTrigger: followTrigger, visible: this.state.visible, onVisibleChange: this.handleVisibleChange, shouldUpdatePosition: true, container: popupContainer || popupProps.container, className: cls, style: popupStyle || popupProps.style });
        if (popupProps.v2) {
            delete _props.shouldUpdatePosition;
        }
        var Tag = popupComponent ? popupComponent : Popup;
        return (React.createElement(Tag, __assign({}, _props, { trigger: this.renderSelect() }), popupContent ? (React.createElement("div", { className: "".concat(prefix, "select-popup-wrap"), style: this.shouldAutoWidth() ? { width: this.width } : {}, ref: this.savePopupRef }, popupContent)) : (React.createElement("div", { className: "".concat(prefix, "select-spacing-tb"), style: this.shouldAutoWidth() ? { width: this.width } : {}, ref: this.savePopupRef }, this.renderMenu()))));
    };
    Base.propTypes = {
        prefix: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        value: PropTypes.any,
        defaultValue: PropTypes.any,
        placeholder: PropTypes.string,
        autoWidth: PropTypes.bool,
        label: PropTypes.node,
        hasClear: PropTypes.bool,
        state: PropTypes.oneOf(['error', 'loading', 'success', 'warning']),
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupContainer: PropTypes.any,
        popupClassName: PropTypes.any,
        popupStyle: PropTypes.object,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        popupContent: PropTypes.node,
        menuProps: PropTypes.object,
        filterLocal: PropTypes.bool,
        filter: PropTypes.func,
        defaultHighlightKey: PropTypes.string,
        highlightKey: PropTypes.string,
        onToggleHighlightItem: PropTypes.func,
        autoHighlightFirstItem: PropTypes.bool,
        useVirtual: PropTypes.bool,
        className: PropTypes.any,
        children: PropTypes.any,
        dataSource: PropTypes.array,
        itemRender: PropTypes.func,
        mode: PropTypes.string,
        notFoundContent: PropTypes.node,
        locale: PropTypes.object,
        rtl: PropTypes.bool,
        popupComponent: PropTypes.any,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        showDataSourceChildren: PropTypes.bool,
    };
    Base.defaultProps = {
        prefix: 'next-',
        size: 'medium',
        autoWidth: true,
        onChange: noop,
        onVisibleChange: noop,
        onToggleHighlightItem: noop,
        popupProps: {},
        filterLocal: true,
        filter: filter,
        itemRender: function (item) {
            return item.label || item.value;
        },
        locale: zhCN.Select,
        autoHighlightFirstItem: true,
        showDataSourceChildren: true,
        defaultHighlightKey: null,
    };
    return Base;
}(React.Component));
export default Base;
