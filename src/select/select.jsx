import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, obj, KEYCODE, env } from '../util';
import Tag from '../tag';
import Input from '../input';
import Icon from '../icon';
import Base from './base';
import { isNull, getValueDataSource, valueToSelectKey } from './util';

const { bindCtx, noop } = func;
const isIE9 = env.ieVersion === 9;


/**
 * 无障碍化注意事项:
 * 1. Select 无搜索情况下，不应该让 Input 可focus，此时外层wrap必须可focus，并且需要相应focus事件让外边框发生变化
 */

// 自定义弹层：1. 不需要关心Menu的点击事件 2. 不需要关心dataSource变化

/**
 * Select
 */
class Select extends Base {
    static propTypes = {
        ...Base.propTypes,
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
         * Select发生改变时触发的回调
         * @param {*} value 选中的值
         * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'tag'
         * @param {*} item 选中的值的对象数据 (useDetailValue=false有效)
         */
        onChange: PropTypes.func,
        /**
         * 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)
         */
        dataSource: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.any,
                label: PropTypes.any,
                disabled: PropTypes.bool,
                children: PropTypes.array
            }),
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ])),
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
        hasSelectAll: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        /**
         * 填充到选择框里的值的 key
         */
        fillProps: PropTypes.string,
        /**
         * onChange 返回的 value 使用 dataSource 的对象
         */
        useDetailValue: PropTypes.bool,
        /**
         * dataSource 变化的时是否保留已选的内容
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
        onKeyDown: PropTypes.func,
    };

    static defaultProps = {
        ...Base.defaultProps,
        mode: 'single',
        showSearch: false,
        cacheValue: true,
        onSearch: noop,
        onSearchClear: noop,
        hasArrow: true,
        onRemove: noop,
        valueRender: (item) => {
            return item.label || item.value;
        },
        onKeyDown: noop,
        onFocus: noop,
        onBlur: noop,
    };

    static displayName = 'Select';

    constructor(props) {
        super(props);

        // @extend Base state
        Object.assign(this.state, {
            // search keyword
            searchValue: 'searchValue' in props ? props.searchValue : '',
        });

        // For cache choosen value
        this.valueDataSource = {
            valueDS: [],    // [{value,label}]
            mapValueDS: {}  // {value: {value,label}}
        };

        bindCtx(this, [
            'handleMenuSelect',
            'handleItemClick',
            'handleSearch',
            'handleSearchKeyDown',
            'handleSelectAll',
        ]);
    }

    componentWillMount() {
        this.dataStore.setOptions({
            key: this.state.searchValue,
            addonKey: this.props.mode === 'tag' // tag 模式手动输入的数据
        });

        super.componentWillMount();

        // 根据value和计算后的dataSource，更新value对应的详细数据valueDataSource
        if (typeof this.state.value !== 'undefined') {
            this.valueDataSource = getValueDataSource(this.state.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }

        if (isIE9) {
            this.ie9Hack();
        }
    }

    componentWillReceiveProps(nextProps) {
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

        super.componentWillReceiveProps(nextProps);

        if ('value' in nextProps) {
            // under controll
            this.valueDataSource = getValueDataSource(nextProps.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        } else if ('defaultValue' in nextProps &&
            nextProps.defaultValue === this.valueDataSource.value &&
            (nextProps.children !== this.props.children || nextProps.dataSource !== this.props.dataSource)) {
            //has defaultValue and value not changed and dataSource changed
            this.valueDataSource = getValueDataSource(nextProps.defaultValue, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }

    }

    componentDidMount() {
        if (isIE9) {
            this.ie9Hack();
        }
        super.componentDidMount();
    }

    // ie9 下 table-cell 布局不支持宽度超出隐藏
    ie9Hack() {
        try {
            const width = this.selectDOM.currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto'
            });
        } catch (e) {
            //
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const props = this.props;
        // 随着输入自动伸展
        if (/tag|multiple/.test(props.mode) && prevState.searchValue !== this.state.searchValue) {
            this.syncWidth();
        } else {
            return super.componentDidUpdate(prevProps, prevState);
        }
    }

    useDetailValue() {
        const { popupContent, useDetailValue, dataSource } = this.props;
        return useDetailValue || (popupContent && !dataSource);
    }

    hasSearch() {
        const { showSearch, mode } = this.props;
        return showSearch || mode === 'tag';
    }

    /**
     * Menu.Item onSelect
     * @private
     * @param  {Array<string>} keys
     */
    handleMenuSelect(keys) {
        const { mode, readOnly, disabled } = this.props;

        if (readOnly || disabled) {
            return false;
        }

        const isSingle = mode === 'single';

        if (isSingle) { // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        } else { // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick');
        }
    }

    handleItemClick() {
        this.focusInput();
    }

    /**
     * 单选模式
     */
    handleSingleSelect(key, triggerType) {
        const { cacheValue } = this.props;
        // get data only from dataStore while cacheValue=false
        const itemObj = getValueDataSource(key, cacheValue ? this.valueDataSource.mapValueDS : {}, this.dataStore.getMapDS());
        this.valueDataSource = itemObj;

        this.setVisible(false, triggerType);

        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.setState({
            highlightKey: key
        });

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    }

    /**
     * 多选模式 multiple/tag
     */
    handleMultipleSelect(keys, triggerType) {
        const itemObj = getValueDataSource(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());

        const { cacheValue, mode, hiddenSelected } = this.props;

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
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(() => {
                this.handleSearchClear(triggerType);
            });
        }
    }

    handleSearchValue(value) {
        if (this.state.searchValue === value) {
            return;
        }

        const { filterLocal } = this.props;

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
                searchValue: value,
            });
        }
    }

    /**
     * Handle search input change event
     * @param {Event} e change Event
     */
    handleSearch(value) {
        this.handleSearchValue(value);

        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }

        this.props.onSearch(value);
    }

    handleSearchClear(triggerType) {
        this.handleSearchValue('');
        this.props.onSearchClear(triggerType);
    }

    // 搜索框 keyDown 事件
    handleSearchKeyDown(e) {
        const { popupContent, onKeyDown, showSearch, mode, hasClear, onToggleHighlightItem } = this.props;

        if (popupContent) {
            return onKeyDown(e);
        }

        const proxy = 'search';
        const hasSearch = this.hasSearch();

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
                if ((mode === 'multiple' && showSearch) || mode === 'tag') {
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
    }

    // 回车 选择高亮的 item
    chooseHighlightItem(proxy, e) {
        const prevVisible = this.state.visible;
        if (!prevVisible) {
            return false;
        }

        const { highlightKey } = this.state;

        // 没有高亮选项 或者 没有可选菜单
        if (highlightKey === null || !this.dataStore.getMenuDS().length) {
            return;
        }

        const { mode } = this.props;

        if (mode === 'single') {
            this.handleSingleSelect(highlightKey, 'enter');
        } else {
            const value = this.state.value || [];
            const keys = value.map(v => {
                return valueToSelectKey(v);
            });
            const index = keys.map(v => `${v}`).indexOf(highlightKey);
            if (index > -1) { // 反选
                keys.splice(index, 1);
            } else { // 勾选
                keys.push(highlightKey);
            }
            this.handleMultipleSelect(keys, 'enter');
            // 阻止事件冒泡到最外层，让Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    }

    /**
     * Handle Tag close event
     * @param  {Object} item
     * @return {Boolean} false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */
    handleTagClose(item) {

        if (this.useDetailValue()) {
            const value = this.state.value.filter(v => {
                return item.value !== v.value;
            });

            this.handleChange(value, 'tag');
        } else {
            // filter out current item, and then call handleMenuSelect
            const value = this.state.value.filter(v => {
                return item.value !== v;
            });

            this.handleMultipleSelect(value, 'tag');
        }

        this.props.onRemove(item);

        // prevent tag close
        return false;
    }

    /**
     * Handle BACKSPACE key event
     * @param {Event} e keyDown event
     * ---
     * It MUST be multiple mode
     */
    handleDeleteTag(e) {
        const value = this.state.value;
        const searchValue = this.state.searchValue;

        if (searchValue || !value || !value.length) {
            return false;
        }

        e.preventDefault();

        const nextValues = value.slice(0, value.length - 1);
        // 手动调用 handleMenuSelect 时直接传入原生的 value，可以减少 toString 的操作

        if (this.useDetailValue()) {
            this.handleChange(nextValues, 'tag');
        } else {
            this.handleMultipleSelect(nextValues, 'tag');
        }
    }

    /**
     * Handle SelectAll span click event
     * @param {Event} e click event
     */
    handleSelectAll(e) {
        e && e.preventDefault();
        const nextValues = this.dataStore.getEnableDS().map(item => item.value);
        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    }

    handleVisibleChange(visible, type) {
        this.setVisible(visible, type);
    }

    afterClose() {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    }

    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * @param {object} props
     */
    renderValues() {
        const { mode, size, valueRender, fillProps, disabled } = this.props;
        let value = this.state.value;

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

            const retvalue = fillProps ? value[fillProps] : valueRender(value);
            // 0 => '0'
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;

        } else if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }
            return value.map(v => {
                if (!v) {
                    return null;
                }

                const labelNode = fillProps ? v[fillProps] : valueRender(v);
                return (
                    <Tag key={v.value}
                        disabled={disabled || v.disabled}
                        type="primary"
                        size={size === 'large' ? 'medium' : 'small'}
                        animation={false}
                        onClose={this.handleTagClose.bind(this, v)}
                        closable>{labelNode}</Tag>
                );
            });
        }

        return null;
    }
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     */
    handleWrapClick = (e) => {
        e.preventDefault();
        this.focusInput();
    }

    handleArrowClick = (e) => {
        e.preventDefault();
        this.focusInput();

        // because of can not close Popup by click Input while hasSearch.
        // so when Popup open and hasSearch, we should close Popup intentionally
        this.state.visible && this.hasSearch() && this.setVisible(false);
    }

    handleClear = e => {
        e.stopPropagation();

        this.handleChange(undefined, 'clear');
    }

    hasClear() {
        const { hasClear, readOnly, disabled, mode, showSearch } = this.props;
        const { value, visible } = this.state;

        return typeof value !== 'undefined' && hasClear && !readOnly && !disabled && mode === 'single' && !(showSearch && visible);
    }

    /**
     * render arrow
     * @param {object} props
     * @param {function} [clickHandler]
     */
    renderExtraNode() {
        const { hasArrow, hasClear, prefix } = this.props;

        const ret = [];

        if (hasArrow) {
            ret.push(<span key="arrow" onClick={this.handleArrowClick} className={`${prefix}select-arrow`}><Icon
                type="arrow-down" /></span>);
        }

        // 不能使用 this.hasClear() 方法判断，要保证 clear 按钮 dom 结构一直存在，防止其不能成为弹层的安全节点，导致弹层没有必要的显示或隐藏
        if (hasClear) {
            ret.push(<span key="clear" onClick={this.handleClear} className={`${prefix}select-clear`}><Icon
                type="delete-filling" /></span>);
        }

        return ret;
    }

    /**
     * 选择器
     * @override
     * @param {object} props
     */
    renderSelect() {
        const { prefix, showSearch, placeholder, mode, size, className, style, readOnly, disabled, hasBorder, label, locale, state, onBlur, onFocus, rtl } = this.props;
        const others = obj.pickOthers(Select.propTypes, this.props);
        const othersData = obj.pickAttrsWith(others, 'data-');

        const visible = this.state.visible;
        const isSingle = mode === 'single';
        const hasSearch = this.hasSearch();
        const valueNodes = this.renderValues();

        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        let _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
        if (valueNodes && valueNodes.length) {
            _placeholder = null;
        }

        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }

        // 下拉箭头
        const extra = this.renderExtraNode();

        const triggerClazz = classNames([
            `${prefix}select`,
            `${prefix}select-trigger`,
            `${prefix}select-${mode}`,
            `${prefix}${size}`,
            className,
        ], {
            [`${prefix}active`]: visible,       // 用于设置 searchInput 样式
            [`${prefix}inactive`]: !visible,    // 用于设置 searchInput 样式
            [`${prefix}no-search`]: !hasSearch, // 用于判断是否将 searchInput 设置为 1px + 透明
            [`${prefix}has-search`]: hasSearch, // 用于单选时展开后判断是否隐藏值
            [`${prefix}select-in-ie`]: isIE9,
            [`${prefix}select-in-ie-fixwidth`]: this.state.fixWidth,
            [`${prefix}has-clear`]: this.hasClear()
        });

        const valuetext = this.valueDataSource.valueDS ? this.valueDataSource.valueDS.label : '';

        return (
            <span {...othersData}
                className={triggerClazz}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                ref={this.saveSelectRef}
                onClick={this.handleWrapClick}
                onMouseDown={this.handleWrapClick}
            >
                <Input
                    aria-valuetext={valuetext}
                    {...obj.pickOthers(othersData, others)}
                    role="combobox"
                    tabIndex={0}
                    aria-expanded={this.state.visible}
                    aria-disabled={disabled}
                    state={state}
                    label={label}
                    extra={extra}
                    value={this.state.searchValue}
                    size={size}
                    readOnly={!this.hasSearch() || readOnly}
                    disabled={disabled}
                    placeholder={_placeholder}
                    hasBorder={hasBorder}
                    hasClear={false}
                    htmlSize="1"
                    inputRender={(inputEl) => {
                        return this.renderSearchInput(valueNodes, _placeholder, inputEl);
                    }}
                    onChange={this.handleSearch}
                    onKeyDown={this.handleSearchKeyDown}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`${prefix}select-inner`}
                    ref={this.saveInputRef} />
            </span>
        );
    }

    renderSearchInput(valueNodes, placeholder, inputEl) {
        const { prefix, mode } = this.props;
        const isSingle = mode === 'single';

        const mirrorText = this.state.searchValue;

        const cls = classNames({
            [`${prefix}select-values`]: true,
            [`${prefix}input-text-field`]: true,
        });

        return (<span className={cls}>
            {isSingle && valueNodes ? <em>{valueNodes}</em> : valueNodes}
            <span className={`${prefix}select-trigger-search`}>
                {
                    inputEl
                }
                <span aria-hidden >{mirrorText || placeholder}&nbsp;</span>
            </span>
        </span>);
    }

    /**
     * 渲染弹层的 header 内容
     * @override
     * @param {object} props
     */
    renderMenuHeader() {
        const { prefix, hasSelectAll, mode } = this.props;

        const sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }

        const text = typeof hasSelectAll === 'boolean' ? 'Select All' : hasSelectAll;

        return (
            <div key="all" onClick={this.handleSelectAll} className={`${prefix}select-all`}>
                <span >{text}</span>
            </div>
        );
    }

    render() {
        const { mode } = this.props;
        const props = { ...this.props };

        // forbid to close Popup by click Input while hasSearch
        if (this.hasSearch()) {
            props.canCloseByTrigger = false;
        }
        if (mode === 'single') {
            props.cache = true;
        }
        return super.render(props);
    }
}

export default Select;
