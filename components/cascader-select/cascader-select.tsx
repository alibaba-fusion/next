import React, {
    Component,
    type ReactNode,
    type KeyboardEvent,
    type DetailedHTMLProps,
    type HTMLAttributes,
    type ComponentPropsWithRef,
} from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import Select from '../select';
import Cascader, { type CascaderDataItem, type Extra } from '../cascader';
import Menu from '../menu';
import { func, obj, dom, KEYCODE, type ClassPropsWithDefault } from '../util';
import zhCN from '../locale/zh-cn';
import type {
    CascaderSelectDataItem,
    CascaderSelectProps,
    CascaderSelectState,
    CascaderSelectVisibleChangeType,
} from './types';
import type { Popup } from '../overlay';

const { bindCtx } = func;
const { pickOthers } = obj;
const { getStyle } = dom;

type normalizeValueResult<T> = T extends NonNullable<T>
    ? T extends unknown[]
        ? NonNullable<T>
        : [NonNullable<T>]
    : [];

const normalizeValue = <T,>(value: T): normalizeValueResult<T> => {
    if (value) {
        if (Array.isArray(value)) {
            return value as normalizeValueResult<T>;
        }

        return [value] as normalizeValueResult<T>;
    }

    return [] as normalizeValueResult<T>;
};

export type CascaderSelectPropsWithDefault = ClassPropsWithDefault<
    CascaderSelectProps,
    typeof CascaderSelect.defaultProps
>;

/**
 * CascaderSelect
 */
class CascaderSelect extends Component<CascaderSelectProps, CascaderSelectState> {
    static displayName = 'CascaderSelect';
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        hasArrow: PropTypes.bool,
        hasBorder: PropTypes.bool,
        hasClear: PropTypes.bool,
        label: PropTypes.node,
        readOnly: PropTypes.bool,
        dataSource: PropTypes.arrayOf(PropTypes.object),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        onChange: PropTypes.func,
        defaultExpandedValue: PropTypes.arrayOf(PropTypes.string),
        expandedValue: PropTypes.arrayOf(PropTypes.string),
        expandTriggerType: PropTypes.oneOf(['click', 'hover']),
        onExpand: PropTypes.func,
        useVirtual: PropTypes.bool,
        multiple: PropTypes.bool,
        changeOnSelect: PropTypes.bool,
        canOnlyCheckLeaf: PropTypes.bool,
        checkStrictly: PropTypes.bool,
        listStyle: PropTypes.object,
        listClassName: PropTypes.string,
        displayRender: PropTypes.func,
        itemRender: PropTypes.func,
        showSearch: PropTypes.bool,
        filter: PropTypes.func,
        onSearch: PropTypes.func,
        resultRender: PropTypes.func,
        resultAutoWidth: PropTypes.bool,
        notFoundContent: PropTypes.node,
        locale: PropTypes.object,
        loadData: PropTypes.func,
        header: PropTypes.node,
        footer: PropTypes.node,
        defaultVisible: PropTypes.bool,
        visible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupContainer: PropTypes.any,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        immutable: PropTypes.bool,
        /**
         * 查询选中后清除查询条件
         */
        autoClearSearchValue: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        size: 'medium',
        disabled: false,
        hasArrow: true,
        hasBorder: true,
        hasClear: false,
        dataSource: [],
        defaultValue: null,
        expandTriggerType: 'click',
        onExpand: () => {},
        useVirtual: false,
        multiple: false,
        changeOnSelect: false,
        canOnlyCheckLeaf: false,
        checkStrictly: false,
        showSearch: false,
        filter: (searchValue: string, path: Array<{ label: string; value: string }>) => {
            return path.some(
                item =>
                    String(item.label).toLowerCase().indexOf(String(searchValue).toLowerCase()) > -1
            );
        },
        resultRender: (searchValue: string, path: Array<{ label: string; value: string }>) => {
            const parts: ReactNode[] = [];
            path.forEach((item, i) => {
                const reExp = searchValue.replace(/[-.+*?^$()[\]{}|\\]/g, v => `\\${v}`);

                const re = new RegExp(reExp, 'gi');
                const others = item.label.split(re);
                const matches = item.label.match(re);

                others.forEach((other, j) => {
                    if (other) {
                        parts.push(other);
                    }
                    if (j < others.length - 1) {
                        parts.push(<em key={`${i}-${j}`}>{matches![j]}</em>);
                    }
                });
                if (i < path.length - 1) {
                    parts.push(' / ');
                }
            });
            return <span>{parts}</span>;
        },
        resultAutoWidth: true,
        defaultVisible: false,
        onVisibleChange: () => {},
        popupProps: {},
        immutable: false,
        locale: zhCN.Select,
        autoClearSearchValue: false,
    };

    readonly props: CascaderSelectPropsWithDefault;
    _valueDataCache: Record<string, CascaderSelectDataItem>;
    _v2n: Record<string, CascaderSelectDataItem>;
    _p2n: Record<string, CascaderSelectDataItem>;
    select: InstanceType<typeof Select>;
    cascader: InstanceType<typeof Cascader>;
    popup: InstanceType<typeof Popup>;
    cascaderHeight: string | number;

    constructor(props: CascaderSelectProps) {
        super(props);

        this.state = {
            value: normalizeValue('value' in props ? props.value : props.defaultValue),
            searchValue: '',
            visible: typeof props.visible === 'undefined' ? props.defaultVisible! : props.visible,
        };

        // 缓存选中值数据
        this._valueDataCache = {};

        bindCtx(this, [
            'handleVisibleChange',
            'handleAfterOpen',
            'handleSelect',
            'handleChange',
            'handleClear',
            'handleRemove',
            'handleSearch',
            'getPopup',
            'saveSelectRef',
            'saveCascaderRef',
            'handleKeyDown',
        ]);
    }

    static getDerivedStateFromProps(props: CascaderSelectPropsWithDefault) {
        const st: Partial<CascaderSelectState> = {};

        if ('value' in props) {
            st.value = normalizeValue(props.value);
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }

        return st;
    }

    /**
     * 使组件获得焦点
     * @public
     */
    focus() {
        this.select && this.select.focusInput();
    }

    updateCache(dataSource: CascaderDataItem[]) {
        this._v2n = {};
        this._p2n = {};
        const loop = (data: CascaderDataItem[], prefix = '0') =>
            data.forEach((item, index) => {
                const { value, children } = item;
                const pos = `${prefix}-${index}`;
                this._v2n[value] = this._p2n[pos] = { ...item, pos };

                if (children && children.length) {
                    loop(children, pos);
                }
            });

        loop(dataSource);
    }

    flatValue(value: string[]) {
        const getDepth = (v: string) => {
            const pos = this.getPos(v);
            if (!pos) {
                return 0;
            }
            return pos.split('-').length;
        };
        const newValue = value.slice(0).sort((prev, next) => {
            return getDepth(prev) - getDepth(next);
        });

        for (let i = 0; i < newValue.length; i++) {
            for (let j = 0; j < newValue.length; j++) {
                if (
                    i !== j &&
                    this.isDescendantOrSelf(this.getPos(newValue[i]), this.getPos(newValue[j]))
                ) {
                    newValue.splice(j, 1);
                    j--;
                }
            }
        }

        return newValue;
    }

    isDescendantOrSelf(
        currentPos: string | undefined | null,
        targetPos: string | undefined | null
    ) {
        if (!currentPos || !targetPos) {
            return false;
        }

        const currentNums = currentPos.split('-');
        const targetNums = targetPos.split('-');

        return (
            currentNums.length <= targetNums.length &&
            currentNums.every((num, index) => {
                return num === targetNums[index];
            })
        );
    }

    getValue(pos: string) {
        return this._p2n[pos] ? this._p2n[pos].value : null;
    }

    getPos(value: string) {
        return this._v2n[value] ? this._v2n[value].pos : null;
    }

    getData(value: string[]) {
        return value.map(v => this._v2n[v] || this._valueDataCache[v]);
    }

    getLabelPath(data: CascaderSelectDataItem) {
        const nums = data.pos.split('-');
        return nums.slice(1).reduce(
            (ret, num, index) => {
                const p = nums.slice(0, index + 2).join('-');
                ret.push(this._p2n[p].label);
                return ret;
            },
            [] as CascaderSelectDataItem['label'][]
        );
    }

    getSingleData(value: string | string[]) {
        if (!value.length) {
            return null;
        }

        if (Array.isArray(value)) value = value[0];

        let data = this._v2n[value];

        if (data) {
            const labelPath = this.getLabelPath(data);
            const displayRender = this.props.displayRender || (labels => labels.join(' / '));

            data = {
                ...data,
                label: displayRender(labelPath, data),
            };

            this._valueDataCache[value] = data;
            this.refreshValueDataCache(value);
        } else {
            data = this._valueDataCache[value];
        }

        return (
            data || {
                value,
            }
        );
    }

    getMultipleData(value: string[]) {
        if (!value.length) {
            return null;
        }

        const { checkStrictly, canOnlyCheckLeaf, displayRender } = this.props;
        const flatValue = checkStrictly || canOnlyCheckLeaf ? value : this.flatValue(value);
        let data = flatValue.map(v => {
            let item = this._v2n[v];

            if (item) {
                this._valueDataCache[v] = item;
            } else {
                item = this._valueDataCache[v];
            }

            return item || { value: v };
        });

        if (displayRender) {
            data = data.map(item => {
                if (!item.pos || !(item.value in this._v2n)) {
                    return item;
                }

                const labelPath = this.getLabelPath(item);
                const newItem = {
                    ...item,
                    label: displayRender(labelPath, item),
                };

                this._valueDataCache[item.value] = newItem;

                return newItem;
            });
        }

        return data;
    }

    getIndeterminate(value: string[]) {
        const indeterminate: Array<string> = [];

        const positions: string[] = value.map(this.getPos.bind(this));
        positions.forEach(pos => {
            if (!pos) {
                return false;
            }
            const nums = pos.split('-');
            for (let i = nums.length; i > 2; i--) {
                const parentPos = nums.slice(0, i - 1).join('-');
                const parentValue = this.getValue(parentPos) as string;
                if (indeterminate.indexOf(parentValue) === -1) {
                    indeterminate.push(parentValue);
                }
            }
        });

        return indeterminate;
    }

    saveSelectRef(ref: InstanceType<typeof Select>) {
        this.select = ref;
    }

    saveCascaderRef(ref: InstanceType<typeof Cascader>) {
        this.cascader = ref;
    }

    completeValue(value: string[]) {
        const newValue = [];

        const flatValue = this.flatValue(value).reverse();
        const ps = Object.keys(this._p2n);
        for (let i = 0; i < ps.length; i++) {
            for (let j = 0; j < flatValue.length; j++) {
                const v = flatValue[j];
                if (this.isDescendantOrSelf(this.getPos(v), ps[i])) {
                    newValue.push(this.getValue(ps[i]) as string);
                    ps.splice(i, 1);
                    i--;
                    break;
                }
            }
        }

        return newValue;
    }

    isLeaf(data: CascaderSelectDataItem) {
        return !(
            (data.children && data.children.length) ||
            (!!this.props.loadData && !data.isLeaf)
        );
    }

    handleVisibleChange(visible: boolean, type?: CascaderSelectVisibleChangeType) {
        const { searchValue } = this.state;
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }

        if (!visible && searchValue) {
            this.setState({
                searchValue: '',
            });
        }

        if (['fromCascader', 'keyboard'].indexOf(type!) !== -1 && !visible) {
            // 这里需要延迟下，showSearch 的情况下通过手动设置 menuProps={{focusable: true}} 回车 focus 会有延迟
            setTimeout(() => this.select.focusInput(), 0);
        }

        this.props.onVisibleChange(visible, type);
    }

    handleKeyDown(e: KeyboardEvent<HTMLElement>) {
        const { onKeyDown } = this.props;
        const { visible } = this.state;

        if (onKeyDown) {
            onKeyDown(e);
        }

        if (!visible) {
            switch (e.keyCode) {
                case KEYCODE.UP:
                case KEYCODE.DOWN: {
                    e.preventDefault();
                    this.handleVisibleChange(true, 'keyboard');
                    break;
                }
                // no default
            }
            return;
        }

        switch (e.keyCode) {
            case KEYCODE.UP:
            case KEYCODE.DOWN:
                this.cascader.setFocusValue();
                e.preventDefault();
                break;
            default:
                break;
        }
    }

    getPopup(ref: InstanceType<typeof Popup>) {
        this.popup = ref;
        if (typeof this.props.popupProps.ref === 'function') {
            this.props.popupProps.ref(ref);
        }
    }

    handleAfterOpen() {
        if (!this.popup) {
            return;
        }

        const { prefix, popupProps } = this.props;
        const { v2 = false } = popupProps;
        if (!v2) {
            // @ts-expect-error 待 overlay 技术升级完成
            const dropDownNode = this.popup.getInstance().overlay.getInstance().getContentNode();
            const cascaderNode = dropDownNode.querySelector(`.${prefix}cascader`) as HTMLElement;
            if (cascaderNode) {
                this.cascaderHeight = getStyle(cascaderNode, 'height');
            }
        }

        if (typeof popupProps.afterOpen === 'function') {
            popupProps.afterOpen();
        }
    }

    handleSelect(value: unknown, data: CascaderSelectDataItem) {
        const { multiple, changeOnSelect } = this.props;
        const { visible, searchValue } = this.state;

        if (!multiple && (!changeOnSelect || this.isLeaf(data) || !!searchValue)) {
            this.handleVisibleChange(!visible, 'fromCascader');
        }
    }

    /**
     * 刷新值数据缓存，删除无效值
     * @param curValue - 当前值
     */
    refreshValueDataCache = (curValue: string | string[]) => {
        if (curValue) {
            const valueArr = Array.isArray(curValue) ? curValue : [curValue];

            valueArr.length &&
                Object.keys(this._valueDataCache).forEach(v => {
                    if (!valueArr.includes(v)) {
                        delete this._valueDataCache[v];
                    }
                });
        } else {
            this._valueDataCache = {};
        }
    };

    handleChange(value: string[], data: CascaderSelectDataItem[], extra: Extra) {
        const { multiple, onChange, autoClearSearchValue } = this.props;
        const { searchValue, value: stateValue } = this.state;

        const st = {} as CascaderSelectState;

        if (multiple && stateValue && Array.isArray(stateValue)) {
            const noExistedValues = stateValue.filter(v => !this._v2n[v]);

            if (noExistedValues.length > 0) {
                value = value.filter(v => {
                    return !(noExistedValues.indexOf(v) >= 0);
                });
            }

            value = [...noExistedValues, ...value];
            // onChange 中的 data 参数也应该保留不存在的 value 的数据
            // 在 dataSource 异步加载的情况下，会出现 value 重复的现象，需要去重
            data = [
                ...noExistedValues.map(v => this._valueDataCache[v]).filter(v => v),
                ...data,
            ].filter((current, index, arr) => {
                return index === arr.indexOf(current);
            });
            // 更新缓存
            this.refreshValueDataCache(value);
        }

        if (!('value' in this.props)) {
            st.value = value;
        }
        if (searchValue && ((multiple && autoClearSearchValue) || !multiple)) {
            st.searchValue = '';
        }
        if (Object.keys(st).length) {
            this.setState(st);
        }

        if (onChange) {
            onChange(value, data, extra);
        }

        if (searchValue && this.select) {
            this.select.handleSearchClear();
        }
    }

    handleClear() {
        // 单选时点击清空按钮
        const { hasClear, multiple, treeCheckable } = this.props;
        if (hasClear && (!multiple || !treeCheckable)) {
            if (!('value' in this.props)) {
                this.setState({
                    value: [],
                });
            }

            this.props.onChange!(null, null);
        }
    }

    handleRemove(currentData: CascaderSelectDataItem) {
        const { value: currentValue } = currentData;
        let value: string[];

        const { multiple, checkStrictly, onChange } = this.props;
        if (multiple) {
            value = [...this.state.value];
            value.splice(value.indexOf(currentValue), 1);

            if (this.props.onChange) {
                const data = this.getData(value);
                const checked = false;

                if (checkStrictly) {
                    this.props.onChange(value, data, {
                        checked,
                        currentData,
                        checkedData: data,
                    });
                } else {
                    const checkedValue = this.completeValue(value);
                    const checkedData = this.getData(checkedValue);
                    const indeterminateValue = this.getIndeterminate(value);
                    const indeterminateData = this.getData(indeterminateValue);
                    this.props.onChange(value, data, {
                        checked,
                        currentData,
                        checkedData,
                        indeterminateData,
                    });
                }
            }
        } else {
            value = [];
            onChange!(null, null);
        }

        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }

        this.refreshValueDataCache(value);
    }

    handleSearch(searchValue: string) {
        this.setState({
            searchValue,
        });

        this.props.onSearch && this.props.onSearch(searchValue);
    }

    getPath(pos: string) {
        const items = [];

        const nums = pos.split('-');
        // @ts-expect-error nums 应该是一个数组，这里可能是想表达 nums 的长度为 2？
        if (nums === 2) {
            items.push(this._p2n[pos]);
        } else {
            for (let i = 1; i < nums.length; i++) {
                const p = nums.slice(0, i + 1).join('-');
                items.push(this._p2n[p]);
            }
        }

        return items;
    }

    filterItems() {
        const { multiple, changeOnSelect, canOnlyCheckLeaf, filter } = this.props;
        const { searchValue } = this.state;
        let items = Object.keys(this._p2n).map(p => this._p2n[p]);
        if ((!multiple && !changeOnSelect) || (multiple && canOnlyCheckLeaf)) {
            items = items.filter(item => !item.children || !item.children.length);
        }

        return items.map(item => this.getPath(item.pos)).filter(path => filter(searchValue, path));
    }

    renderNotFound() {
        const { prefix, notFoundContent, locale } = this.props;
        return (
            <Menu className={`${prefix}cascader-select-not-found`}>
                <Menu.Item>{notFoundContent || locale.notFoundContent}</Menu.Item>
            </Menu>
        );
    }

    renderCascader() {
        const { dataSource } = this.props;
        if (dataSource.length === 0) {
            return this.renderNotFound();
        }

        const { searchValue } = this.state;
        let filteredPaths: CascaderSelectDataItem[][] = [];

        if (searchValue) {
            filteredPaths = this.filterItems();
            if (filteredPaths.length === 0) {
                return this.renderNotFound();
            }
        }

        const {
            multiple,
            useVirtual,
            changeOnSelect,
            checkStrictly,
            canOnlyCheckLeaf,
            defaultExpandedValue,
            expandTriggerType,
            onExpand,
            listStyle,
            listClassName,
            loadData,
            showSearch,
            resultRender,
            readOnly,
            itemRender,
            immutable,
            menuProps = {},
        } = this.props;
        const { value } = this.state;

        const props: ComponentPropsWithRef<typeof Cascader> = {
            dataSource,
            value,
            multiple,
            useVirtual,
            canOnlySelectLeaf: !changeOnSelect,
            checkStrictly,
            canOnlyCheckLeaf,
            defaultExpandedValue,
            expandTriggerType,
            ref: this.saveCascaderRef,
            onExpand,
            listStyle,
            listClassName,
            loadData,
            itemRender,
            immutable,
        };

        if ('expandedValue' in this.props) {
            props.expandedValue = this.props.expandedValue;
        }

        if (!readOnly) {
            props.onChange = this.handleChange;
            props.onSelect = this.handleSelect;
        }
        if (showSearch) {
            props.searchValue = searchValue;
            props.filteredPaths = filteredPaths;
            props.resultRender = resultRender;
            props.filteredListStyle = { height: this.cascaderHeight };
        }

        return <Cascader {...props} {...menuProps} />;
    }

    renderPopupContent() {
        const { prefix, header, footer } = this.props;
        return (
            <div className={`${prefix}cascader-select-dropdown`}>
                {header}
                {this.renderCascader()}
                {footer}
            </div>
        );
    }

    renderPreview(others: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
        const { prefix, multiple, className, renderPreview } = this.props;
        const { value } = this.state;
        const previewCls = classNames(className, `${prefix}form-preview`);
        let items = (multiple ? this.getMultipleData(value) : this.getSingleData(value)) || [];

        if (!Array.isArray(items)) {
            items = [items];
        }

        if (typeof renderPreview === 'function') {
            return (
                <div {...others} className={previewCls}>
                    {renderPreview(items, this.props)}
                </div>
            );
        }

        return (
            <p {...others} className={previewCls}>
                {items.map(({ label }) => label).join(', ')}
            </p>
        );
    }

    render() {
        const {
            prefix,
            size,
            hasArrow,
            hasBorder,
            hasClear,
            label,
            readOnly,
            placeholder,
            dataSource,
            disabled,
            multiple,
            className,
            showSearch,
            popupStyle,
            popupClassName,
            popupContainer,
            popupProps,
            followTrigger,
            isPreview,
            resultAutoWidth,
        } = this.props;
        const { value, searchValue, visible } = this.state;
        const others = pickOthers(CascaderSelect.propTypes, this.props);
        // mode 应与 multiple api 保持一致
        if (multiple && 'mode' in others && others.mode !== 'multiple') {
            delete others.mode;
        }

        this.updateCache(dataSource);

        if (isPreview) {
            return this.renderPreview(others);
        }

        const popupContent = this.renderPopupContent();

        const props: ComponentPropsWithRef<typeof Select> = {
            prefix,
            className,
            size,
            placeholder,
            disabled,
            hasArrow,
            hasBorder,
            hasClear,
            label,
            readOnly,
            ref: this.saveSelectRef,
            autoWidth: false,
            mode: multiple ? 'multiple' : 'single',
            value: multiple ? this.getMultipleData(value) : this.getSingleData(value),
            onChange: this.handleClear,
            onRemove: this.handleRemove,
            visible,
            onVisibleChange: this.handleVisibleChange,
            showSearch,
            onSearch: this.handleSearch,
            onKeyDown: this.handleKeyDown,
            popupContent,
            popupStyle,
            popupClassName,
            popupContainer,
            popupProps,
            followTrigger,
        };

        if (!multiple) {
            // 单选模式 select 会强制 cache=true，会导致菜单展开状态的初始化不执行
            // 若用户没有手动设置 cache true，这里重置为 false
            if (!popupProps || !popupProps.cache) {
                props.popupProps = {
                    ...popupProps,
                    cache: false,
                };
            }
        }

        if (showSearch) {
            props.popupProps = {
                ...popupProps,
                ref: this.getPopup,
                afterOpen: this.handleAfterOpen,
            };
            props.autoWidth = resultAutoWidth && !!searchValue;
        }

        return <Select {...props} {...others} />;
    }
}

export default polyfill(CascaderSelect);
