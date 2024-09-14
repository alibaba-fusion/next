"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../util");
var menu_1 = tslib_1.__importDefault(require("../menu"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var input_1 = tslib_1.__importDefault(require("../input"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var data_store_1 = tslib_1.__importDefault(require("./data-store"));
var virtual_list_1 = tslib_1.__importDefault(require("../virtual-list"));
var util_2 = require("./util");
var Popup = overlay_1.default.Popup;
var MenuItem = menu_1.default.Item, MenuGroup = menu_1.default.Group;
var noop = util_1.func.noop, bindCtx = util_1.func.bindCtx, makeChain = util_1.func.makeChain;
function preventDefault(e) {
    e.preventDefault();
}
var Base = /** @class */ (function (_super) {
    tslib_1.__extends(Base, _super);
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
            _this.selectDOM = (0, react_dom_1.findDOMNode)(ref);
        };
        _this.saveInputRef = function (ref) {
            if (ref && ref.getInstance()) {
                _this.inputRef = ref.getInstance();
            }
        };
        _this.savePopupRef = function (ref) {
            _this.popupRef = ref;
        };
        _this.dataStore = new data_store_1.default({
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
        util_1.events.on(window, 'resize', this.handleResize);
    };
    Base.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
            this.syncWidth();
        }
    };
    Base.prototype.componentWillUnmount = function () {
        util_1.events.off(window, 'resize', this.handleResize);
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
        var width = util_1.dom.getStyle(this.selectDOM, 'width');
        if (width && this.width !== width) {
            this.width = width;
            if (this.shouldAutoWidth()) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(function () {
                    if (_this.popupRef) {
                        util_1.dom.setStyle(_this.popupRef, 'width', _this.width);
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
        if (react_1.Children.count(children)) {
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
        (_a = this.props).onChange.apply(_a, tslib_1.__spreadArray([value], tslib_1.__read(args), false));
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
                var menuNode = (0, react_dom_1.findDOMNode)(_this.menuRef);
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
        return react_1.default.createElement("div", null);
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
        if ((0, util_2.isNull)(value) || value.length === 0 || this.isAutoComplete) {
            selectedKeys = [];
        }
        else if ((0, util_2.isSingle)(mode)) {
            selectedKeys = [(0, util_2.valueToSelectKey)(value)];
        }
        else {
            selectedKeys = []
                .concat(value)
                .map(function (n) { return (0, util_2.valueToSelectKey)(n); });
        }
        var children = this.renderMenuItem(dataSource);
        var menuClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "select-menu")] = true,
            _a["".concat(prefix, "select-menu-empty")] = !children || !children.length,
            _a));
        if (!children || !children.length) {
            children = (react_1.default.createElement("span", { className: "".concat(prefix, "select-menu-empty-content") }, notFoundContent || locale.notFoundContent));
        }
        var customProps = tslib_1.__assign(tslib_1.__assign({}, menuProps), { children: children, role: 'listbox', selectedKeys: selectedKeys, focusedKey: highlightKey, focusable: false, selectMode: (0, util_2.isSingle)(mode) ? 'single' : 'multiple', onSelect: this.handleMenuSelect, onItemClick: this.handleItemClick, header: this.renderMenuHeader(), onClick: this.handleMenuBodyClick, onMouseDown: this.handleMouseDown, className: menuClassName });
        var menuStyle = this.shouldAutoWidth() ? { width: '100%' } : { minWidth: this.width };
        return useVirtual && children.length > 10 ? (react_1.default.createElement("div", tslib_1.__assign({ className: "".concat(prefix, "select-menu-wrapper"), style: tslib_1.__assign({ position: 'relative' }, menuStyle) }, util_1.obj.pickProps(['onScroll'], customProps)),
            react_1.default.createElement(virtual_list_1.default, { itemsRenderer: function (items, ref) {
                    return (react_1.default.createElement(menu_1.default, tslib_1.__assign({ ref: function (c) {
                            ref(c);
                            _this.menuRef = c;
                        }, flatenContent: true }, util_1.obj.pickOthers(['onScroll'], customProps)), items));
                } }, children))) : (react_1.default.createElement(menu_1.default, tslib_1.__assign({}, customProps, { style: menuStyle })));
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
                return (react_1.default.createElement(MenuGroup, { key: index, label: item.label }, _this.renderMenuItem(item.children)));
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
                return (react_1.default.createElement(MenuItem, tslib_1.__assign({ key: item.value }, itemProps), itemRender(item, searchKey)));
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
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "select-auto-complete-menu")] = !popupContent && this.isAutoComplete,
            _a["".concat(prefix, "select-").concat(mode, "-menu")] = !popupContent && !!mode,
            _a), popupClassName || popupProps.className);
        if (isPreview) {
            if (this.isAutoComplete) {
                return (react_1.default.createElement(input_1.default, { style: style, className: className, isPreview: isPreview, renderPreview: renderPreview, value: this.state.value }));
            }
            else {
                var value = this.state.value;
                var valueDS = this.state.value;
                if (!this.useDetailValue()) {
                    if (value === this.valueDataSource.value) {
                        valueDS = this.valueDataSource.valueDS;
                    }
                    else {
                        valueDS = (0, util_2.getValueDataSource)(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
                    }
                }
                if (typeof renderPreview === 'function') {
                    var previewCls = (0, classnames_1.default)((_b = {},
                        _b["".concat(prefix, "form-preview")] = true,
                        _b[className] = !!className,
                        _b));
                    return (react_1.default.createElement("div", { style: style, className: previewCls }, renderPreview(valueDS, this.props)));
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
                        return (react_1.default.createElement(input_1.default, { style: style, className: className, isPreview: isPreview, value: valueDS ? renderPreview_1(valueDS) : '' }));
                    }
                    else {
                        return (react_1.default.createElement(input_1.default, { style: style, className: className, isPreview: isPreview, value: (Array.isArray(valueDS) ? valueDS : [])
                                .map(function (i) { return i.label; })
                                .join(', ') }));
                    }
                }
            }
        }
        var _props = tslib_1.__assign(tslib_1.__assign({ triggerType: 'click', autoFocus: !!this.props.popupAutoFocus, cache: cache }, popupProps), { 
            //beforeOpen node not mount, afterOpen too slow.
            // from display:none to block, we may need to recompute width
            beforeOpen: makeChain(this.beforeOpen, popupProps.beforeOpen), beforeClose: makeChain(this.beforeClose, popupProps.beforeClose), afterClose: makeChain(this.afterClose, popupProps.afterClose), canCloseByTrigger: canCloseByTrigger, followTrigger: followTrigger, visible: this.state.visible, onVisibleChange: this.handleVisibleChange, shouldUpdatePosition: true, container: popupContainer || popupProps.container, className: cls, style: popupStyle || popupProps.style });
        if (popupProps.v2) {
            delete _props.shouldUpdatePosition;
        }
        var Tag = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement(Tag, tslib_1.__assign({}, _props, { trigger: this.renderSelect() }), popupContent ? (react_1.default.createElement("div", { className: "".concat(prefix, "select-popup-wrap"), style: this.shouldAutoWidth() ? { width: this.width } : {}, ref: this.savePopupRef }, popupContent)) : (react_1.default.createElement("div", { className: "".concat(prefix, "select-spacing-tb"), style: this.shouldAutoWidth() ? { width: this.width } : {}, ref: this.savePopupRef }, this.renderMenu()))));
    };
    Base.propTypes = {
        prefix: prop_types_1.default.string,
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        value: prop_types_1.default.any,
        defaultValue: prop_types_1.default.any,
        placeholder: prop_types_1.default.string,
        autoWidth: prop_types_1.default.bool,
        label: prop_types_1.default.node,
        hasClear: prop_types_1.default.bool,
        state: prop_types_1.default.oneOf(['error', 'loading', 'success', 'warning']),
        readOnly: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        visible: prop_types_1.default.bool,
        defaultVisible: prop_types_1.default.bool,
        onVisibleChange: prop_types_1.default.func,
        popupContainer: prop_types_1.default.any,
        popupClassName: prop_types_1.default.any,
        popupStyle: prop_types_1.default.object,
        popupProps: prop_types_1.default.object,
        followTrigger: prop_types_1.default.bool,
        popupContent: prop_types_1.default.node,
        menuProps: prop_types_1.default.object,
        filterLocal: prop_types_1.default.bool,
        filter: prop_types_1.default.func,
        defaultHighlightKey: prop_types_1.default.string,
        highlightKey: prop_types_1.default.string,
        onToggleHighlightItem: prop_types_1.default.func,
        autoHighlightFirstItem: prop_types_1.default.bool,
        useVirtual: prop_types_1.default.bool,
        className: prop_types_1.default.any,
        children: prop_types_1.default.any,
        dataSource: prop_types_1.default.array,
        itemRender: prop_types_1.default.func,
        mode: prop_types_1.default.string,
        notFoundContent: prop_types_1.default.node,
        locale: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        popupComponent: prop_types_1.default.any,
        isPreview: prop_types_1.default.bool,
        renderPreview: prop_types_1.default.func,
        showDataSourceChildren: prop_types_1.default.bool,
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
        filter: util_2.filter,
        itemRender: function (item) {
            return item.label || item.value;
        },
        locale: zh_cn_1.default.Select,
        autoHighlightFirstItem: true,
        showDataSourceChildren: true,
        defaultHighlightKey: null,
    };
    return Base;
}(react_1.default.Component));
exports.default = Base;
