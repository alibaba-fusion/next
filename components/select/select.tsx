import React, {
    type ChangeEvent,
    type ReactElement,
    type KeyboardEvent,
    type UIEvent,
    type MouseEvent,
    type ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import { func, obj, KEYCODE, env, str } from '../util';
import Tag from '../tag';
import Input from '../input';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import Base, { type BaseState } from './base';
import { isNull, getValueDataSource, valueToSelectKey } from './util';
import type {
    BaseProps,
    DataSourceItem,
    ObjectItem,
    SelectProps,
    VisibleChangeType,
} from './types';

const { bindCtx, noop } = func;
const isIE9 = env.ieVersion === 9;

/**
 * 无障碍化注意事项：
 * 1. Select 无搜索情况下，不应该让 Input 可 focus，此时外层 wrap 必须可 focus，并且需要相应 focus 事件让外边框发生变化
 *
 * TODO: hightLight 后续改造注意点
 * 1. hightLight 跟随点击变化 (fixed) 2. 弹窗打开时根据 是否高亮第一个选项的 api 开关设置是否 hightLight 第一项
 */

// 自定义弹层：1. 不需要关心 Menu 的点击事件 2. 不需要关心 dataSource 变化

interface SelectState extends BaseState {
    fixWidth?: boolean;
}

/**
 * Select
 */
class Select extends Base<SelectProps, SelectState> {
    static propTypes = {
        ...Base.propTypes,
        mode: PropTypes.oneOf(['single', 'multiple', 'tag']),
        value: PropTypes.any,
        defaultValue: PropTypes.any,
        onChange: PropTypes.func,
        dataSource: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    value: PropTypes.any,
                    label: PropTypes.any,
                    disabled: PropTypes.bool,
                    children: PropTypes.array,
                }),
                PropTypes.bool,
                PropTypes.number,
                PropTypes.string,
            ])
        ),
        hasBorder: PropTypes.bool,
        hasArrow: PropTypes.bool,
        showSearch: PropTypes.bool,
        onSearch: PropTypes.func,
        onSearchClear: PropTypes.func,
        hasSelectAll: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        fillProps: PropTypes.string,
        useDetailValue: PropTypes.bool,
        cacheValue: PropTypes.bool,
        valueRender: PropTypes.func,
        itemRender: PropTypes.func,
        notFoundContent: PropTypes.node,
        style: PropTypes.object,
        searchValue: PropTypes.string,
        tagInline: PropTypes.bool,
        tagClosable: PropTypes.bool,
        adjustTagSize: PropTypes.bool,
        maxTagCount: PropTypes.number,
        maxTagPlaceholder: PropTypes.func,
        hiddenSelected: PropTypes.bool,
        onRemove: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onKeyDown: PropTypes.func,
        locale: PropTypes.object,
        popupAutoFocus: PropTypes.bool,
        showDataSourceChildren: PropTypes.bool,
    };

    static defaultProps: SelectProps = {
        ...Base.defaultProps,
        locale: zhCN.Select,
        mode: 'single',
        showSearch: false,
        cacheValue: true,
        tagInline: false,
        adjustTagSize: false,
        onSearch: noop,
        onSearchClear: noop,
        hasArrow: true,
        onRemove: noop,
        // highlightFirstItem: true,
        valueRender: item => {
            return item && (item.label || item.value);
        },
        onKeyDown: noop,
        onFocus: noop,
        onBlur: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        popupAutoFocus: false,
        tagClosable: true,
    };

    static displayName = 'Select';
    selectAllYet: boolean;

    constructor(props: SelectProps) {
        super(props);

        // because dataSource maybe updated while select a item, so we should cache choosen value's item
        this.valueDataSource = {
            valueDS: [], // [{value,label}]
            mapValueDS: {}, // {value: {value,label}}
        };

        const searchValue = 'searchValue' in props ? props.searchValue : '';

        this.dataStore.setOptions({
            key: searchValue,
            addonKey: props.mode === 'tag', // tag 模式手动输入的数据
        });

        Object.assign(this.state, {
            searchValue: searchValue,
            dataSource: this.setDataSource(props),
        });

        // 根据 value 和计算后的 dataSource，更新 value 对应的详细数据 valueDataSource
        if (typeof this.state.value !== 'undefined') {
            this.valueDataSource = getValueDataSource(
                this.state.value,
                this.valueDataSource.mapValueDS!,
                this.dataStore.getMapDS()
            );
        }

        bindCtx(this, [
            'handleMenuSelect',
            'handleItemClick',
            'handleSearch',
            'handleSearchKeyDown',
            'handleSelectAll',
            'maxTagPlaceholder',
        ]);
    }

    static getDerivedStateFromProps(nextProps: SelectProps, prevState: BaseState) {
        const state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            Object.assign(state, {
                value: nextProps.value,
            });
        }

        if ('highlightKey' in nextProps && nextProps.highlightKey !== prevState.highlightKey) {
            Object.assign(state, {
                highlightKey: nextProps.highlightKey,
            });
        } else if (
            'value' in nextProps &&
            nextProps.value !== prevState.value &&
            nextProps.mode === 'single'
        ) {
            Object.assign(state, {
                highlightKey: nextProps.value,
            });
        }

        if ('searchValue' in nextProps && nextProps.searchValue !== prevState.searchValue) {
            const searchValue = nextProps.searchValue;
            Object.assign(state, {
                searchValue: searchValue === undefined || searchValue === null ? '' : searchValue,
            });
        }

        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            Object.assign(state, {
                visible: nextProps.visible,
            });
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    }

    componentDidUpdate(prevProps: SelectProps, prevState: BaseState) {
        const props = this.props;
        if ('searchValue' in props && this.state.searchValue !== prevState.searchValue) {
            this.dataStore.setOptions({ key: this.state.searchValue });
        }

        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag',
            });
        }
        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag',
            });
        }
        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter,
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal,
            });
        }

        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({
                dataSource: this.setDataSource(props),
            });

            if (!props.popupContent) {
                this.setFirstHightLightKeyForMenu(this.state.searchValue);
            }
        }

        if ('value' in props) {
            this.valueDataSource = getValueDataSource(
                props.value,
                this.valueDataSource.mapValueDS!,
                this.dataStore.getMapDS()
            );
            this.updateSelectAllYet(this.valueDataSource.value);
        } else if (
            'defaultValue' in props &&
            props.defaultValue === this.valueDataSource.value &&
            (props.children !== prevProps.children || props.dataSource !== prevProps.dataSource)
        ) {
            // has defaultValue and value not changed and dataSource changed
            // fix: set defaultValue first, then update dataSource.
            this.valueDataSource = getValueDataSource(
                props.defaultValue,
                this.valueDataSource.mapValueDS!,
                this.dataStore.getMapDS()
            );
        }

        if (
            prevProps.label !== this.props.label ||
            prevState.value !== this.state.value ||
            props.searchValue !== this.state.searchValue
        ) {
            this.syncWidth();
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
            const width = (this.selectDOM as HTMLElement & { currentStyle: HTMLElement['style'] })
                .currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto',
            });
        } catch (e) {
            //
        }
    }

    useDetailValue() {
        const { popupContent, useDetailValue, dataSource } = this.props;
        return useDetailValue || (!!popupContent && !dataSource);
    }

    hasSearch() {
        const { showSearch, mode } = this.props;
        return showSearch || mode === 'tag';
    }

    getTagSize() {
        const { size, adjustTagSize } = this.props;
        if (adjustTagSize) {
            return size;
        }
        return size === 'large' ? 'medium' : 'small';
    }

    /**
     * Menu.Item onSelect
     */
    handleMenuSelect(keys: string[], item: { props: { _key: string } }) {
        const { mode, readOnly, disabled } = this.props;

        if (readOnly || disabled) {
            return false;
        }

        const isSingle = mode === 'single';

        if (isSingle) {
            // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        } else {
            // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick', item.props && item.props._key);
        }
    }

    handleItemClick(key: string) {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }

        // key is string type here, fix https://github.com/alibaba-fusion/next/issues/4004
        if (this.props.mode === 'single' && key === String(this.state.value)) {
            this.setVisible(false, 'itemClick');
        }
    }

    /**
     * 单选模式
     */
    handleSingleSelect(key: string, triggerType: VisibleChangeType) {
        // TODO: 这里 cacheValue=false 有问题，dataSource 更新的时候就应该处理
        const { cacheValue } = this.props;
        // get data only from dataStore while cacheValue=false
        const itemObj = getValueDataSource(
            key,
            cacheValue ? this.valueDataSource.mapValueDS! : {},
            this.dataStore.getMapDS()
        );
        this.valueDataSource = itemObj;

        this.setVisible(false, triggerType);

        // 应在 return 之前传出 highlightKey
        this.setState({
            highlightKey: key,
        });

        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value!, triggerType, itemObj.valueDS);
        }

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    }

    /**
     * 多选模式 multiple/tag
     */
    handleMultipleSelect(
        keys: DataSourceItem[] | undefined,
        triggerType: VisibleChangeType,
        key?: string | null,
        keepSearchValue?: boolean
    ) {
        const itemObj = getValueDataSource(
            keys,
            this.valueDataSource.mapValueDS!,
            this.dataStore.getMapDS()
        );

        const { cacheValue, mode, hiddenSelected } = this.props;

        // cache those value maybe not exists in dataSource
        if (cacheValue || mode === 'tag') {
            this.valueDataSource = itemObj;
        }

        if (hiddenSelected) {
            this.setVisible(false, triggerType);
        }

        // 因为搜索后会设置 hightLight 为第一个 item，menu 渲染会自动滚动到 hightLight 的元素上面。
        // 所以设置 hightLight 为当前选中项避免滚动
        key &&
            this.state.visible &&
            this.setState({
                highlightKey: key,
            });

        if (this.useDetailValue()) {
            this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.updateSelectAllYet(itemObj.value);

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue && !keepSearchValue) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(() => {
                this.handleSearchClear(triggerType);
            });
        }
    }

    updateSelectAllYet(value?: unknown) {
        // multiple mode
        // is current state select all or not
        this.selectAllYet = false;
        if (this.props.hasSelectAll && Array.isArray(value)) {
            const selectAllValues = this.dataStore.getEnableDS().map(item => item.value);

            if (selectAllValues.length <= value.length) {
                this.selectAllYet = true;

                selectAllValues.forEach(val => {
                    if (value.indexOf(val) === -1) {
                        this.selectAllYet = false;
                        return;
                    }
                });
            }
        }
    }

    handleSearchValue(value: string) {
        if (this.state.searchValue === value) {
            return;
        }

        const { filterLocal } = this.props;

        if (filterLocal) {
            if (!('searchValue' in this.props)) {
                this.setState({
                    searchValue: value,
                    dataSource: this.dataStore.updateByKey(value),
                });
                this.setFirstHightLightKeyForMenu(value);
            }
        } else if (!('searchValue' in this.props)) {
            this.setState({
                searchValue: value,
            });
        }
    }

    /**
     * Handle search input change event
     */
    handleSearch(value: string, e: ChangeEvent<HTMLInputElement>) {
        this.handleSearchValue(value);

        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }

        this.props.onSearch!(value, e);
    }

    handleSearchClear(triggerType: string) {
        this.handleSearchValue('');
        this.props.onSearchClear!(triggerType);
    }

    // 搜索框 keyDown 事件
    handleSearchKeyDown(e: KeyboardEvent<HTMLElement>) {
        const {
            popupContent,
            onKeyDown,
            showSearch,
            mode,
            hasClear,
            onToggleHighlightItem,
            readOnly,
            disabled,
        } = this.props;

        const hasSearch = this.hasSearch();

        if (popupContent) {
            // 搜索的时候不阻止冒泡会无法输入
            if (hasSearch && e.keyCode === KEYCODE.SPACE) {
                e.stopPropagation();
            }
            return onKeyDown!(e);
        }

        const proxy = 'search';

        switch (e.keyCode) {
            case KEYCODE.UP:
                e.preventDefault();
                onToggleHighlightItem!(this.toggleHighlightItem(-1), 'up');
                break;
            case KEYCODE.DOWN:
                e.preventDefault();
                onToggleHighlightItem!(this.toggleHighlightItem(1), 'down');
                break;
            case KEYCODE.ENTER:
                e.preventDefault();
                if (readOnly || disabled) {
                    break;
                }
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
                if (readOnly || disabled) {
                    break;
                }
                if ((mode === 'multiple' && showSearch) || mode === 'tag') {
                    // 在多选并且有搜索的情况下，删除最后一个 tag
                    const valueDS = this.valueDataSource.valueDS;
                    if (
                        valueDS &&
                        valueDS.length &&
                        !(valueDS as ObjectItem[])[(valueDS as ObjectItem[]).length - 1].disabled
                    ) {
                        this.handleDeleteTag(e);
                    }
                } else if (mode === 'single' && hasClear && !this.state.visible) {
                    // 单选、非展开、并且可清除的情况，允许按删除键清除
                    this.handleClear(e);
                }
                break;
            default:
                break;
        }

        onKeyDown!(e);
    }

    chooseMultipleItem(key: string) {
        const value = (this.state.value as DataSourceItem[]) || [];
        const keys = value.map(v => {
            return valueToSelectKey(v);
        });

        let keepSearchValue = false;

        const index = keys.map(v => `${v}`).indexOf(key);

        if (index > -1) {
            // unselect
            keys.splice(index, 1);
            keepSearchValue = true; // 回车反选保留搜索值
        } else {
            // select
            keys.push(key);
        }

        this.handleMultipleSelect(keys, 'enter', null, keepSearchValue);
    }

    // 回车 选择高亮的 item
    chooseHighlightItem(proxy: unknown, e: UIEvent<HTMLElement>) {
        const { mode } = this.props;

        if (!this.state.visible) {
            // input tag by itself
            if (mode === 'tag' && this.state.searchValue) {
                this.chooseMultipleItem(this.state.searchValue);
            }
            return false;
        }

        const { highlightKey } = this.state;

        // 没有高亮选项 或者 没有可选菜单
        if (highlightKey === null || !this.dataStore.getMenuDS().length) {
            return;
        }

        if (mode === 'single') {
            this.handleSingleSelect(highlightKey!, 'enter');
        } else {
            this.chooseMultipleItem(highlightKey!);
            // 阻止事件冒泡到最外层，让 Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    }

    /**
     * Handle Tag close event
     * @returns false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */
    handleTagClose(item: ObjectItem) {
        const { readOnly } = this.props;
        if (readOnly) return false;
        const stateValue = this.state.value;
        if (this.useDetailValue()) {
            const value = (stateValue as ObjectItem[]).filter(v => {
                return item.value !== v.value;
            });

            this.handleChange(value, 'tag');
        } else {
            // filter out current item, and then call handleMenuSelect
            const value = (stateValue as Exclude<DataSourceItem, ObjectItem>[]).filter(v => {
                return item.value !== v;
            });

            this.handleMultipleSelect(value, 'tag');
        }

        this.props.onRemove!(item);

        // prevent tag close
        return false;
    }

    /**
     * Handle BACKSPACE key event
     * @param e - keyDown event
     * ---
     * It MUST be multiple mode
     */
    handleDeleteTag(e: UIEvent<HTMLElement>) {
        const value = this.state.value as ObjectItem[];
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
     * @param e - click event
     */
    handleSelectAll(e: UIEvent<HTMLElement>) {
        e && e.preventDefault();
        let nextValues: ObjectItem['value'][];

        if (this.selectAllYet) {
            nextValues = [];
        } else {
            nextValues = this.dataStore.getEnableDS().map(item => item.value);
        }

        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    }

    handleVisibleChange(visible: boolean, type: VisibleChangeType) {
        this.setVisible(visible, type);
    }

    afterClose() {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    }

    maxTagPlaceholder(selectedValues: ObjectItem[], totalValues: ObjectItem[]) {
        const { locale } = this.props;

        return `${str.template(locale!.maxTagPlaceholder, {
            selected: selectedValues.length,
            total: totalValues.length,
        })}`;
    }

    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * TODO: 2.0 中 value 接受 string/object\{value,label\} 两种类型的数据，自动做识别，可以避免用户去转换，也和 date-picker 对齐
     * 此外 onChange 第一个参数根据 api 来控制类型是 [string] 还是 [object\{value,label\}]
     */
    renderValues(): ReactNode {
        const {
            prefix,
            mode,
            valueRender,
            fillProps,
            disabled,
            maxTagCount,
            maxTagPlaceholder,
            tagInline,
            tagClosable,
        } = this.props;
        const tagSize = this.getTagSize();
        let value = this.state.value;

        if (isNull(value)) {
            return null;
        }

        // get detail value
        if (!this.useDetailValue()) {
            if (value === this.valueDataSource.value) {
                value = this.valueDataSource.valueDS;
            } else {
                value = getValueDataSource(
                    value,
                    this.valueDataSource.mapValueDS!,
                    this.dataStore.getMapDS()
                ).valueDS;
            }
        }

        if (mode === 'single') {
            if (!value) {
                return null;
            }

            const retvalue =
                fillProps && typeof value === 'object' && fillProps in value
                    ? (value as ObjectItem)[fillProps]
                    : valueRender!(value as ObjectItem);
            // 0 => '0'
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;
        } else if (value) {
            let detailedValueArr = value as ObjectItem[];
            let limitedCountValue = detailedValueArr;
            let maxTagPlaceholderEl;
            const totalValue = this.dataStore.getFlattenDS();
            const holder =
                'maxTagPlaceholder' in this.props ? maxTagPlaceholder : this.maxTagPlaceholder;

            if (maxTagCount !== undefined && detailedValueArr.length > maxTagCount && !tagInline) {
                limitedCountValue = limitedCountValue.slice(0, maxTagCount);
                maxTagPlaceholderEl = (
                    <Tag key="_count" type="primary" size={tagSize} animation={false}>
                        {holder!(detailedValueArr, totalValue)}
                    </Tag>
                );
            }

            if (detailedValueArr.length > 0 && tagInline) {
                maxTagPlaceholderEl = (
                    <div className={`${prefix}select-tag-compact`} key="_count">
                        {holder!(detailedValueArr, totalValue)}
                    </div>
                );
            }

            detailedValueArr = limitedCountValue;
            if (!Array.isArray(detailedValueArr)) {
                value = [detailedValueArr];
            }

            const selectedValueNodes = detailedValueArr.map(v => {
                if (!v) {
                    return null;
                }
                const labelNode = fillProps ? v[fillProps] : valueRender!(v);

                return (
                    <Tag
                        key={v.value as string}
                        disabled={disabled || v.disabled}
                        type="primary"
                        size={tagSize}
                        animation={false}
                        onClose={this.handleTagClose.bind(this, v)}
                        closable={tagClosable}
                        color={v.color}
                    >
                        {labelNode}
                    </Tag>
                );
            });

            if (maxTagPlaceholderEl) {
                if (tagInline) {
                    selectedValueNodes.unshift(maxTagPlaceholderEl);
                } else {
                    selectedValueNodes.push(maxTagPlaceholderEl);
                }
            }
            return selectedValueNodes;
        }

        return null;
    }
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     * @returns
     */
    handleWrapClick = (e: MouseEvent<HTMLElement>) => {
        // ignore click on input to choose text
        if ((e.target as HTMLElement).nodeName !== 'INPUT') {
            e.preventDefault();
        }
        this.focusInput();
    };

    handleArrowClick = (e: UIEvent<HTMLElement>) => {
        e.preventDefault();
        this.focusInput();

        // because of can not close Popup by click Input while hasSearch.
        // so when Popup open and hasSearch, we should close Popup intentionally
        this.state.visible && this.hasSearch() && this.setVisible(false);
    };

    handleClear = (e: UIEvent<HTMLElement>) => {
        e.stopPropagation();
        this.selectAllYet = false;
        this.handleChange(undefined, 'clear');
    };

    hasClear() {
        const { hasClear, readOnly, disabled, showSearch } = this.props;
        const { value, visible } = this.state;

        return (
            typeof value !== 'undefined' &&
            value !== null &&
            (Array.isArray(value) ? value.length > 0 : true) &&
            hasClear &&
            !readOnly &&
            !disabled &&
            !(showSearch && visible)
        );
    }

    /**
     * render arrow
     */
    renderExtraNode() {
        const { hasArrow, hasClear, prefix } = this.props;

        const ret: ReactElement[] = [];

        if (hasArrow) {
            ret.push(
                <span
                    key="arrow"
                    aria-hidden
                    onClick={this.handleArrowClick}
                    className={`${prefix}select-arrow`}
                >
                    <Icon type="arrow-down" className={`${prefix}select-symbol-fold`} />
                </span>
            );
        }

        // do not use this.hasClear() here, to make sure clear btn always exists, can not influenced by apis like `disabled` `readOnly`
        if (hasClear) {
            ret.push(
                <span
                    key="clear"
                    aria-hidden
                    onClick={this.handleClear}
                    className={`${prefix}select-clear`}
                >
                    <Icon type="delete-filling" />
                </span>
            );
        }

        return ret;
    }

    /**
     * 选择器
     * @override
     * @param props -
     */
    renderSelect() {
        const {
            prefix,
            showSearch,
            placeholder,
            mode,
            size,
            className,
            style,
            readOnly,
            disabled,
            hasBorder,
            label,
            locale,
            state,
            onBlur,
            onFocus,
            onMouseEnter,
            onMouseLeave,
            rtl,
        } = this.props;
        const others = obj.pickOthers(Select.propTypes, this.props);
        // select 不是输入框，应过滤掉 addonTextAfter
        if ('addonTextAfter' in others) {
            delete others.addonTextAfter;
        }
        const othersData = obj.pickAttrsWith(others, 'data-');

        const visible = this.state.visible;
        const isSingle = mode === 'single';
        const hasSearch = this.hasSearch();
        const valueNodes = this.renderValues();

        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        let _placeholder: string | undefined =
            placeholder ||
            (locale!.selectPlaceholder as string) ||
            (locale!.selectPlaceHolder as string);
        if (valueNodes && (valueNodes as ReactElement[]).length) {
            _placeholder = undefined;
        }

        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }

        // 下拉箭头
        const extra = this.renderExtraNode();

        const triggerClazz = classNames(
            [
                `${prefix}select`,
                `${prefix}select-trigger`,
                `${prefix}select-${mode}`,
                `${prefix}${size}`,
                className,
            ],
            {
                [`${prefix}active`]: visible, // 用于设置 searchInput 样式
                [`${prefix}inactive`]: !visible, // 用于设置 searchInput 样式
                [`${prefix}no-search`]: !hasSearch, // 用于判断是否将 searchInput 设置为 1px + 透明
                [`${prefix}has-search`]: hasSearch, // 用于单选时展开后判断是否隐藏值
                [`${prefix}select-in-ie`]: isIE9,
                [`${prefix}select-in-ie-fixwidth`]: this.state.fixWidth,
                [`${prefix}has-clear`]: this.hasClear(),
            }
        );

        return (
            <span
                {...othersData}
                className={triggerClazz}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                ref={this.saveSelectRef}
                onClick={this.handleWrapClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={this.handleWrapClick}
            >
                <Input
                    {...obj.pickOthers(othersData, others)}
                    role="combobox"
                    tabIndex={0}
                    aria-expanded={this.state.visible ? 'true' : 'false'}
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
                    inputRender={inputEl => {
                        return this.renderSearchInput(valueNodes, _placeholder, inputEl);
                    }}
                    onChange={this.handleSearch}
                    onKeyDown={this.handleSearchKeyDown}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`${prefix}select-inner`}
                    ref={this.saveInputRef}
                />
                <span className={`${prefix}sr-only`} aria-live="polite">
                    {this.state.srReader}
                </span>
            </span>
        );
    }

    renderSearchInput(
        valueNodes: ReactNode,
        placeholder: string | undefined,
        inputEl: ReactElement
    ) {
        const { prefix, mode, tagInline } = this.props;
        const isSingle = mode === 'single';

        const mirrorText = this.state.searchValue;

        const cls = classNames({
            [`${prefix}select-values`]: true,
            [`${prefix}input-text-field`]: true,
            [`${prefix}select-compact`]: !isSingle && tagInline,
        });
        const title = typeof valueNodes === 'string' ? valueNodes : '';
        const searchInput = [
            isSingle && valueNodes ? (
                <em title={title} key="select-value">
                    {valueNodes}
                </em>
            ) : (
                valueNodes
            ),
        ];
        const triggerSearch = (
            <span key="trigger-search" className={`${prefix}select-trigger-search`}>
                {inputEl}
                <span aria-hidden>
                    <span>{mirrorText || placeholder}</span>
                    {/* fix https://github.com/alibaba-fusion/next/issues/3781 */}
                    <span style={{ display: 'inline-block', width: 1 }}>&nbsp;</span>
                </span>
            </span>
        );

        if (!isSingle && tagInline) {
            searchInput.unshift(triggerSearch);
        } else {
            searchInput.push(triggerSearch);
        }

        return <span className={cls}>{searchInput}</span>;
    }

    /**
     * 渲染弹层的 header 内容
     * @override
     * @param props -
     */
    renderMenuHeader() {
        const { prefix, hasSelectAll, mode, locale, menuProps } = this.props;

        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }

        const sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }

        const text = typeof hasSelectAll === 'boolean' ? locale!.selectAll : hasSelectAll;

        const selectAllYet = this.selectAllYet;

        const cls = classNames({
            [`${prefix}select-all`]: true,
            [`${prefix}selected`]: selectAllYet,
        });

        const clsInner = classNames({
            [`${prefix}select-all-inner`]: true,
        });

        // remove style={{'lineHeight': 'unset'}} in next Y
        // remove style={{'display': 'none'}} in next Y
        return (
            <div
                key="all"
                onClick={this.handleSelectAll}
                className={cls}
                style={{ lineHeight: 'unset' }}
            >
                {selectAllYet ? (
                    <Icon
                        className={`${prefix}menu-icon-selected`}
                        style={{ display: 'none' }}
                        type="select"
                    />
                ) : null}
                <span className={clsInner}>{text}</span>
            </div>
        );
    }

    render() {
        const { mode } = this.props;
        const props: BaseProps = { ...this.props };

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

export default polyfill(Select);
