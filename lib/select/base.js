"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../util");
var menu_1 = require("../menu");
var overlay_1 = require("../overlay");
var input_1 = require("../input");
var zh_cn_1 = require("../locale/zh-cn");
var data_store_1 = require("./data-store");
var virtual_list_1 = require("../virtual-list");
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
        var mode = props.mode;
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
            // highlightKey应为String 多选初始化只赋值受控highlightKey/defaultHighlightKey
            highlightKey: 'highlightKey' in props
                ? props.highlightKey
                : props.mode === 'single'
                    ? props.value || props.defaultHighlightKey || props.defaultValue
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
     * @protected
     */
    Base.prototype.syncWidth = function () {
        var _this = this;
        var _a = this.props, popupStyle = _a.popupStyle, popupProps = _a.popupProps;
        if ((popupStyle && 'width' in popupStyle) || (popupProps && popupProps.style && 'width' in popupProps.style)) {
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
            this.resizeTimeout = setTimeout(function () {
                _this.syncWidth();
            }, 200);
        }
    };
    /**
     * Get structured dataSource, for cache
     * @protected
     * @param  {Object} [props=this.props]
     * @return {Array}
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
     * @protected
     * @param {boolean} visible
     * @param {string} type trigger type
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
        // 判断value/highlightKey解决受控后，默认高亮第一个元素问题。(当搜索值时，搜索后应执行默认选择第一个元素)
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
        // 当有搜索值且搜索条件与dataSource不匹配时(搜索条件不满足不会出现可选择的列表，所以高亮key应为null)
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
     * @param {Event} e click event
     */
    Base.prototype.handleMenuBodyClick = function (e) {
        if (!this.props.popupAutoFocus) {
            this.focusInput(e);
        }
    };
    /**
     * Toggle highlight MenuItem
     * @private
     * @param {number} dir -1: up, 1: down
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
        this.highlightTimer = setTimeout(function () {
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
     * @abstract
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
     * render popup children
     * @protected
     * @param {object} props
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
            selectedKeys = [].concat(value).map(function (n) { return (0, util_2.valueToSelectKey)(n); });
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
     * @protected
     * @param {Array} dataSource
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
                    key: item.value,
                    className: "".concat(prefix, "select-menu-item"),
                    disabled: item.disabled,
                };
                if ('title' in item) {
                    itemProps.title = item.title;
                }
                return react_1.default.createElement(MenuItem, tslib_1.__assign({}, itemProps), itemRender(item, searchKey));
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
    Base.prototype.focus = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.inputRef).focus.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
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
        var prefix = props.prefix, mode = props.mode, popupProps = props.popupProps, popupContainer = props.popupContainer, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupContent = props.popupContent, canCloseByTrigger = props.canCloseByTrigger, followTrigger = props.followTrigger, cache = props.cache, popupComponent = props.popupComponent, isPreview = props.isPreview, renderPreview = props.renderPreview, style = props.style, className = props.className, valueRender = props.valueRender;
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
                        valueDS = (0, util_2.getValueDataSource)(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS())
                            .valueDS;
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
                        return (react_1.default.createElement(input_1.default, { style: style, className: className, isPreview: isPreview, value: (Array.isArray(valueDS) ? valueDS : []).map(function (i) { return i.label; }).join(', ') }));
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
        /**
         * 选择器尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        // 当前值，用于受控模式
        value: prop_types_1.default.any, // to be override
        // 初始化的默认值
        defaultValue: prop_types_1.default.any, // to be override
        /**
         * 没有值的时候的占位符
         */
        placeholder: prop_types_1.default.string,
        /**
         * 下拉菜单是否与选择器对齐
         */
        autoWidth: prop_types_1.default.bool,
        /**
         * 自定义内联 label
         */
        label: prop_types_1.default.node,
        /**
         * 是否有清除按钮（单选模式有效）
         */
        hasClear: prop_types_1.default.bool,
        /**
         * 校验状态
         */
        state: prop_types_1.default.oneOf(['error', 'loading', 'success', 'warning']),
        /**
         * 是否只读，只读模式下可以展开弹层但不能选
         */
        readOnly: prop_types_1.default.bool,
        /**
         * 是否禁用选择器
         */
        disabled: prop_types_1.default.bool,
        /**
         * 当前弹层是否显示
         */
        visible: prop_types_1.default.bool,
        /**
         * 弹层初始化是否显示
         */
        defaultVisible: prop_types_1.default.bool,
        /**
         * 弹层显示或隐藏时触发的回调
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: prop_types_1.default.func,
        /**
         * 弹层挂载的容器节点
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 弹层的 className
         */
        popupClassName: prop_types_1.default.any,
        /**
         * 弹层的内联样式
         */
        popupStyle: prop_types_1.default.object,
        /**
         * 添加到弹层上的属性
         */
        popupProps: prop_types_1.default.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 自定义弹层的内容
         */
        popupContent: prop_types_1.default.node,
        /**
         * 添加到菜单上的属性
         * @version 1.18
         */
        menuProps: prop_types_1.default.object,
        /**
         * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
         */
        filterLocal: prop_types_1.default.bool,
        /**
         * 本地过滤方法，返回一个 Boolean 值确定是否保留
         * @param {String} key 搜索关键字
         * @param {Object} item 渲染节点的item
         * @return {Boolean} 是否匹配
         */
        filter: prop_types_1.default.func,
        /**
         * 默认高亮的 key，不要和 autoHighlightFirstItem 同时使用
         */
        defaultHighlightKey: prop_types_1.default.string,
        /**
         * 高亮 key，不要和 autoHighlightFirstItem 同时使用，用于受控模式
         */
        highlightKey: prop_types_1.default.string,
        /**
         * 键盘上下键切换菜单高亮选项的回调
         */
        onToggleHighlightItem: prop_types_1.default.func,
        /**
         * 自动高亮第一个元素
         */
        autoHighlightFirstItem: prop_types_1.default.bool,
        /**
         * 是否开启虚拟滚动模式
         */
        useVirtual: prop_types_1.default.bool,
        // 自定义类名
        className: prop_types_1.default.any,
        children: prop_types_1.default.any,
        dataSource: prop_types_1.default.array,
        itemRender: prop_types_1.default.func,
        mode: prop_types_1.default.string,
        notFoundContent: prop_types_1.default.node,
        locale: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        popupComponent: prop_types_1.default.any,
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
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
