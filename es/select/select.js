import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, obj, KEYCODE, env } from '../util';
import Tag from '../tag';
import Input from '../input';
import Icon from '../icon';
import Base from './base';
import { isNull, getValueDataSource, valueToSelectKey } from './util';

var bindCtx = func.bindCtx,
    noop = func.noop;

var isIE9 = env.ieVersion === 9;

/**
 * 无障碍化注意事项:
 * 1. Select 无搜索情况下，不应该让 Input 可focus，此时外层wrap必须可focus，并且需要相应focus事件让外边框发生变化
 */

// 自定义弹层：1. 不需要关心Menu的点击事件 2. 不需要关心dataSource变化

/**
 * Select
 */
var Select = (_temp = _class = function (_Base) {
    _inherits(Select, _Base);

    function Select(props) {
        _classCallCheck(this, Select);

        // @extend Base state
        var _this = _possibleConstructorReturn(this, _Base.call(this, props));

        _this.handleWrapClick = function (e) {
            e.preventDefault();
            _this.focusInput();
        };

        _this.handleArrowClick = function (e) {
            e.preventDefault();
            _this.focusInput();
            _this.setVisible(!_this.state.visible);
        };

        _this.handleClear = function (e) {
            e.stopPropagation();

            _this.handleChange(undefined, 'clear');
        };

        _extends(_this.state, {
            // 搜索的关键字
            searchValue: 'searchValue' in props ? props.searchValue : ''
        });

        // For cache choosen value
        _this.valueDataSource = {
            valueDS: [], // [{value,label}]
            mapValueDS: {} // {value: {value,label}}
        };

        bindCtx(_this, ['handleMenuSelect', 'handleItemClick', 'handleSearch', 'handleSearchKeyDown', 'handleSelectAll']);
        return _this;
    }

    Select.prototype.componentWillMount = function componentWillMount() {
        this.dataStore.setOptions({
            key: this.state.searchValue,
            addonKey: this.props.mode === 'tag' // tag 模式手动输入的数据
        });

        _Base.prototype.componentWillMount.call(this);

        // 根据value和计算后的dataSource，更新value对应的详细数据valueDataSource
        if (typeof this.state.value !== 'undefined') {
            this.valueDataSource = getValueDataSource(this.state.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }

        if (isIE9) {
            this.ie9Hack();
        }
    };

    Select.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('searchValue' in nextProps) {
            this.dataStore.setOptions({ key: nextProps.searchValue });
            this.setState({
                searchValue: typeof nextProps.searchValue === 'undefined' ? '' : nextProps.searchValue
            });
        }
        if (this.props.mode !== nextProps.mode) {
            this.dataStore.setOptions({
                addonKey: nextProps.mode === 'tag'
            });
        }

        _Base.prototype.componentWillReceiveProps.call(this, nextProps);

        if ('value' in nextProps) {
            // 更新valueDataSource值
            this.valueDataSource = getValueDataSource(nextProps.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }
    };

    Select.prototype.componentDidMount = function componentDidMount() {
        if (isIE9) {
            this.ie9Hack();
        }
        _Base.prototype.componentDidMount.call(this);
    };

    // ie9 下 table-cell 布局不支持宽度超出隐藏


    Select.prototype.ie9Hack = function ie9Hack() {
        try {
            var width = this.selectDOM.currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto'
            });
        } catch (e) {
            //
        }
    };

    Select.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var props = this.props;
        // 随着输入自动伸展
        if (/tag|multiple/.test(props.mode) && prevState.searchValue !== this.state.searchValue) {
            this.syncWidth();
        } else {
            return _Base.prototype.componentDidUpdate.call(this, prevProps, prevState);
        }
    };

    Select.prototype.useDetailValue = function useDetailValue() {
        var _props = this.props,
            popupContent = _props.popupContent,
            useDetailValue = _props.useDetailValue,
            dataSource = _props.dataSource;

        return useDetailValue || popupContent && !dataSource;
    };

    Select.prototype.hasSearch = function hasSearch() {
        var _props2 = this.props,
            showSearch = _props2.showSearch,
            mode = _props2.mode;

        return showSearch || mode === 'tag';
    };

    /**
     * Menu.Item onSelect
     * @private
     * @param  {Array<string>} keys
     */


    Select.prototype.handleMenuSelect = function handleMenuSelect(keys) {
        var _props3 = this.props,
            mode = _props3.mode,
            readOnly = _props3.readOnly,
            disabled = _props3.disabled;


        if (readOnly || disabled) {
            return false;
        }

        var isSingle = mode === 'single';

        if (isSingle) {
            // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        } else {
            // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick');
        }
    };

    Select.prototype.handleItemClick = function handleItemClick() {
        this.focusInput();
    };

    /**
     * 单选模式
     */


    Select.prototype.handleSingleSelect = function handleSingleSelect(key, triggerType) {
        var itemObj = getValueDataSource(key, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());

        var cacheValue = this.props.cacheValue;


        this.setVisible(false, triggerType);

        // 更新缓存map
        if (cacheValue) {
            this.valueDataSource = itemObj;
        }

        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType);
        }

        this.setState({
            highlightKey: key
        });

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    };

    /**
     * 多选模式 multiple/tag
     */


    Select.prototype.handleMultipleSelect = function handleMultipleSelect(keys, triggerType) {
        var _this2 = this;

        var itemObj = getValueDataSource(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());

        var _props4 = this.props,
            cacheValue = _props4.cacheValue,
            mode = _props4.mode,
            hiddenSelected = _props4.hiddenSelected;

        // 非受控更新缓存map

        if (cacheValue || mode === 'tag') {
            this.valueDataSource = itemObj;
        }

        if (hiddenSelected) {
            this.setVisible(false, triggerType);
        }

        if (this.useDetailValue()) {
            this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType);
        }

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(function () {
                _this2.handleSearchClear(triggerType);
            });
        }
    };

    Select.prototype.handleSearchValue = function handleSearchValue(value) {
        if (this.state.searchValue === value) {
            return;
        }

        var filterLocal = this.props.filterLocal;


        if (filterLocal) {
            if (!('searchValue' in this.props)) {
                this.setState({
                    searchValue: value,
                    dataSource: this.dataStore.updateByKey(value)
                });
                this.setFirstHightLightKeyForMenu();
            }
        } else if (!('searchValue' in this.props)) {
            this.setState({
                searchValue: value
            });
        }
    };

    /**
     * Handle search input change event
     * @param {Event} e change Event
     */


    Select.prototype.handleSearch = function handleSearch(value) {
        this.handleSearchValue(value);

        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }

        this.props.onSearch(value);
    };

    Select.prototype.handleSearchClear = function handleSearchClear(triggerType) {
        this.handleSearchValue('');
        this.props.onSearchClear(triggerType);
    };

    // 搜索框 keyDown 事件


    Select.prototype.handleSearchKeyDown = function handleSearchKeyDown(e) {
        var _props5 = this.props,
            popupContent = _props5.popupContent,
            onKeyDown = _props5.onKeyDown,
            showSearch = _props5.showSearch,
            mode = _props5.mode,
            hasClear = _props5.hasClear,
            onToggleHighlightItem = _props5.onToggleHighlightItem;


        if (popupContent) {
            return onKeyDown(e);
        }

        var proxy = 'search';
        var hasSearch = this.hasSearch();

        switch (e.keyCode) {
            case KEYCODE.UP:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(-1, e), 'up');
                break;
            case KEYCODE.DOWN:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(1, e), 'down');
                break;
            case KEYCODE.ENTER:
                e.preventDefault();
                this.chooseHighlightItem(proxy, e);
                break;
            case KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'keyDown');
                break;
            case KEYCODE.SPACE:
                e.stopPropagation();
                !hasSearch && e.preventDefault();
                break;
            case KEYCODE.BACKSPACE:
                if (mode === 'multiple' && showSearch || mode === 'tag') {
                    // 在多选并且有搜索的情况下，删除最后一个 tag
                    this.handleDeleteTag(e);
                } else if (mode === 'single' && hasClear && !this.state.visible) {
                    // 单选、非展开、并且可清除的情况，允许按删除键清除
                    this.handleClear(e);
                }
                break;
            default:
                break;
        }

        onKeyDown(e);
    };

    // 回车 选择高亮的 item


    Select.prototype.chooseHighlightItem = function chooseHighlightItem(proxy, e) {
        var prevVisible = this.state.visible;
        if (!prevVisible) {
            return false;
        }

        var highlightKey = this.state.highlightKey;
        var mode = this.props.mode;


        if (mode === 'single') {
            this.handleSingleSelect(highlightKey, 'enter');
        } else {
            var value = this.state.value || [];
            var keys = value.map(function (v) {
                return valueToSelectKey(v);
            });
            var index = keys.map(function (v) {
                return '' + v;
            }).indexOf(highlightKey);
            if (index > -1) {
                // 反选
                keys.splice(index, 1);
            } else {
                // 勾选
                keys.push(highlightKey);
            }
            this.handleMultipleSelect(keys, 'enter');
            // 阻止事件冒泡到最外层，让Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    };

    /**
     * Handle Tag close event
     * @param  {Object} item
     * @return {Boolean} false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */


    Select.prototype.handleTagClose = function handleTagClose(item) {

        if (this.useDetailValue()) {
            var value = this.state.value.filter(function (v) {
                return item.value !== v.value;
            });

            this.handleChange(value, 'tag');
        } else {
            // filter out current item, and then call handleMenuSelect
            var _value = this.state.value.filter(function (v) {
                return item.value !== v;
            });

            this.handleMultipleSelect(_value, 'tag');
        }

        this.props.onRemove(item);

        // prevent tag close
        return false;
    };

    /**
     * Handle BACKSPACE key event
     * @param {Event} e keyDown event
     * ---
     * It MUST be multiple mode
     */


    Select.prototype.handleDeleteTag = function handleDeleteTag(e) {
        var value = this.state.value;
        var searchValue = this.state.searchValue;

        if (searchValue || !value || !value.length) {
            return false;
        }

        e.preventDefault();

        var nextValues = value.slice(0, value.length - 1);
        // 手动调用 handleMenuSelect 时直接传入原生的 value，可以减少 toString 的操作

        if (this.useDetailValue()) {
            this.handleChange(nextValues, 'tag');
        } else {
            this.handleMultipleSelect(nextValues, 'tag');
        }
    };

    /**
     * Handle SelectAll span click event
     * @param {Event} e click event
     */


    Select.prototype.handleSelectAll = function handleSelectAll(e) {
        e && e.preventDefault();
        var nextValues = this.dataStore.getEnableDS().map(function (item) {
            return item.value;
        });
        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    };

    Select.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        this.setVisible(visible, type);
    };

    Select.prototype.afterClose = function afterClose() {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    };

    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * @param {object} props
     */


    Select.prototype.renderValues = function renderValues() {
        var _this3 = this;

        var _props6 = this.props,
            mode = _props6.mode,
            size = _props6.size,
            valueRender = _props6.valueRender,
            fillProps = _props6.fillProps,
            disabled = _props6.disabled;

        var value = this.state.value;

        if (isNull(value)) {
            return null;
        }

        // get detail value
        if (!this.useDetailValue()) {
            value = this.valueDataSource.valueDS;
        }

        if (mode === 'single') {
            if (!value) {
                return null;
            }

            var retvalue = fillProps ? value[fillProps] : valueRender(value);
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;
        } else if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }
            return value.map(function (v) {
                if (!v) {
                    return null;
                }

                var labelNode = fillProps ? v[fillProps] : valueRender(v);
                return React.createElement(
                    Tag,
                    { key: v.value,
                        disabled: disabled || v.disabled,
                        type: 'primary',
                        size: size === 'large' ? 'medium' : 'small',
                        animation: false,
                        onClose: _this3.handleTagClose.bind(_this3, v),
                        closable: true },
                    labelNode
                );
            });
        }

        return null;
    };
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     */


    Select.prototype.hasClear = function hasClear() {
        var _props7 = this.props,
            hasClear = _props7.hasClear,
            readOnly = _props7.readOnly,
            disabled = _props7.disabled,
            mode = _props7.mode,
            showSearch = _props7.showSearch;
        var _state = this.state,
            value = _state.value,
            visible = _state.visible;


        return typeof value !== 'undefined' && hasClear && !readOnly && !disabled && mode === 'single' && !(showSearch && visible);
    };

    /**
     * render arrow
     * @param {object} props
     * @param {function} [clickHandler]
     */


    Select.prototype.renderExtraNode = function renderExtraNode() {
        var _props8 = this.props,
            hasArrow = _props8.hasArrow,
            hasClear = _props8.hasClear,
            prefix = _props8.prefix;


        var ret = [];

        if (hasArrow) {
            ret.push(React.createElement(
                'span',
                { key: 'arrow', onClick: this.handleArrowClick, className: prefix + 'select-arrow' },
                React.createElement(Icon, {
                    type: 'arrow-down' })
            ));
        }

        // 不能使用 this.hasClear() 方法判断，要保证 clear 按钮 dom 结构一直存在，防止其不能成为弹层的安全节点，导致弹层没有必要的显示或隐藏
        if (hasClear) {
            ret.push(React.createElement(
                'span',
                { key: 'clear', onClick: this.handleClear, className: prefix + 'select-clear' },
                React.createElement(Icon, {
                    type: 'delete-filling' })
            ));
        }

        return ret;
    };

    /**
     * 选择器
     * @override
     * @param {object} props
     */


    Select.prototype.renderSelect = function renderSelect() {
        var _classNames,
            _this4 = this;

        var _props9 = this.props,
            prefix = _props9.prefix,
            showSearch = _props9.showSearch,
            placeholder = _props9.placeholder,
            mode = _props9.mode,
            size = _props9.size,
            className = _props9.className,
            style = _props9.style,
            readOnly = _props9.readOnly,
            disabled = _props9.disabled,
            hasBorder = _props9.hasBorder,
            label = _props9.label,
            locale = _props9.locale,
            state = _props9.state,
            onBlur = _props9.onBlur,
            onFocus = _props9.onFocus;

        var others = obj.pickOthers(Select.propTypes, this.props);
        var othersData = obj.pickAttrsWith(others, 'data-');

        var visible = this.state.visible;
        var isSingle = mode === 'single';
        var hasSearch = this.hasSearch();
        var valueNodes = this.renderValues();

        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
        if (valueNodes && valueNodes.length) {
            _placeholder = null;
        }

        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }

        // 下拉箭头
        var extra = this.renderExtraNode();

        var triggerClazz = classNames([prefix + 'select', prefix + 'select-trigger', prefix + 'select-' + mode, '' + prefix + size, className], (_classNames = {}, _classNames[prefix + 'active'] = visible, _classNames[prefix + 'inactive'] = !visible, _classNames[prefix + 'no-search'] = !hasSearch, _classNames[prefix + 'has-search'] = hasSearch, _classNames[prefix + 'select-in-ie'] = isIE9, _classNames[prefix + 'select-in-ie-fixwidth'] = this.state.fixWidth, _classNames[prefix + 'has-clear'] = this.hasClear(), _classNames));

        var valuetext = this.valueDataSource.valueDS ? this.valueDataSource.valueDS.label : '';

        return React.createElement(
            'span',
            _extends({}, othersData, {
                className: triggerClazz,
                style: style,
                ref: this.saveSelectRef,
                onClick: this.handleWrapClick,
                onMouseDown: this.handleWrapClick
            }),
            React.createElement(Input, _extends({
                'aria-valuetext': valuetext
            }, obj.pickOthers(othersData, others), {
                role: 'combobox',
                tabIndex: 0,
                'aria-expanded': this.state.visible,
                'aria-disabled': disabled,
                state: state,
                label: label,
                extra: extra,
                value: this.state.searchValue,
                size: size,
                readOnly: !this.hasSearch() || readOnly,
                disabled: disabled,
                placeholder: _placeholder,
                hasBorder: hasBorder,
                hasClear: false,
                htmlSize: '1',
                inputRender: function inputRender(inputEl) {
                    return _this4.renderSearchInput(valueNodes, _placeholder, inputEl);
                },
                onChange: this.handleSearch,
                onKeyDown: this.handleSearchKeyDown,
                onFocus: onFocus,
                onBlur: onBlur,
                className: prefix + 'select-inner',
                ref: this.saveInputRef }))
        );
    };

    Select.prototype.renderSearchInput = function renderSearchInput(valueNodes, placeholder, inputEl) {
        var _classNames2;

        var _props10 = this.props,
            prefix = _props10.prefix,
            mode = _props10.mode;

        var isSingle = mode === 'single';

        var mirrorText = this.state.searchValue;

        var cls = classNames((_classNames2 = {}, _classNames2[prefix + 'select-values'] = true, _classNames2[prefix + 'input-text-field'] = true, _classNames2));

        return React.createElement(
            'span',
            { className: cls },
            isSingle && valueNodes ? React.createElement(
                'em',
                null,
                valueNodes
            ) : valueNodes,
            React.createElement(
                'span',
                { className: prefix + 'select-trigger-search' },
                inputEl,
                React.createElement(
                    'span',
                    { 'aria-hidden': true },
                    mirrorText || placeholder,
                    '\xA0'
                )
            )
        );
    };

    /**
     * 渲染弹层的 header 内容
     * @override
     * @param {object} props
     */


    Select.prototype.renderMenuHeader = function renderMenuHeader() {
        var _props11 = this.props,
            prefix = _props11.prefix,
            hasSelectAll = _props11.hasSelectAll,
            mode = _props11.mode;


        var sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }

        var text = typeof hasSelectAll === 'boolean' ? 'Select All' : hasSelectAll;

        return React.createElement(
            'div',
            { key: 'all', onClick: this.handleSelectAll, className: prefix + 'select-all' },
            React.createElement(
                'span',
                null,
                text
            )
        );
    };

    Select.prototype.render = function render() {
        var mode = this.props.mode;

        var props = _extends({}, this.props);
        if (this.hasSearch()) {
            props.canCloseByTrigger = false;
        }
        if (mode === 'single') {
            props.cache = true;
        }
        return _Base.prototype.render.call(this, props);
    };

    return Select;
}(Base), _class.propTypes = _extends({}, Base.propTypes, {
    /**
     * 选择器模式
     */
    mode: PropTypes.oneOf(['single', 'multiple', 'tag']),
    /**
     * 当前值，用于受控模式
     */
    value: PropTypes.any,
    /**
     * 初始的默认值
     */
    defaultValue: PropTypes.any,
    /**
     * 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)
     */
    dataSource: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.any,
        disabled: PropTypes.bool,
        children: PropTypes.array
    }), PropTypes.bool, PropTypes.number, PropTypes.string])),
    /**
     * 是否有边框
     */
    hasBorder: PropTypes.bool,
    /**
     * 是否有下拉箭头
     */
    hasArrow: PropTypes.bool,
    /**
     * 展开后是否能搜索（tag 模式下固定为true）
     */
    showSearch: PropTypes.bool,
    /**
     * 当搜索框值变化时回调
     * @param {String} value 数据
     */
    onSearch: PropTypes.func,
    /**
     * 当搜索框值被清空时候的回调
     * @param {String} actionType 触发的方式, 'select'(选择清空), 'popupClose'(弹窗关闭清空)
     */
    onSearchClear: PropTypes.func,
    /**
     * 多选模式下是否有全选功能
     */
    hasSelectAll: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * 填充到选择框里的值的 key
     */
    fillProps: PropTypes.string,
    /**
     * onChange返回的value使用dataSource的对象
     */
    useDetailValue: PropTypes.bool,
    /**
     * dataSource变化的时是否保留已选的内容
     */
    cacheValue: PropTypes.bool,
    /**
     * 渲染 Select 展现内容的方法
     * @param {Object} item 渲染节点的item
     * @return {ReactNode} 展现内容
     * @default item => item.label \|\| item.value
     */
    valueRender: PropTypes.func,
    /**
     * 渲染 MenuItem 内容的方法
     * @param {Object} item 渲染节点的item
     * @param {String} searchValue 搜索关键字（如果开启搜索）
     * @return {ReactNode} item node
     */
    itemRender: PropTypes.func,
    /**
     * 弹层内容为空的文案
     */
    notFoundContent: PropTypes.node,
    style: PropTypes.object,
    /**
     * 受控搜索值，一般不需要设置
     * @type {[type]}
     */
    searchValue: PropTypes.string,
    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected: PropTypes.bool,
    /**
     * tag 删除回调
     * @param {object} item 渲染节点的item
     */
    onRemove: PropTypes.func,
    /**
     * 焦点事件
     */
    onFocus: PropTypes.func,
    /**
     * 失去焦点事件
     */
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func
}), _class.defaultProps = _extends({}, Base.defaultProps, {
    mode: 'single',
    showSearch: false,
    cacheValue: true,
    onSearch: noop,
    onSearchClear: noop,
    hasArrow: true,
    onRemove: noop,
    valueRender: function valueRender(item) {
        return item.label || item.value;
    },
    onKeyDown: noop,
    onFocus: noop,
    onBlur: noop
}), _class.displayName = 'Select', _temp);


export default Select;