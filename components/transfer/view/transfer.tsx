import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';

import Icon from '../../icon';
import Button from '../../button';
import zhCN from '../../locale/zh-cn';
import { func, obj } from '../../util';
import ConfigProvider from '../../config-provider';
import TransferPanel from '../view/transfer-panel';
import type {
    DragGapType,
    PositionType,
    TransferDataItem,
    TransferProps,
    TransferState,
} from '../types';

const { config } = ConfigProvider;
const { bindCtx } = func;
const { pickOthers } = obj;

const getLeftValue = (dataSource: Array<TransferDataItem>, rightValue: Array<string>) => {
    return dataSource
        .map(item => item.value)
        .filter(itemValue => {
            return rightValue.indexOf(itemValue) === -1;
        });
};

const filterCheckedValue = (
    left: Array<string>,
    right: Array<string>,
    dataSource: Array<TransferDataItem>
) => {
    const result: {
        left: Array<string>;
        right: Array<string>;
    } = {
        left: [],
        right: [],
    };

    if (left.length || right.length) {
        const value = dataSource.map(item => item.value);
        value.forEach(itemValue => {
            if (left.indexOf(itemValue) > -1) {
                result.left.push(itemValue);
            } else if (right.indexOf(itemValue) > -1) {
                result.right.push(itemValue);
            }
        });
    }

    return result;
};

/**
 * Transfer
 */
class Transfer extends Component<TransferProps, TransferState> {
    static contextTypes = {
        prefix: PropTypes.string,
    };

    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 移动选项模式
         */
        mode: PropTypes.oneOf(['normal', 'simple']),
        /**
         * 数据源
         */
        dataSource: PropTypes.arrayOf(PropTypes.object),
        /**
         * （用于受控）当前值
         */
        value: PropTypes.arrayOf(PropTypes.string),
        /**
         * （用于非受控）初始值
         */
        defaultValue: PropTypes.arrayOf(PropTypes.string),
        /**
         * 值发生改变的时候触发的回调函数
         */
        onChange: PropTypes.func,
        /**
         * Item 被选中的时候触发的回调函数
         */
        onSelect: PropTypes.func,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 是否禁用左侧面板
         */
        leftDisabled: PropTypes.bool,
        /**
         * 是否禁用右侧面板
         */
        rightDisabled: PropTypes.bool,
        /**
         * 列表项渲染函数
         */
        itemRender: PropTypes.func,
        /**
         * 自定义搜索函数
         */
        filter: PropTypes.func,
        /**
         * 搜索框输入时触发的回调函数
         */
        onSearch: PropTypes.func,
        /**
         * 搜索框占位符
         */
        searchPlaceholder: PropTypes.string,
        /**
         * 左右面板是否显示搜索框
         */
        showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),
        /**
         * 左右面板搜索框配置项，同 Search 组件 props
         */
        searchProps: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
        /**
         * 列表为空显示内容
         */
        notFoundContent: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
        /**
         * 左右面板标题
         */
        titles: PropTypes.arrayOf(PropTypes.node),
        /**
         * 向右向左移动按钮显示内容
         */
        operations: PropTypes.arrayOf(PropTypes.node),
        /**
         * 左面板默认选中值
         */
        defaultLeftChecked: PropTypes.arrayOf(PropTypes.string),
        /**
         * 右面板默认选中值
         */
        defaultRightChecked: PropTypes.arrayOf(PropTypes.string),
        /**
         * 左右面板列表自定义样式类名
         */
        listClassName: PropTypes.string,
        /**
         * 左右面板列表自定义样式对象
         */
        listStyle: PropTypes.object,
        /**
         * 是否允许拖拽排序
         */
        sortable: PropTypes.bool,
        /**
         * 拖拽排序时触发的回调函数
         */
        onSort: PropTypes.func,
        /**
         * 自定义国际化文案对象
         */
        locale: PropTypes.object,
        /**
         * 请设置 id 以保证transfer的可访问性
         */
        id: PropTypes.string,
        /**
         * 接收 children 自定义渲染列表
         */
        children: PropTypes.func,
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool,
        /**
         * 是否显示底部全选 checkbox
         */
        showCheckAll: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        mode: 'normal',
        dataSource: [],
        defaultValue: [],
        disabled: false,
        leftDisabled: false,
        rightDisabled: false,
        showCheckAll: true,
        itemRender: (data: TransferDataItem) => data.label,
        showSearch: false,
        filter: (searchedValue: string, data: TransferDataItem) => {
            let labelString = '';
            const loop = (arg: TransferDataItem['label']) => {
                if (
                    React.isValidElement<{ children: React.ReactNode }>(arg) &&
                    arg.props.children
                ) {
                    React.Children.forEach(arg.props.children, loop);
                } else if (typeof arg === 'string') {
                    labelString += arg;
                }
            };
            loop(data.label);

            return (
                labelString.length >= searchedValue.length &&
                labelString.indexOf(searchedValue) > -1
            );
        },
        onSearch: () => {},
        notFoundContent: 'Not Found',
        titles: [],
        operations: [],
        defaultLeftChecked: [],
        defaultRightChecked: [],
        sortable: false,
        onSort: () => {},
        locale: zhCN.Transfer,
    };

    static normalizeValue(value?: string | Array<string>) {
        if (value) {
            if (Array.isArray(value)) {
                return value;
            }
            /* istanbul ignore next */
            return [value];
        }

        return [];
    }

    static getDerivedStateFromProps(nextProps: TransferProps, prevState: TransferState) {
        const { innerUpdate, value, leftValue } = prevState;
        if (innerUpdate) {
            return {
                innerUpdate: false,
                value,
                leftValue,
            };
        }
        const st: Partial<TransferState> = {};

        let newValue;
        if ('value' in nextProps) {
            const value = Transfer.normalizeValue(nextProps.value);
            st.value = value;
            newValue = value;
        } else {
            /* istanbul ignore next */
            newValue = prevState.value;
        }
        st.leftValue = getLeftValue(nextProps.dataSource!, newValue);
        const { left, right } = filterCheckedValue(
            prevState.leftCheckedValue,
            prevState.rightCheckedValue,
            nextProps.dataSource!
        );
        st.leftCheckedValue = left;
        st.rightCheckedValue = right;

        return st;
    }

    constructor(props: TransferProps, context?: unknown) {
        super(props, context);

        const {
            value,
            defaultValue,
            defaultLeftChecked,
            defaultRightChecked,
            dataSource,
            rtl,
            operations,
        } = props;
        if (Array.isArray(operations) && !operations.length) {
            operations.push(<Icon rtl={rtl} type="arrow-right" />);
            operations.push(<Icon rtl={rtl} type="arrow-left" />);
        }
        const { left, right } = filterCheckedValue(
            Transfer.normalizeValue(defaultLeftChecked),
            Transfer.normalizeValue(defaultRightChecked),
            dataSource!
        );
        const stValue = Transfer.normalizeValue('value' in props ? value : defaultValue);
        this.state = {
            value: stValue,
            leftCheckedValue: left,
            rightCheckedValue: right,
            leftValue: getLeftValue(dataSource!, stValue),
        };

        bindCtx(this, [
            'handlePanelChange',
            'handlePanelSort',
            'handleMoveItem',
            'handleSimpleMove',
            'handleSimpleMoveAll',
        ]);
    }

    groupDatasource(
        value: Array<string>,
        itemValues: Array<string>,
        dataSource: Array<TransferDataItem>
    ) {
        return value.reduce((ret, itemValue) => {
            const index = itemValues.indexOf(itemValue);
            if (index > -1) {
                ret.push(dataSource[index]);
            }
            return ret;
        }, [] as Array<TransferDataItem>);
    }

    handlePanelChange(position: PositionType, value: string[]) {
        const { leftCheckedValue, rightCheckedValue } = this.state;
        const { onSelect } = this.props;
        const valuePropName = position === 'left' ? 'leftCheckedValue' : 'rightCheckedValue';
        // inner state changed
        this.setState({
            innerUpdate: true,
            [valuePropName]: value,
        } as Pick<TransferState, 'innerUpdate' | 'leftCheckedValue' | 'rightCheckedValue'>);
        onSelect &&
            onSelect(
                position === 'left' ? value : leftCheckedValue,
                position === 'left' ? rightCheckedValue : value,
                position === 'left' ? 'source' : 'target'
            );
    }

    handlePanelSort(
        position: PositionType,
        dragValue: string,
        referenceValue: string,
        dragGap: DragGapType
    ) {
        const { value, leftValue } = this.state;
        const newValue = position === 'right' ? value : leftValue;
        const currentIndex = newValue.indexOf(dragValue);
        const referenceIndex = newValue.indexOf(referenceValue);
        let expectIndex = dragGap === 'before' ? referenceIndex : referenceIndex + 1;
        if (currentIndex === expectIndex) {
            return;
        }

        newValue.splice(currentIndex, 1);
        if (currentIndex < expectIndex) {
            expectIndex = expectIndex - 1;
        }
        newValue.splice(expectIndex, 0, dragValue);
        this.setState(
            {
                innerUpdate: true,
                value,
                leftValue,
            },
            () => {
                this.props.onSort!(newValue, position);
            }
        );
    }

    handleMoveItem(direction: PositionType) {
        let rightValue;
        let newLeftValue;
        let movedValue;
        let valuePropName;

        const { value, leftValue, leftCheckedValue, rightCheckedValue } = this.state;

        if (direction === 'right') {
            rightValue = leftCheckedValue.concat(value);
            newLeftValue = leftValue.filter(
                itemValue => leftCheckedValue.indexOf(itemValue) === -1
            );
            movedValue = leftCheckedValue;
            valuePropName = 'leftCheckedValue';
        } else {
            rightValue = value.filter(itemValue => rightCheckedValue.indexOf(itemValue) === -1);
            newLeftValue = rightCheckedValue.concat(leftValue);
            movedValue = rightCheckedValue;
            valuePropName = 'rightCheckedValue';
        }

        const st = { [valuePropName]: [] };

        this.setValueState(st, rightValue, newLeftValue, movedValue, direction);
    }

    handleSimpleMove(direction: PositionType, v: string) {
        let rightValue;
        let newLeftValue;

        const { value, leftValue } = this.state;

        if (direction === 'right') {
            rightValue = [v].concat(value);
            newLeftValue = leftValue.filter(itemValue => itemValue !== v);
        } else {
            rightValue = value.filter(itemValue => itemValue !== v);
            newLeftValue = [v].concat(leftValue);
        }

        this.setValueState({}, rightValue, newLeftValue, [v], direction);
    }

    handleSimpleMoveAll(direction: PositionType) {
        let rightValue;
        let newLeftValue;
        let movedValue;

        const { dataSource } = this.props;
        const { value, leftValue } = this.state;
        const disabledValue = dataSource!.reduce((ret, item) => {
            if (item.disabled) {
                ret.push(item.value);
            }

            return ret;
        }, [] as string[]);

        if (direction === 'right') {
            movedValue = leftValue.filter(itemValue => disabledValue.indexOf(itemValue) === -1);
            rightValue = movedValue.concat(value);
            newLeftValue = leftValue.filter(itemValue => disabledValue.indexOf(itemValue) > -1);
        } else {
            movedValue = value.filter(itemValue => disabledValue.indexOf(itemValue) === -1);
            rightValue = value.filter(itemValue => disabledValue.indexOf(itemValue) > -1);
            newLeftValue = movedValue.concat(leftValue);
        }

        this.setValueState({}, rightValue, newLeftValue, movedValue, direction);
    }

    setValueState(
        st: Partial<TransferState>,
        rightValue: string[],
        leftValue: string[],
        movedValue: string[],
        direction: PositionType
    ) {
        const { dataSource } = this.props;
        const callback = () => {
            if ('onChange' in this.props) {
                const itemValues = dataSource!.map(item => item.value);
                const rightData = this.groupDatasource(rightValue, itemValues, dataSource!);
                const leftData = this.groupDatasource(leftValue, itemValues, dataSource!);
                const movedData = this.groupDatasource(movedValue, itemValues, dataSource!);

                this.props.onChange!(rightValue, rightData, {
                    leftValue,
                    leftData,
                    movedValue,
                    movedData,
                    direction,
                });
            }
        };

        if (!('value' in this.props)) {
            st.value = rightValue;
            st.leftValue = leftValue;
        }

        if (Object.keys(st).length) {
            this.setState(st as TransferState, callback);
        } else {
            callback();
        }
    }

    renderCenter() {
        const { prefix, mode, operations, disabled, leftDisabled, rightDisabled, locale } =
            this.props;
        const { leftCheckedValue, rightCheckedValue } = this.state;
        return (
            <div className={`${prefix}transfer-operations`}>
                {mode === 'simple' ? (
                    <Icon className={`${prefix}transfer-move`} size="large" type="switch" />
                ) : (
                    [
                        <Button
                            aria-label={locale!.moveToRight}
                            key="l2r"
                            className={`${prefix}transfer-operation`}
                            type={leftCheckedValue.length ? 'primary' : 'normal'}
                            disabled={leftDisabled || disabled || !leftCheckedValue.length}
                            onClick={this.handleMoveItem.bind(this, 'right')}
                        >
                            {operations![0]}
                        </Button>,
                        <Button
                            aria-label={locale!.moveToLeft}
                            key="r2l"
                            className={`${prefix}transfer-operation`}
                            type={rightCheckedValue.length ? 'primary' : 'normal'}
                            disabled={rightDisabled || disabled || !rightCheckedValue.length}
                            onClick={this.handleMoveItem.bind(this, 'left')}
                        >
                            {operations![1]}
                        </Button>,
                    ]
                )}
            </div>
        );
    }

    render() {
        const {
            prefix,
            mode,
            disabled,
            className,
            dataSource = [],
            locale,
            showSearch = false,
            searchProps = {},
            filter,
            onSearch,
            leftDisabled,
            rightDisabled,
            searchPlaceholder,
            notFoundContent,
            titles = [],
            listClassName,
            listStyle,
            itemRender,
            sortable,
            useVirtual,
            rtl,
            id,
            children,
            showCheckAll,
        } = this.props;
        const { value, leftValue, leftCheckedValue, rightCheckedValue } = this.state;
        const itemValues = dataSource.map(item => item.value);
        const leftDatasource = this.groupDatasource(leftValue, itemValues, dataSource);
        const rightDatasource = this.groupDatasource(value, itemValues, dataSource);
        const panelProps = {
            prefix,
            mode,
            locale,
            filter,
            onSearch,
            searchPlaceholder,
            listClassName,
            listStyle,
            itemRender,
            onMove: this.handleSimpleMove,
            onMoveAll: this.handleSimpleMoveAll,
            onChange: this.handlePanelChange,
            sortable,
            useVirtual,
            onSort: this.handlePanelSort,
            baseId: id,
            customerList: children,
            showCheckAll,
        };
        const others = pickOthers(Transfer.propTypes, this.props);

        if (rtl) {
            others.dir = 'rtl';
        }
        const _showSearch = Array.isArray(showSearch) ? showSearch : [showSearch, showSearch];
        const _searchProps = Array.isArray(searchProps) ? searchProps : [searchProps, searchProps];
        const _notFoundContent = Array.isArray(notFoundContent)
            ? notFoundContent
            : [notFoundContent, notFoundContent];
        return (
            <div className={cx(`${prefix}transfer`, className)} id={id} {...others}>
                <TransferPanel
                    {...panelProps}
                    position="left"
                    dataSource={leftDatasource}
                    disabled={leftDisabled || disabled}
                    value={leftCheckedValue}
                    showSearch={_showSearch[0]}
                    searchProps={_searchProps[0]}
                    notFoundContent={_notFoundContent[0]}
                    title={titles[0]}
                />
                {this.renderCenter()}
                <TransferPanel
                    {...panelProps}
                    position="right"
                    dataSource={rightDatasource}
                    disabled={rightDisabled || disabled}
                    value={rightCheckedValue}
                    showSearch={_showSearch[1]}
                    searchProps={_searchProps[1]}
                    notFoundContent={_notFoundContent[1]}
                    title={titles[1]}
                />
            </div>
        );
    }
}

export default config(polyfill(Transfer));
