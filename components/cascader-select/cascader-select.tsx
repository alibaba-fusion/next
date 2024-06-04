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
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 选择框大小
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 选择框占位符
         */
        placeholder: PropTypes.string,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 是否有下拉箭头
         */
        hasArrow: PropTypes.bool,
        /**
         * 是否有边框
         */
        hasBorder: PropTypes.bool,
        /**
         * 是否有清除按钮
         */
        hasClear: PropTypes.bool,
        /**
         * 自定义内联 label
         */
        label: PropTypes.node,
        /**
         * 是否只读，只读模式下可以展开弹层但不能选
         */
        readOnly: PropTypes.bool,
        /**
         * 数据源，结构可参考下方说明
         */
        dataSource: PropTypes.arrayOf(PropTypes.object),
        /**
         * （非受控）默认值
         */
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        /**
         * （受控）当前值
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        /**
         * 选中值改变时触发的回调函数
         * @param value - 选中的值，单选时返回单个值，多选时返回数组
         * @param data - 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点
         * @param extra - 额外参数
         */
        onChange: PropTypes.func,
        /**
         * 默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
         */
        defaultExpandedValue: PropTypes.arrayOf(PropTypes.string),
        /**
         * （受控）当前展开值
         */
        expandedValue: PropTypes.arrayOf(PropTypes.string),
        /**
         * 展开触发的方式
         */
        expandTriggerType: PropTypes.oneOf(['click', 'hover']),
        onExpand: PropTypes.func,
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool,
        /**
         * 是否多选
         */
        multiple: PropTypes.bool,
        /**
         * 是否选中即发生改变，该属性仅在单选模式下有效
         */
        changeOnSelect: PropTypes.bool,
        /**
         * 是否只能勾选叶子项的 checkbox，该属性仅在多选模式下有效
         */
        canOnlyCheckLeaf: PropTypes.bool,
        /**
         * 父子节点是否选中不关联
         */
        checkStrictly: PropTypes.bool,
        /**
         * 每列列表样式对象
         */
        listStyle: PropTypes.object,
        /**
         * 每列列表类名
         */
        listClassName: PropTypes.string,
        /**
         * 选择框单选时展示结果的自定义渲染函数
         * @param label - 选中路径的文本数组
         * @returns 渲染在选择框中的内容
         */
        displayRender: PropTypes.func,
        /**
         * 渲染 item 内容的方法
         * @param item - 渲染节点的 item
         * @returns item node
         */
        itemRender: PropTypes.func,
        /**
         * 是否显示搜索框
         */
        showSearch: PropTypes.bool,
        /**
         * 自定义搜索函数
         * @param searchValue - 搜索的关键字
         * @param path - 节点路径
         * @returns 是否匹配
         */
        filter: PropTypes.func,
        /**
         * 当搜索框值变化时回调
         * @param value - 数据
         * @version 1.23
         */
        onSearch: PropTypes.func,
        /**
         * 搜索结果自定义渲染函数
         * @param searchValue - 搜索的关键字
         * @param path - 匹配到的节点路径
         * @returns 渲染的内容
         */
        resultRender: PropTypes.func,
        /**
         * 搜索结果列表是否和选择框等宽
         */
        resultAutoWidth: PropTypes.bool,
        /**
         * 无数据时显示内容
         */
        notFoundContent: PropTypes.node,
        /**
         * 国际化
         */
        locale: PropTypes.object,
        /**
         * 异步加载数据函数
         * @param data - 当前点击异步加载的数据
         */
        loadData: PropTypes.func,
        /**
         * 自定义下拉框头部
         */
        header: PropTypes.node,
        /**
         * 自定义下拉框底部
         */
        footer: PropTypes.node,
        /**
         * 初始下拉框是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 当前下拉框是否显示
         */
        visible: PropTypes.bool,
        /**
         * 下拉框显示或关闭时触发事件的回调函数
         * @param visible - 是否显示
         * @param type - 触发显示关闭的操作类型，fromTrigger 表示由 trigger 的点击触发；docClick 表示由 document 的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 下拉框自定义样式对象
         */
        popupStyle: PropTypes.object,
        /**
         * 下拉框样式自定义类名
         */
        popupClassName: PropTypes.string,
        /**
         * 下拉框挂载的容器节点
         */
        popupContainer: PropTypes.any,
        /**
         * 透传到 Popup 的属性对象
         */
        popupProps: PropTypes.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param value - 选择值 \{ label: , value:\}
         */
        renderPreview: PropTypes.func,
        /**
         * 是否是不可变数据
         * @version 1.23
         */
        immutable: PropTypes.bool,
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
    };

    readonly props: CascaderSelectPropsWithDefault;
    select: InstanceType<typeof Select>;
    cascader: InstanceType<typeof Cascader>;
    popup: InstanceType<typeof Popup>;
    private _valueDataCache: Record<string, CascaderSelectDataItem>;
    private _v2n: Record<string, CascaderSelectDataItem>;
    private _p2n: Record<string, CascaderSelectDataItem>;
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
        const { multiple, onChange } = this.props;
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
        if (!multiple && searchValue) {
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
