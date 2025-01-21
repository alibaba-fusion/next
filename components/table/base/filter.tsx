import React, { type Key, type ReactNode, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Dropdown from '../../dropdown';
import Menu from '../../menu';
import Button from '../../button';
import Icon from '../../icon';
import { KEYCODE } from '../../util';
import type { FilterItem, FilterProps, FilterState } from '../types';

// 共享状态的组件需要变成非受控组件
class Filter extends React.Component<FilterProps, FilterState> {
    static propTypes = {
        dataIndex: PropTypes.string,
        filters: PropTypes.array,
        filterMode: PropTypes.string,
        filterParams: PropTypes.object,
        filterMenuProps: PropTypes.object,
        filterProps: PropTypes.object,
        locale: PropTypes.object,
        onFilter: PropTypes.func,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        onFilter: () => {},
    };
    _selectedKeys: string[];

    constructor(props: FilterProps) {
        super(props);
        const filterParams = props.filterParams || {};
        const filterConfig = filterParams[props.dataIndex!] || {};
        this.state = {
            visible: filterConfig.visible || false,
            selectedKeys: filterConfig.selectedKeys || [],
            selectedKeysChangedByInner: true,
        };
        this._selectedKeys = [...this.state.selectedKeys];
    }

    static getDerivedStateFromProps(nextProps: FilterProps, prevState: FilterState) {
        const state: Partial<FilterState> = {};
        if (
            nextProps.hasOwnProperty('filterParams') &&
            typeof nextProps.filterParams !== 'undefined'
        ) {
            // @ts-expect-error getDerivedStateFromProps 是类方法，这里不应该使用 this
            const dataIndex = nextProps.dataIndex || this.props.dataIndex;
            const filterParams = nextProps.filterParams || {};
            const filterConfig = filterParams[dataIndex] || {};
            let selectedKeys;
            if (prevState.selectedKeysChangedByInner) {
                selectedKeys = prevState.selectedKeys || [];
                state.selectedKeysChangedByInner = false;
            } else {
                selectedKeys = filterConfig.selectedKeys || [];
            }

            state.selectedKeys = selectedKeys;
        }

        return state;
    }

    componentDidUpdate(prevProps: FilterProps, prevState: FilterState) {
        const { selectedKeys } = prevState;
        this._selectedKeys = [...selectedKeys];
    }

    filterKeydown = (e: KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.keyCode === KEYCODE.ENTER) {
            this.setState({
                visible: !this.state.visible,
            });
        }
    };

    onFilterVisible = (visible: boolean) => {
        this.setState({
            visible,
        });

        if (!visible) {
            const selectedKeys = [...this._selectedKeys];

            this.setState({
                selectedKeysChangedByInner: true,
                selectedKeys,
            });
        }
    };

    onFilterSelect = (selectedKeys: string[]) => {
        this.setState({
            visible: true,
            selectedKeysChangedByInner: true,
            selectedKeys,
        });
    };

    onFilterConfirm = () => {
        const selectedKeys = this.state.selectedKeys;
        const filterParams = {} as {
                [key: string]: {
                    visible: boolean;
                    selectedKeys: string[];
                };
            },
            { dataIndex } = this.props;

        filterParams[dataIndex!] = {
            visible: false,
            selectedKeys: selectedKeys,
        };
        this._selectedKeys = [...selectedKeys];
        this.setState({
            visible: false,
            selectedKeysChangedByInner: true,
        });
        // 兼容之前的格式
        this.props.onFilter!(filterParams);
    };

    onFilterClear = () => {
        const filterParams = {} as {
                [key: string]: {
                    visible: boolean;
                    selectedKeys: string[];
                };
            },
            { dataIndex } = this.props;

        filterParams[dataIndex!] = {
            visible: false,
            selectedKeys: [],
        };
        this._selectedKeys = [];
        this.setState({
            selectedKeys: [],
            visible: false,
            selectedKeysChangedByInner: true,
        });
        // 兼容之前的格式
        this.props.onFilter!(filterParams);
    };

    render() {
        const {
            filters,
            prefix,
            locale,
            className,
            filterMode,
            filterMenuProps,
            filterProps,
            rtl,
        } = this.props;

        const dropdownClassname = classnames(filterProps && filterProps.className, {
            [`${prefix}table-filter-menu`]: true,
        });
        const { visible, selectedKeys } = this.state;
        const { subMenuSelectable, ...others } = filterMenuProps || {};

        function renderMenuItem(item: { value?: Key; label: ReactNode }) {
            return <Menu.Item key={item.value}>{item.label}</Menu.Item>;
        }

        function renderSubMenu(parent: { value?: Key; label: ReactNode }, children: FilterItem[]) {
            return (
                <Menu.SubMenu
                    label={parent.label}
                    key={parent.value}
                    selectable={subMenuSelectable}
                >
                    {
                        // renderSubMenu 和 renderMenuContent 存在互相调用的问题，谁排在前面都不合适
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        renderMenuContent(children)
                    }
                </Menu.SubMenu>
            );
        }

        function renderMenuContent(list: FilterItem[]) {
            return list.map(item => {
                if (item.children) {
                    return renderSubMenu(item, item.children);
                } else {
                    return renderMenuItem(item);
                }
            });
        }

        const content = renderMenuContent(filters!),
            footer = (
                <div className={`${prefix}table-filter-footer`}>
                    <Button type="primary" onClick={this.onFilterConfirm}>
                        {locale!.ok}
                    </Button>
                    <Button onClick={this.onFilterClear}>{locale!.reset}</Button>
                </div>
            );

        const cls = classnames({
            [`${prefix}table-filter`]: true,
            [className!]: className,
        });

        const filterIconCls = classnames({
            [`${prefix}table-filter-active`]: selectedKeys && selectedKeys.length > 0,
        });

        return (
            <Dropdown
                trigger={
                    <span
                        role="button"
                        aria-label={locale!.filter}
                        onKeyDown={this.filterKeydown}
                        tabIndex={0}
                        className={cls}
                    >
                        <Icon type="filter" size="small" className={filterIconCls} />
                    </span>
                }
                triggerType="click"
                visible={visible}
                autoFocus
                rtl={rtl}
                needAdjust={false}
                onVisibleChange={this.onFilterVisible}
                className={dropdownClassname}
                {...filterProps}
            >
                <Menu
                    footer={footer}
                    rtl={rtl}
                    selectedKeys={selectedKeys}
                    selectMode={filterMode}
                    onSelect={this.onFilterSelect}
                    {...others}
                >
                    {content}
                </Menu>
            </Dropdown>
        );
    }
}

export default polyfill(Filter);
