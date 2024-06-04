import React, { Component, type ReactElement, type FocusEvent, type ComponentType } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import cloneDeep from 'lodash.clonedeep';
import cx from 'classnames';
import Menu, { type ItemProps, type CheckboxItemProps } from '../menu';
import { func, obj, dom } from '../util';
import CascaderMenu from './menu';
import CascaderMenuItem from './item';
import {
    filterChildValue,
    getAllCheckedValues,
    forEachEnableNode,
    isSiblingOrSelf,
    isDescendantOrSelf,
    isNodeChecked,
} from './utils';
import type {
    CascaderDataItem,
    CascaderDataItemWithPosInfo,
    ItemProps as CascaderItemProps,
    CascaderProps,
    CascaderState,
    NormalizeValueReturns,
    P2n,
    V2n,
} from './types';

const { bindCtx } = func;
const { pickOthers } = obj;
const { addClass, removeClass, setStyle, getStyle } = dom;

// 数据打平
const flatDataSource = (
    data: Array<CascaderDataItem>,
    prefix = '0',
    v2n: V2n = {},
    p2n: P2n = {}
) => {
    data.forEach((item, index) => {
        const { value, children } = item;
        const pos = `${prefix}-${index}`;
        const newValue = String(value);

        item.value = newValue;

        v2n[newValue] = p2n[pos] = {
            ...item,
            pos,
            _source: item,
        };

        if (children && children.length) {
            flatDataSource(children, pos, v2n, p2n);
        }
    });

    return { v2n, p2n };
};

function preHandleData(data: Array<CascaderDataItem>, immutable?: boolean) {
    const _data = immutable ? cloneDeep(data) : data;

    try {
        return flatDataSource(_data);
    } catch (err) {
        if ((err.message || '').match('Cannot assign to read only property')) {
            // eslint-disable-next-line no-console
            console.error(
                err.message,
                'try to set immutable to true to allow immutable dataSource'
            );
        }
        throw err;
    }
}

const getExpandedValue = (v: string | undefined, _v2n: V2n, _p2n: V2n) => {
    if (!v || !_v2n[v]) {
        return [];
    }

    const pos = _v2n[v].pos;
    if (pos.split('-').length === 2) {
        return [];
    }

    const expandedMap: Record<string, string> = {};
    Object.keys(_p2n).forEach(p => {
        if (isDescendantOrSelf(p, pos) && p !== pos) {
            expandedMap[_p2n[p].value] = p;
        }
    });

    return Object.keys(expandedMap).sort((prev, next) => {
        return expandedMap[prev].split('-').length - expandedMap[next].split('-').length;
    });
};

const normalizeValue = <T,>(value: T): NormalizeValueReturns<T> => {
    if (value) {
        if (Array.isArray(value)) {
            return value as NormalizeValueReturns<T>;
        }

        return [value] as NormalizeValueReturns<T>;
    }

    return [] as NormalizeValueReturns<T>;
};

/**
 * Cascader
 */
class Cascader extends Component<CascaderProps, CascaderState> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        pure: PropTypes.bool,
        className: PropTypes.string,
        dataSource: PropTypes.arrayOf(PropTypes.object),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        defaultExpandedValue: PropTypes.arrayOf(PropTypes.string),
        expandedValue: PropTypes.arrayOf(PropTypes.string),
        expandTriggerType: PropTypes.oneOf(['click', 'hover']),
        onExpand: PropTypes.func,
        useVirtual: PropTypes.bool,
        multiple: PropTypes.bool,
        canOnlySelectLeaf: PropTypes.bool,
        canOnlyCheckLeaf: PropTypes.bool,
        checkStrictly: PropTypes.bool,
        listStyle: PropTypes.object,
        listClassName: PropTypes.string,
        itemRender: PropTypes.func,
        loadData: PropTypes.func,
        searchValue: PropTypes.string,
        onBlur: PropTypes.func,
        filteredPaths: PropTypes.array,
        filteredListStyle: PropTypes.object,
        resultRender: PropTypes.func,
        immutable: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        pure: false,
        dataSource: [],
        defaultValue: null,
        canOnlySelectLeaf: false,
        canOnlyCheckLeaf: false,
        expandTriggerType: 'click',
        multiple: false,
        useVirtual: false,
        checkStrictly: false,
        itemRender: (item: CascaderDataItem) => item.label,
        immutable: false,
    };

    lastExpandedValue: string[];
    cascader: HTMLDivElement;
    cascaderInner: HTMLDivElement;
    indeterminate: string[];

    constructor(props: CascaderProps) {
        super(props);

        const {
            defaultValue,
            value,
            defaultExpandedValue,
            expandedValue,
            dataSource,
            multiple,
            checkStrictly,
            canOnlyCheckLeaf,
            loadData,
            immutable,
        } = props;

        const { v2n, p2n } = preHandleData(dataSource!, immutable);

        let normalizedValue = normalizeValue(typeof value === 'undefined' ? defaultValue : value);

        if (!loadData) {
            normalizedValue = normalizedValue.filter(v => v2n[v]);
        }

        const realExpandedValue =
            typeof expandedValue === 'undefined'
                ? typeof defaultExpandedValue === 'undefined'
                    ? getExpandedValue(normalizedValue[0], v2n, p2n)
                    : normalizeValue(defaultExpandedValue)
                : normalizeValue(expandedValue);
        const st = {
            value: normalizedValue,
            expandedValue: realExpandedValue,
            isExpandedValueSetByAction: false,
        };
        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            st.value = getAllCheckedValues(st.value, v2n, p2n);
        }

        this.lastExpandedValue = [...st.expandedValue];
        this.state = {
            ...st,
            _v2n: v2n,
            _p2n: p2n,
        };

        bindCtx(this, [
            'handleMouseLeave',
            'handleFocus',
            'handleFold',
            'getCascaderNode',
            'getCascaderInnerNode',
            'onBlur',
        ]);
    }

    static getDerivedStateFromProps(props: CascaderProps, state: CascaderState) {
        const { v2n, p2n } = preHandleData(props.dataSource!, props.immutable);
        const states: Partial<CascaderState> = {};

        if ('value' in props) {
            states.value = normalizeValue(props.value);
            if (!props.loadData) {
                states.value = states.value.filter(v => v2n[v]);
            }

            const { multiple, checkStrictly, canOnlyCheckLeaf } = props;
            if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
                states.value = getAllCheckedValues(states.value, v2n, p2n);
            }

            if (
                // 非受控模式下，若已经通过用户事件调整了 expandedValue，则忽略下面的空值兜底处理
                !state.isExpandedValueSetByAction &&
                !state.expandedValue.length &&
                !('expandedValue' in props)
            ) {
                states.expandedValue = getExpandedValue(states.value[0], v2n, p2n);
            }
        }

        if ('expandedValue' in props) {
            states.expandedValue = normalizeValue(props.expandedValue);
            // 受控模式则重置 isExpandedValueSetByAction
            states.isExpandedValueSetByAction = false;
        }

        return {
            ...states,
            _v2n: v2n,
            _p2n: p2n,
        };
    }
    componentDidMount() {
        this.setCascaderInnerWidth();
    }

    componentDidUpdate() {
        this.setCascaderInnerWidth();
    }

    getCascaderNode(ref: HTMLDivElement) {
        this.cascader = ref;
    }

    getCascaderInnerNode(ref: HTMLDivElement) {
        this.cascaderInner = ref;
    }

    setCascaderInnerWidth() {
        if (!this.cascaderInner) {
            return;
        }
        const menus: HTMLElement[] = [].slice.call(
            this.cascaderInner.querySelectorAll(`.${this.props.prefix}cascader-menu-wrapper`)
        );
        if (menus.length === 0) {
            return;
        }

        const menusWidth = Math.ceil(
            menus.reduce((ret, menu) => {
                return ret + Math.ceil(menu.getBoundingClientRect().width);
            }, 0)
        );

        if (getStyle(this.cascaderInner, 'width') !== menusWidth) {
            setStyle(this.cascaderInner, 'width', menusWidth);
        }

        if (getStyle(this.cascader, 'display') === 'inline-block') {
            const hasRightBorderClass = `${this.props.prefix}has-right-border`;
            menus.forEach(menu => removeClass(menu, hasRightBorderClass));
            if (this.cascader.clientWidth > menusWidth) {
                addClass(menus[menus.length - 1], hasRightBorderClass);
            }
        }
    }

    flatValue(value: string[]) {
        return filterChildValue(value, this.state._v2n, this.state._p2n);
    }

    getValue(pos: string) {
        return this.state._p2n[pos] ? this.state._p2n[pos].value : null;
    }

    getPos(value: string) {
        return this.state._v2n[value] ? this.state._v2n[value].pos : null;
    }

    getData(value: string[]) {
        return value.map(v => this.state._v2n[v]);
    }

    processValue(value: string[], v: string, checked: boolean) {
        const index = value.indexOf(v);
        if (checked && index === -1) {
            value.push(v);
        } else if (!checked && index > -1) {
            value.splice(index, 1);
        }
    }

    handleSelect(v: string, canExpand: boolean) {
        if (!(this.props.canOnlySelectLeaf && canExpand)) {
            const data = this.state._v2n[v];
            const nums = data.pos.split('-');
            const selectedPath = nums.slice(1).reduce((ret, num, index) => {
                const p = nums.slice(0, index + 2).join('-');
                ret.push(this.state._p2n[p]);
                return ret;
            }, [] as CascaderDataItemWithPosInfo[]);

            if (this.state.value[0] !== v) {
                if (!('value' in this.props)) {
                    this.setState({
                        value: [v],
                    });
                }

                if ('onChange' in this.props) {
                    this.props.onChange!(v, data, {
                        selectedPath,
                    });
                }
            }

            if ('onSelect' in this.props) {
                this.props.onSelect!(v, data, {
                    selectedPath,
                });
            }
        }

        if (canExpand) {
            if (!this.props.canOnlySelectLeaf) {
                this.lastExpandedValue = this.state.expandedValue.slice(0, -1);
            }
        } else {
            this.lastExpandedValue = [...this.state.expandedValue];
        }
    }
    handleCheck(v: string, checked: boolean) {
        const { checkStrictly, canOnlyCheckLeaf } = this.props;
        const value = [...this.state.value];

        if (checkStrictly || canOnlyCheckLeaf) {
            this.processValue(value, v, checked);
        } else {
            const pos = this.getPos(v);

            const ps = Object.keys(this.state._p2n);

            forEachEnableNode(this.state._v2n[v], node => {
                if (node.checkable === false) return;
                this.processValue(value, node.value, checked);
            });

            let currentPos = pos;
            const nums = pos!.split('-');
            for (let i = nums.length; i > 2; i--) {
                let parentCheck = true;

                const parentPos = nums.slice(0, i - 1).join('-');
                if (
                    this.state._p2n[parentPos].disabled ||
                    this.state._p2n[parentPos].checkboxDisabled ||
                    this.state._p2n[parentPos].checkable === false
                ) {
                    currentPos = parentPos;
                    continue;
                }

                const parentValue = this.state._p2n[parentPos].value;
                const parentChecked = value.indexOf(parentValue) > -1;
                if (!checked && !parentChecked) {
                    break;
                }

                for (let j = 0; j < ps.length; j++) {
                    const p = ps[j];
                    const pnode = this.state._p2n[p];
                    if (
                        isSiblingOrSelf(currentPos!, p) &&
                        !pnode.disabled &&
                        !pnode.checkboxDisabled
                    ) {
                        const k = pnode.value;
                        if (pnode.checkable === false) {
                            if (!pnode.children || pnode.children.length === 0) {
                                continue;
                            }
                            for (let m = 0; m < pnode.children.length; m++) {
                                if (!pnode.children.every(child => isNodeChecked(child, value))) {
                                    parentCheck = false;
                                    break;
                                }
                            }
                        } else if (value.indexOf(k) === -1) {
                            parentCheck = false;
                        }

                        if (!parentCheck) break;
                    }
                }

                this.processValue(value, parentValue, parentCheck);

                currentPos = parentPos;
            }
        }

        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }

        if ('onChange' in this.props) {
            if (checkStrictly || canOnlyCheckLeaf) {
                const data = this.getData(value);
                this.props.onChange!(value, data, {
                    checked,
                    currentData: this.state._v2n[v],
                    checkedData: data,
                });
            } else {
                const flatValue = this.flatValue(value);
                const flatData = this.getData(flatValue);
                const checkedData = this.getData(value);
                const indeterminateValue = this.getIndeterminate(value);
                const indeterminateData = this.getData(indeterminateValue);
                this.props.onChange!(flatValue, flatData, {
                    checked,
                    currentData: this.state._v2n[v],
                    checkedData,
                    indeterminateData,
                });
            }
        }

        this.lastExpandedValue = [...this.state.expandedValue];
    }

    handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean) {
        const { expandedValue } = this.state;

        if (canExpand || expandedValue.length > level) {
            // FIXME 此处实现有 bug，state.expandedValue 被直接修改，并没有考虑受控非受控的情况
            if (canExpand) {
                expandedValue.splice(level, expandedValue.length - level, value);
            } else {
                expandedValue.splice(level);
            }

            const callback = () => {
                this.setExpandValue(expandedValue, true);

                if (focusedFirstChild) {
                    const endExpandedValue = expandedValue[expandedValue.length - 1];
                    this.setState({
                        focusedValue: this.state._v2n[endExpandedValue].children![0].value,
                    });
                }
            };

            const { loadData } = this.props;
            if (canExpand && loadData) {
                const data = this.state._v2n[value];
                return loadData(data, data._source!).then(callback);
            } else {
                return callback();
            }
        }
    }

    handleMouseLeave() {
        this.setExpandValue([...this.lastExpandedValue], true);
    }

    setExpandValue(expandedValue: string[], isExpandedValueSetByAction = false) {
        if (!('expandedValue' in this.props)) {
            this.setState({
                expandedValue,
                isExpandedValueSetByAction,
            });
        }

        if ('onExpand' in this.props) {
            this.props.onExpand!(expandedValue);
        }
    }

    getFirstFocusKeyByDataSource(dataSource: Array<CascaderDataItem>) {
        if (!dataSource || dataSource.length === 0) {
            return '';
        }

        for (let i = 0; i < dataSource.length; i++) {
            if (dataSource[i] && !dataSource[i].disabled) {
                return dataSource[i].value;
            }
        }

        return '';
    }

    getFirstFocusKeyByFilteredPaths(filteredPaths: CascaderProps['filteredPaths']) {
        if (!filteredPaths || filteredPaths.length === 0) {
            return '';
        }

        for (let i = 0; i < filteredPaths.length; i++) {
            const path = filteredPaths[i];
            if (!path.some(item => item.disabled)) {
                const lastItem = path[path.length - 1];
                return lastItem.value;
            }
        }

        return '';
    }

    getFirstFocusKey() {
        const { dataSource, searchValue, filteredPaths } = this.props;

        return !searchValue
            ? this.getFirstFocusKeyByDataSource(dataSource!)
            : this.getFirstFocusKeyByFilteredPaths(filteredPaths);
    }

    setFocusValue() {
        this.setState({
            focusedValue: this.getFirstFocusKey(),
        });
    }

    handleFocus(focusedValue: string) {
        this.setState({
            focusedValue,
        });
    }

    handleFold() {
        const { expandedValue } = this.state;
        if (expandedValue.length > 0) {
            this.setExpandValue(expandedValue.slice(0, -1), true);
        }

        this.setState({
            focusedValue: expandedValue[expandedValue.length - 1],
        });
    }

    getIndeterminate(value: string[]) {
        const indeterminateValues: string[] = [];

        const poss = filterChildValue(
            value
                .filter(v => !!this.state._v2n[v])
                .filter(
                    v =>
                        !this.state._v2n[v].disabled &&
                        !this.state._v2n[v].checkboxDisabled &&
                        this.state._v2n[v].checkable !== false
                ),
            this.state._v2n,
            this.state._p2n
        ).map(v => this.state._v2n[v].pos);
        poss.forEach(pos => {
            const nums = pos.split('-');
            for (let i = nums.length; i > 2; i--) {
                const parentPos = nums.slice(0, i - 1).join('-');
                const parent = this.state._p2n[parentPos];
                if (parent.disabled || parent.checkboxDisabled) break;
                const parentValue = parent.value;
                if (indeterminateValues.indexOf(parentValue) === -1) {
                    indeterminateValues.push(parentValue);
                }
            }
        });

        return indeterminateValues;
    }

    onBlur(e: FocusEvent<HTMLElement>) {
        this.setState({
            focusedValue: undefined,
        });

        this.props.onBlur && this.props.onBlur(e);
    }

    renderMenu(data: CascaderProps['dataSource'], level: number) {
        const {
            prefix,
            multiple,
            useVirtual,
            checkStrictly,
            expandTriggerType,
            loadData,
            canOnlyCheckLeaf,
            listClassName,
            listStyle,
            itemRender,
        } = this.props;
        const { value, expandedValue, focusedValue } = this.state;

        return (
            <CascaderMenu
                key={level}
                prefix={prefix}
                useVirtual={useVirtual}
                className={listClassName}
                style={listStyle}
                focusedKey={focusedValue}
                onItemFocus={this.handleFocus}
                onBlur={this.onBlur}
            >
                {
                    data!
                        .map(item => {
                            const disabled = !!item.disabled;
                            const canExpand =
                                (!!item.children && !!item.children.length) ||
                                (!!loadData && !item.isLeaf);
                            const expanded = expandedValue[level] === item.value;
                            const props: CascaderItemProps = {
                                prefix,
                                disabled,
                                canExpand,
                                expanded,
                                expandTriggerType,
                                onExpand: this.handleExpand.bind(
                                    this,
                                    item.value,
                                    level,
                                    canExpand
                                ),
                                onFold: this.handleFold,
                            };

                            if ('title' in item) {
                                props.title = item.title;
                            }

                            if (multiple) {
                                props.checkable = !(canOnlyCheckLeaf && canExpand);
                                props.checked = value.indexOf(item.value) > -1 || !!item.checked;
                                props.indeterminate =
                                    (checkStrictly || canOnlyCheckLeaf
                                        ? false
                                        : this.indeterminate.indexOf(item.value) > -1) ||
                                    !!item.indeterminate;
                                props.checkboxDisabled = !!item.checkboxDisabled;
                                props.onCheck = this.handleCheck.bind(this, item.value);
                            } else {
                                props.selected = value[0] === item.value;
                                props.onSelect = this.handleSelect.bind(
                                    this,
                                    item.value,
                                    canExpand
                                );
                            }

                            const itemContent = itemRender!(item, props);
                            if (itemContent === null) {
                                return null;
                            }
                            return (
                                <CascaderMenuItem key={item.value} {...props}>
                                    {itemContent}
                                </CascaderMenuItem>
                            );
                        })
                        .filter(v => v) as ReactElement[]
                }
            </CascaderMenu>
        );
    }

    renderMenus() {
        const { dataSource } = this.props;
        const { expandedValue } = this.state;

        const menus = [];
        let data: CascaderProps['dataSource'] | null | undefined = dataSource;

        for (let i = 0; i <= expandedValue.length; i++) {
            if (!data) {
                break;
            }

            menus.push(this.renderMenu(data, i));

            let expandedItem;
            for (let j = 0; j < data.length; j++) {
                if (data[j].value === expandedValue[i]) {
                    expandedItem = data[j];
                    break;
                }
            }
            data = expandedItem ? expandedItem.children : null;
        }

        return menus;
    }

    renderFilteredItem(path: CascaderDataItemWithPosInfo[]) {
        const { prefix, resultRender, searchValue, multiple } = this.props;
        const { value } = this.state;
        const lastItem = path[path.length - 1];

        let Item: ComponentType<CheckboxItemProps | ItemProps>;
        let props: CheckboxItemProps | ItemProps = {
            className: `${prefix}cascader-filtered-item`,
            disabled: path.some(item => item.disabled),
            children: resultRender!(searchValue!, path),
        };

        if (multiple) {
            Item = Menu.CheckboxItem;
            const { checkStrictly, canOnlyCheckLeaf } = this.props;
            props = {
                ...props,
                checked: value.indexOf(lastItem.value) > -1,
                indeterminate:
                    !checkStrictly &&
                    !canOnlyCheckLeaf &&
                    this.indeterminate.indexOf(lastItem.value) > -1,
                checkboxDisabled: lastItem.checkboxDisabled,
                onChange: this.handleCheck.bind(this, lastItem.value),
            };
        } else {
            Item = Menu.Item as ComponentType<ItemProps>;
            props = {
                ...props,
                selected: value[0] === lastItem.value,
                onSelect: this.handleSelect.bind(this, lastItem.value, false),
            };
        }
        return <Item key={lastItem.value} {...props} />;
    }

    renderFilteredList() {
        const { prefix, filteredListStyle, filteredPaths, focusable = false } = this.props;
        const { focusedValue } = this.state;
        return (
            <Menu
                // 如果不设置为false， CascaderSelect 开启 showSearch后，弹窗展开时，光标无法到input上去，也无法输入.
                // TODO: set focusable=true in 2.x
                focusable={focusable}
                focusedKey={focusedValue}
                onItemFocus={this.handleFocus}
                className={`${prefix}cascader-filtered-list`}
                style={filteredListStyle}
            >
                {filteredPaths!.map(path => this.renderFilteredItem(path))}
            </Menu>
        );
    }

    render() {
        const {
            prefix,
            rtl,
            className,
            expandTriggerType,
            multiple,
            dataSource,
            checkStrictly,
            canOnlyCheckLeaf,
            searchValue,
        } = this.props;
        // FIXME 这样做风险比较大，propTypes 如果不全，就会出现一些 div 接收不了的参数传导到 div
        const others = pickOthers(Cascader.propTypes, this.props);
        const { value } = this.state;

        if (rtl) {
            others.dir = 'rtl';
        }

        const props = {
            className: cx({
                [`${prefix}cascader`]: true,
                multiple,
                [className!]: !!className,
            }),
            ref: 'cascader',
            ...others,
        };
        if (expandTriggerType === 'hover') {
            props.onMouseLeave = this.handleMouseLeave;
        }

        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            this.indeterminate = this.getIndeterminate(value);
        }

        return (
            <div {...props} ref={this.getCascaderNode}>
                {!searchValue ? (
                    <div className={`${prefix}cascader-inner`} ref={this.getCascaderInnerNode}>
                        {dataSource && dataSource.length ? this.renderMenus() : null}
                    </div>
                ) : (
                    this.renderFilteredList()
                )}
            </div>
        );
    }
}

export default polyfill(Cascader);
